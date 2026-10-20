import {
  EMAIL_MAX_LENGTH,
  EMAIL_REGEX,
  FORM_FIELD_ERROR_MESSAGES,
  MESSAGE_MAX_LENGTH,
  MESSAGE_MIN_LENGTH,
  NAME_MAX_LENGTH,
  NAME_MIN_LENGTH,
  NAME_REGEX
} from '$lib/constants';
import type { ContactFormPayload, FormErrors } from '$lib/types';

export const getContactFormData = (formData: FormData) => {
  const getString = (name: string) => {
    const value = formData.get(name);
    return typeof value === 'string' ? value.trim() : '';
  };

  return {
    firstName: getString('firstName'),
    lastName: getString('lastName'),
    email: getString('email'),
    message: getString('message'),
    confirmEmail: getString('confirmEmail')
  };
};

export const isContactFormPayload = (input: unknown): input is ContactFormPayload => {
  if (typeof input !== 'object' || input === null) {
    return false;
  }

  if (
    !('firstName' in input) ||
    !('lastName' in input) ||
    !('email' in input) ||
    !('confirmEmail' in input) ||
    !('message' in input)
  ) {
    return false;
  }

  return (
    typeof input.firstName === 'string' &&
    typeof input.lastName === 'string' &&
    typeof input.email === 'string' &&
    typeof input.message === 'string' &&
    (!('confirmEmail' in input) || typeof input.confirmEmail === 'string')
  );
};

const validateName = (value: string, field: 'firstName' | 'lastName') => {
  const nameError = FORM_FIELD_ERROR_MESSAGES[field];

  if (!value) return nameError.required;
  if (value.length < NAME_MIN_LENGTH) return nameError.tooShort;
  if (value.length > NAME_MAX_LENGTH) return nameError.tooLong;
  if (!NAME_REGEX.test(value)) return nameError.invalid;
};

export const validateContactForm = (input: ContactFormPayload) => {
  const errors: FormErrors = {};

  const firstName = input.firstName.trim();
  const lastName = input.lastName.trim();
  const email = input.email.trim();
  const message = input.message.trim();

  const firstNameError = validateName(firstName, 'firstName');
  if (firstNameError) errors.firstName = firstNameError;

  const lastNameError = validateName(lastName, 'lastName');
  if (lastNameError) errors.lastName = lastNameError;

  const emailErrors = FORM_FIELD_ERROR_MESSAGES.email;
  if (!email) {
    errors.email = emailErrors.required;
  } else if (email.length > EMAIL_MAX_LENGTH) {
    errors.email = emailErrors.tooLong;
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = emailErrors.invalid;
  }

  const msgErrors = FORM_FIELD_ERROR_MESSAGES.message;
  if (!message) {
    errors.message = msgErrors.required;
  } else if (message.length < MESSAGE_MIN_LENGTH) {
    errors.message = msgErrors.tooShort;
  } else if (message.length > MESSAGE_MAX_LENGTH) {
    errors.message = msgErrors.tooLong;
  }

  return errors;
};
