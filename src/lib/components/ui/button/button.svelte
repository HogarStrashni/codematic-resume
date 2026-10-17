<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { ClassValue, HTMLButtonAttributes } from 'svelte/elements';

  import { cn } from '$lib/utils/tailwind';

  type ButtonProps = HTMLButtonAttributes & {
    children: Snippet;
    disabled?: boolean;
    class?: ClassValue;
  };

  let { children, class: className, disabled, ...buttonProps }: ButtonProps = $props();
</script>

<button
  {...buttonProps}
  class={cn(
    'max-w-fit rounded-lg border px-4 py-2 ',
    disabled
      ? 'cursor-not-allowed border-gray-800 text-gray-800'
      : 'cursor-pointer border-blue-800 text-blue-800',
    className
  )}
>
  {@render children()}
</button>
