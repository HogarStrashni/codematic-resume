<script lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { cn } from '$lib/utils/tailwind';

  import { summaryData } from '$lib/data';
  import Typography from '$lib/components/custom-ui/typography';

  type SummaryProps = { class?: SvelteHTMLElements['div']['class'] };
  let { class: className }: SummaryProps = $props();
</script>

<div class={cn('space-y-2', className)}>
  {#each summaryData as paragraph, idx (idx)}
    <Typography class="text-pretty">
      {paragraph}
    </Typography>
  {/each}
</div>
