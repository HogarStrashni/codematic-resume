<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { ClassValue, HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

  import { cn } from '$lib/utils';

  type CommonProps = {
    children: Snippet;
    class?: ClassValue;
  };

  type ButtonProps =
    | ({ href?: never; disabled?: boolean } & HTMLButtonAttributes & CommonProps)
    | ({ href?: string; disabled?: never } & HTMLAnchorAttributes & CommonProps);

  let { children, href, disabled, class: className, ...props }: ButtonProps = $props();

  let isAnchor = $derived(href !== undefined);
</script>

<svelte:element
  this={isAnchor ? 'a' : 'button'}
  {...props}
  {...isAnchor ? { href } : { disabled }}
  class={cn(
    'max-w-fit rounded-lg border px-4 py-2',
    disabled
      ? 'cursor-not-allowed border-gray-800 text-gray-800'
      : 'cursor-pointer border-blue-800 text-blue-800',
    className
  )}
>
  {@render children()}
</svelte:element>
