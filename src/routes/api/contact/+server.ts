import { json } from '@sveltejs/kit';

import { FORM_STATUS_MESSAGES } from '$lib/constants';
import { reserveEmailSlot } from '$lib/server/utils';
import { getContactFormData, isContactFormPayload, validateContactForm } from '$lib/utils';

export const POST = async ({ request, platform }) => {
  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
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

  const db = platform?.env.DB;

  if (!db) {
    return json(
      { message: FORM_STATUS_MESSAGES.unknownError },
      {
        status: 500
      }
    );
  }

  const { limitReached, shouldNotify } = await reserveEmailSlot(db);

  if (limitReached) {
    if (shouldNotify) {
      // TODO: Send the daily-limit notification through Resend.
    }

    return json(
      { error: FORM_STATUS_MESSAGES.dailyLimit },
      {
        status: 429
      }
    );
  }

  // TODO: Send the normal contact email through Resend.

  return json(
    { message: FORM_STATUS_MESSAGES.success },
    {
      status: 200
    }
  );
};
