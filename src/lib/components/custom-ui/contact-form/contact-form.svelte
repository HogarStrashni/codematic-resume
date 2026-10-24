<script lang="ts">
  import type { ClassValue } from 'svelte/elements';

  import Typography from '$lib/components/custom-ui/typography';
  import { Button } from '$lib/components/ui/button';
  import { LoadingSpinner } from '$lib/components/ui/loading-spinner';
  import { TextField } from '$lib/components/ui/text-field';
  import { toast } from '$lib/components/ui/toast';
  import { FORM_STATUS_MESSAGES } from '$lib/constants';
  import type { FormErrors } from '$lib/types';
  import { cn } from '$lib/utils';
  import { getContactFormData, validateContactForm } from '$lib/utils';

  type ContactFormProps = {
    class?: ClassValue;
  };

  type FormEvent = Event & {
    currentTarget: EventTarget & HTMLFormElement;
  };

  let { class: className }: ContactFormProps = $props();

  let fieldErrors = $state<FormErrors>({});
  const hasErrors = $derived(Object.values(fieldErrors).some((i) => i?.length > 0));

  let isSubmitting = $state(false);
  let hasSubmitted = $state(false);

  const handleInput = (e: FormEvent) => {
    if (!hasSubmitted) return;

    const target = e.target;

    if (!(target instanceof HTMLInputElement) && !(target instanceof HTMLTextAreaElement)) {
      return;
    }

    const fieldName = target.name as keyof FormErrors;
    if (!(fieldName in fieldErrors)) return;

    const values = getContactFormData(new FormData(target.form!));
    const errors = validateContactForm(values);

    fieldErrors = {
      ...fieldErrors,
      [fieldName]: errors[fieldName]
    };
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    hasSubmitted = true;
    const form = e.currentTarget;
    const formData = new FormData(form);

    const values = getContactFormData(formData);
    const errors = validateContactForm(values);

    if (Object.keys(errors).length > 0) {
      fieldErrors = errors;
      return;
    }

    try {
      isSubmitting = true;
      const res = await fetch(form.action, {
        body: formData,
        method: form.method
      });

      if (res.ok) {
        const data: { message: string } = await res.json();
        form.reset();
        fieldErrors = {};
        toast.success(data.message);
        return;
      }

      if (res.status === 422) {
        const data: { message: string; errors: FormErrors } = await res.json();
        fieldErrors = data.errors;
        return;
      }

      const data: { message: string } = await res.json();
      toast.error(data.message);
    } catch (err) {
      console.error('Contact form submission failed:', err);
      toast.error(FORM_STATUS_MESSAGES.unknownError);
    } finally {
      isSubmitting = false;
    }
  };
</script>

<form
  method="POST"
  action="/api/contact"
  onsubmit={handleSubmit}
  oninput={handleInput}
  class={cn('mx-auto flex flex-col gap-4 sm:max-w-128', className)}
>
  <TextField
    as="input"
    label="First name"
    name="firstName"
    autocomplete="off"
    error={fieldErrors.firstName}
  />
  <TextField
    as="input"
    label="Last name"
    name="lastName"
    autocomplete="off"
    error={fieldErrors.lastName}
  />
  <TextField as="input" label="Email" name="email" autocomplete="off" error={fieldErrors.email} />
  <div class="sr-only">
    <TextField
      as="input"
      label="Confirm email"
      name="confirmEmail"
      aria-hidden="true"
      tabindex={-1}
    />
  </div>
  <TextField as="textarea" label="Message" name="message" rows={6} error={fieldErrors.message} />

  <!-- CF Turnstile Widget -->
  <div
    class="cf-turnstile"
    data-sitekey="0x4AAAAAAFi1hudV27XM9rsR"
    data-appearance="interaction-only"
    data-theme="dark"
  ></div>

  <Button type="submit" disabled={isSubmitting || hasErrors} class="w-full max-w-full sm:max-w-36">
    {#if isSubmitting}
      <LoadingSpinner />
    {:else}
      <Typography tag="span">Send Message</Typography>
    {/if}
  </Button>
</form>
