<script lang="ts">
  import type { ClassValue, HTMLInputAttributes } from 'svelte/elements';

  import Typography from '$lib/components/custom-ui/typography';
  import { cn } from '$lib/utils/tailwind';

  type InputProps = HTMLInputAttributes & {
    label: string;
    error?: string;
    class?: ClassValue;
  };

  let { label, class: className, error, ...inputProps }: InputProps = $props();
</script>

<div class="flex flex-col gap-2">
  <label class="flex flex-col gap-2">
    <Typography tag="span">{label}</Typography>
    <input {...inputProps} class={cn('rounded-lg bg-transparent', className)} />
  </label>
  <div class="h-4">
    <Typography variant="caption" class="text-red-800">{error ?? ''}</Typography>
  </div>
</div>
