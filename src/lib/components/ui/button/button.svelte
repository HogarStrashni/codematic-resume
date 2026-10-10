<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { ClassValue, HTMLButtonAttributes } from 'svelte/elements';
  import { cn } from '$lib/utils/tailwind';

  type ButtonProps = HTMLButtonAttributes & {
    children: Snippet;
    class?: ClassValue;
  };

  let { children, class: className, ...buttonProps }: ButtonProps = $props();
</script>

<button
  {...buttonProps}
  class={cn(
    'max-w-fit cursor-pointer rounded-lg border border-blue-800 px-4 py-2 text-blue-800',
    className
  )}
>
  {@render children()}
</button>
