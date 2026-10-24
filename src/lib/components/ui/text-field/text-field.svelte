<script lang="ts">
  import type { ClassValue, HTMLInputAttributes, HTMLTextareaAttributes } from 'svelte/elements';

  import Typography from '$lib/components/custom-ui/typography';
  import { cn } from '$lib/utils';

  type CommonProps = {
    label: string;
    error?: string;
    class?: ClassValue;
  };

  type TextFieldProps =
    | ({ as: 'input' } & HTMLInputAttributes & CommonProps)
    | ({ as: 'textarea' } & HTMLTextareaAttributes & CommonProps);

  let { as = 'input', label, error, class: className, ...props }: TextFieldProps = $props();
</script>

<div class="flex flex-col gap-2">
  <label class="flex flex-col gap-2">
    <Typography tag="span">{label}</Typography>
    <svelte:element this={as} {...props} class={cn('rounded-lg bg-transparent', className)} />
  </label>
  <div class="h-4">
    <Typography variant="caption" class="text-red-800">{error ?? ''}</Typography>
  </div>
</div>
