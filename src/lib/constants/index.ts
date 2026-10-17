export const NAME_REGEX = /^[\p{L}\s-]+$/u;

export const NAME_MIN_LENGTH = 2;
export const NAME_MAX_LENGTH = 50;

export const MESSAGE_MIN_LENGTH = 10;
export const MESSAGE_MAX_LENGTH = 800;

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const EMAIL_MAX_LENGTH = 254;

export const FORM_FIELD_ERROR_MESSAGES = {
  firstName: {
    required: 'Please enter your first name.',
    tooShort: 'First name must be at least 2 characters long.',
    tooLong: 'First name must be 100 characters or fewer.',
    invalid: 'Please enter a valid first name.'
  },
  lastName: {
    required: 'Please enter your last name.',
    tooShort: 'Last name must be at least 2 characters long.',
    tooLong: 'Last name must be 100 characters or fewer.',
    invalid: 'Please enter a valid last name.'
  },
  email: {
    required: 'Please enter your email address.',
    invalid: 'Please enter a valid email address.',
    tooLong: 'Email address must be 254 characters or fewer.'
  },
  message: {
    required: 'Please enter a message.',
    tooShort: 'Message must be at least 10 characters long.',
    tooLong: 'Message must be 800 characters or fewer.'
  },
  honeypot: {
    invalid: 'Invalid submission.'
  }
} as const;

export const FORM_STATUS_MESSAGES = {
  success: 'Thanks for reaching out! Your message has been sent.',
  unknownError: 'Something went wrong. Please try again.',
  missingFieldsError: 'Please correct the highlighted fields.'
  // serverError: "We couldn't send your message right now. Please try again later.",
  // rateLimited: 'Too many attempts. Please wait a moment before trying again.',
  // captchaFailed: 'Verification failed. Please try again.',
  // captchaExpired: 'Verification expired. Please try again.',
} as const;
