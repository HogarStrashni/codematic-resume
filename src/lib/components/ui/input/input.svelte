<script lang="ts">
  import Typography from '$lib/components/custom-ui/typography';
  import { cn } from '$lib/utils/tailwind';

  import type { ClassValue, HTMLInputAttributes } from 'svelte/elements';

  type InputProps = HTMLInputAttributes & {
    label: string;
    class?: ClassValue;
  };

  let { label, class: className, ...inputProps }: InputProps = $props();
</script>

<label class="flex flex-col gap-2">
  <Typography tag="span">{label}</Typography>
  <input {...inputProps} class={cn('rounded-lg border-gray-500 bg-transparent', className)} />
</label>
