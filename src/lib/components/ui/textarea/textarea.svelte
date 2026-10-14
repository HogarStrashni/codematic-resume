<script lang="ts">
  import Typography from '$lib/components/custom-ui/typography';
  import { cn } from '$lib/utils/tailwind';

  import type { ClassValue, HTMLTextareaAttributes } from 'svelte/elements';

  type TextareaProps = HTMLTextareaAttributes & {
    label: string;
    error?: string;
    class?: ClassValue;
  };

  let { label, class: className, error, ...terxtareaProps }: TextareaProps = $props();
</script>

<div class="flex flex-col gap-2">
  <label class="flex flex-col gap-2">
    <Typography tag="span">{label}</Typography>
    <textarea {...terxtareaProps} class={cn('rounded-lg  bg-transparent', className)}></textarea>
  </label>
  <div class="h-4">
    <Typography variant="caption" class="text-red-800">{error ?? ''}</Typography>
  </div>
</div>
