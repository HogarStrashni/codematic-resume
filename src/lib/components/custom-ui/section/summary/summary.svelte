<script lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { cn } from '$lib/utils/tailwind';

  import Typography from '$lib/components/custom-ui/typography';

  import type { SummaryData } from '$lib/types';

  type SummaryProps = {
    summaryData: SummaryData;
    class?: SvelteHTMLElements['div']['class'];
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
