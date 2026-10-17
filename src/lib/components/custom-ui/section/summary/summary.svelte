<script lang="ts">
  import type { ClassValue } from 'svelte/elements';

  import Typography from '$lib/components/custom-ui/typography';
  import type { SummaryData } from '$lib/types';
  import { cn } from '$lib/utils/tailwind';

  type SummaryProps = {
    summaryData: SummaryData;
    class?: ClassValue;
  };

  const { summaryData, class: className }: SummaryProps = $props();
</script>

<div class={cn('space-y-2', className)}>
  {#each summaryData as paragraph, idx (idx)}
    <Typography class="text-pretty">
      {paragraph}
    </Typography>
  {/each}
</div>
