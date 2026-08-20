<script lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { getDuration, formatDate } from '$lib/utils/date-formatter';
  import Typography from '$lib/components/custom-ui/typography';

  import type { Language } from '$lib/types';

  type ExperienceArticleProps = {
    startDate: string;
    endDate: string | null;
    lang: Language;
    class?: SvelteHTMLElements['p']['class'];
  };

  const { startDate, endDate, lang, class: className }: ExperienceArticleProps = $props();

  const start = formatDate(startDate);
  const end = endDate ? formatDate(endDate) : 'Present';
  const diff = getDuration(startDate, endDate, lang);
</script>

<Typography variant="textSmall" class={className}>
  {`${start} - ${end} (${diff})`}
</Typography>
