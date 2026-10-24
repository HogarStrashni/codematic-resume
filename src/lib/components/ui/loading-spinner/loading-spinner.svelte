<script lang="ts">
  import type { ClassValue } from 'svelte/elements';

  import { cn } from '$lib/utils';

  import SpinnerIcon from './sipnner-icon.svelte';

  type SpinnerProps = {
    class?: ClassValue;
  };

  let { class: className }: SpinnerProps = $props();
</script>

<div class="flex justify-center">
  <SpinnerIcon class={cn('animate-spin', className)} />
</div>
