export const validateTurnstileToken = async (ip: string, token: string, secret: string) => {
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      remoteip: ip !== 'unknown' ? ip : undefined,
      response: token,
      secret
    }),
    signal: AbortSignal.timeout(5000)
  });

  if (!res.ok) {
    throw new Error(`Turnstile verification returned HTTP ${res.status}`);
  }

  const result: unknown = await res.json();

  if (
    typeof result !== 'object' ||
    result === null ||
    !('success' in result) ||
    typeof result.success !== 'boolean'
  ) {
    throw new Error('Invalid Turnstile response');
  }

  return { success: result.success };
};
