import { json } from '@sveltejs/kit';

import { FORM_STATUS_MESSAGES } from '$lib/constants';
import { reserveEmailSlot, sendEmail } from '$lib/server/email-utils';
import { getContactFormData, isContactFormPayload, validateContactForm } from '$lib/utils';

export const POST = async ({ request, platform }) => {
  let formData: FormData;

  try {
    formData = await request.formData();
  } catch (err) {
    console.error(err);
    return json(
      { message: FORM_STATUS_MESSAGES.unknownError },
      {
        status: 400
      }
    );
  }

  const values = getContactFormData(formData);

  if (!isContactFormPayload(values)) {
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

  const email = platform?.env.EMAIL;

  if (!email) {
    console.error('Email provider is not configured');
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
    console.error('Failed to reserve email slot:', err);
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
        console.error(err);
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
    console.error(err);
    return json(
      { message: FORM_STATUS_MESSAGES.serverError },
      {
        status: 500
      }
    );
  }
};
