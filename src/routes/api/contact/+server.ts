import { json } from '@sveltejs/kit';

import { FORM_STATUS_MESSAGES } from '$lib/constants';
import { getContactFormData, isContactFormPayload, validateContactForm } from '$lib/utils';

export const POST = async ({ request }) => {
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

  // TODO: Send the email using your `resend`.

  return json(
    { message: FORM_STATUS_MESSAGES.success },
    {
      status: 200
    }
  );
};
