<script lang="ts">
  import type { ClassValue } from 'svelte/elements';

  import Typography from '$lib/components/custom-ui/typography';
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { Textarea } from '$lib/components/ui/textarea';
  import { FORM_STATUS_MESSAGES } from '$lib/constants';
  import type { FormErrors } from '$lib/types';
  import { getContactFormData, validateContactForm } from '$lib/utils/contact-form';
  import { cn } from '$lib/utils/tailwind';

  type ContactFormProps = {
    class?: ClassValue;
  };

  let { class: className }: ContactFormProps = $props();

  let fieldErrors = $state<FormErrors>({});
  let isSubmitting = $state(false);

  const handleSubmit = async (
    e: SubmitEvent & {
      currentTarget: EventTarget & HTMLFormElement;
    }
  ) => {
    e.preventDefault();
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
        form.reset();
        fieldErrors = {};
        return;
      }

      if (res.status === 422) {
        const data: { message: string; errors: FormErrors } = await res.json();
        fieldErrors = data.errors;
        fieldErrors.root = data.message;
        return;
      }

      fieldErrors.root = await res.json();
    } catch (err) {
      console.log(FORM_STATUS_MESSAGES.unknownError, err);
    } finally {
      isSubmitting = false;
    }
  };
</script>

<form
  method="POST"
  action="/api/contact"
  onsubmit={handleSubmit}
  class={cn('mx-auto flex flex-col gap-4 sm:max-w-128', className)}
>
  <Input label="First name" name="firstName" autocomplete="off" error={fieldErrors.firstName} />
  <Input label="Last name" name="lastName" autocomplete="off" error={fieldErrors.lastName} />
  <Input label="Email" name="email" autocomplete="off" error={fieldErrors.email} />
  <div class="sr-only">
    <Input label="Confirm email" name="confirmEmail" aria-hidden="true" tabindex={-1} />
  </div>
  <Textarea label="Message" name="message" rows={6} error={fieldErrors.message} />

  <Button type="submit" disabled={isSubmitting}>
    <Typography tag="span">Send Message</Typography>
  </Button>
</form>
