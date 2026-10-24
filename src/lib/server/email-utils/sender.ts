import type { ContactFormPayload } from '$lib/types';

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };
    return entities[char];
  });

export const sendEmail = async (mailer: SendEmail, values?: ContactFormPayload) => {
  if (!values) {
    return await mailer.send({
      from: 'info@codematic.cc',
      to: 'djordje@codematic.cc',
      subject: 'Mail Limit Reached',
      html: `
        <p><strong>Message:</strong></p>
        <p>Mail limit reached, check what is going on!</p>
      `
    });
  }

  const { firstName, lastName, email, message } = values;

  const safeMessage = escapeHtml(message).replace(/\r?\n/g, '<br>');

  return await mailer.send({
    from: 'info@codematic.cc',
    to: 'djordje@codematic.cc',
    subject: 'Portfolio Contact Form',
    replyTo: email,
    html: `
        <h2>Portfolio contact</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `
  });
};
