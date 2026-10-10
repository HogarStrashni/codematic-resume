<script lang="ts">
  import type { ClassValue } from 'svelte/elements';
  import Typography from '$lib/components/custom-ui/typography';
  import { Input } from '$lib/components/ui/input';
  import { Textarea } from '$lib/components/ui/textarea';
  import { Button } from '$lib/components/ui/button';
  import { cn } from '$lib/utils/tailwind';

  type ContactFormProps = {
    class?: ClassValue;
  };

  let { class: className }: ContactFormProps = $props();
</script>

<form class={cn('mx-auto flex flex-col gap-4 sm:max-w-128', className)}>
  <Input label="First name" />
  <Input label="Last name" />
  <Input label="Email" />
  <Textarea label="Message" rows={6} />

  <Button type="submit">
    <Typography tag="span">Send Message</Typography>
  </Button>
</form>
