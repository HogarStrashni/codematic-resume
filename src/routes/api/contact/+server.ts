import { json } from '@sveltejs/kit';

import { TURNSTILE_SECRET_KEY } from '$env/static/private';
import { FORM_STATUS_MESSAGES } from '$lib/constants';
import { reserveEmailSlot, sendEmail, validateTurnstileToken } from '$lib/server/email-utils';
import { getContactFormData, isContactFormPayload, validateContactForm } from '$lib/utils';

export const POST = async ({ request, platform }) => {
  let formData: FormData;

  try {
    formData = await request.formData();
  } catch (err) {
    console.error('Invalid request', err);
    return json(
      { message: FORM_STATUS_MESSAGES.unknownError },
      {
        status: 400
      }
    );
  }

  const values = getContactFormData(formData);

  if (!isContactFormPayload(values)) {
    console.error('Invalid Contact form');
    return json(
      { message: FORM_STATUS_MESSAGES.invalidRequest },
      {
        status: 400
      }
    );
  }

  if (values.confirmEmail.trim() !== '') {
    return json(
      { message: FORM_STATUS_MESSAGES.success },
      {
        status: 200
      }
    );
  }

  const errors = validateContactForm(values);

  if (Object.keys(errors).length > 0) {
    return json(
      { message: FORM_STATUS_MESSAGES.missingFieldsError, errors },
      {
        status: 422
      }
    );
  }

  const token = formData.get('cf-turnstile-response');
  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';

  if (!token || typeof token !== 'string') {
    console.error('Failed to sent/receive token');
    return json(
      { message: FORM_STATUS_MESSAGES.turnstileFailed },
      {
        status: 400
      }
    );
  }

  try {
    const { success } = await validateTurnstileToken(ip, token, TURNSTILE_SECRET_KEY);
    if (!success) {
      console.error('Turnstile verification rejected the request');
      return json(
        { message: FORM_STATUS_MESSAGES.turnstileFailed },
        {
          status: 400
        }
      );
    }
  } catch (err) {
    console.error('Turnstile verification request failed', err);
    return json(
      { message: FORM_STATUS_MESSAGES.serverError },
      {
        status: 500
      }
    );
  }

  const email = platform?.env.EMAIL;

  if (!email) {
    console.error('Email service is not configured');
    return json(
      { message: FORM_STATUS_MESSAGES.serverError },
      {
        status: 500
      }
    );
  }

  const db = platform?.env.DB;

  if (!db) {
    console.error('Database is not configured');
    return json(
      { message: FORM_STATUS_MESSAGES.unknownError },
      {
        status: 500
      }
    );
  }

  let limitReached: boolean;
  let shouldNotify: boolean;

  try {
    ({ limitReached, shouldNotify } = await reserveEmailSlot(db));
  } catch (err) {
    console.error('Failed to reserve email slot', err);
    return json(
      { message: FORM_STATUS_MESSAGES.serverError },
      {
        status: 500
      }
    );
  }

  if (limitReached) {
    if (shouldNotify) {
      try {
        await sendEmail(email);
      } catch (err) {
        console.error('Failed to send notification email', err);
      }
    }

    return json(
      { message: FORM_STATUS_MESSAGES.dailyLimit },
      {
        status: 429
      }
    );
  }

  try {
    const { messageId } = await sendEmail(email, values);

    return json(
      { message: FORM_STATUS_MESSAGES.success, data: messageId },
      {
        status: 200
      }
    );
  } catch (err) {
    console.error('Failed to send contact email', err);
    return json(
      { message: FORM_STATUS_MESSAGES.serverError },
      {
        status: 500
      }
    );
  }
};
