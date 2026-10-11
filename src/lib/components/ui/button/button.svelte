<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { ClassValue } from 'svelte/elements';
  import { cn } from '$lib/utils/tailwind';

  type ButtonProps = {
    children: Snippet;
    class?: ClassValue;
  };

  let { children, class: className }: ButtonProps = $props();
</script>

<button
  class={cn('max-w-fit rounded-lg border border-blue-800 px-4 py-2 text-blue-800', className)}
>
  {@render children()}
</button>
