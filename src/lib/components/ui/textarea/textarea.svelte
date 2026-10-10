<script lang="ts">
  import Typography from '$lib/components/custom-ui/typography';
  import { cn } from '$lib/utils/tailwind';

  import type { ClassValue, HTMLTextareaAttributes } from 'svelte/elements';

  type TextareaProps = HTMLTextareaAttributes & {
    label: string;
    class?: ClassValue;
  };

  let { label, class: className, ...terxtareaProps }: TextareaProps = $props();
</script>

<label class="flex flex-col gap-2">
  <Typography tag="span">{label}</Typography>
  <textarea {...terxtareaProps} class={cn('rounded-lg border-gray-500 bg-transparent', className)}
  ></textarea>
</label>
