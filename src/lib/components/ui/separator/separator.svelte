<script lang="ts">
  import { cn } from '$lib/utils/tailwind';
  import type { SvelteHTMLElements } from 'svelte/elements';

  type SeparatorProps = {
    class?: SvelteHTMLElements['div']['class'];
  };

  let { class: className }: SeparatorProps = $props();
</script>

<div class={cn('my-12 h-px w-full shrink-0 bg-gray-800', className)}></div>
