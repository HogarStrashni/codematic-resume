<script lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { getDuration, formatDate } from '$lib/utils/date-formatter';
  import Typography from '$lib/components/custom-ui/typography';

  type ExperienceArticleProps = {
    startDate: string;
    endDate: string | null;
    class?: SvelteHTMLElements['p']['class'];
  };
  let { startDate, endDate, class: className }: ExperienceArticleProps = $props();

  const start = formatDate(startDate);
  const end = endDate ? formatDate(endDate) : 'Present';
  const diff = getDuration(startDate, endDate);
</script>

<Typography variant="textSmall" class={className}>
  {`${start} - ${end} (${diff})`}
</Typography>
