<script lang="ts">
  import type { ClassValue } from 'svelte/elements';
  import { cn } from '$lib/utils/tailwind';

  type SeparatorProps = {
    id?: string;
    class?: ClassValue;
  };

  let { id, class: className }: SeparatorProps = $props();
</script>

<div {id} class={cn('my-12 h-px w-full shrink-0 bg-gray-800', className)}></div>
