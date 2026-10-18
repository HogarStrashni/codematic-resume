<script lang="ts">
  import type { ClassValue } from 'svelte/elements';

  import Typography from '$lib/components/custom-ui/typography';
  import type { Language } from '$lib/types';
  import { formatDate, getDuration } from '$lib/utils';

  type ExperienceArticleProps = {
    startDate: string;
    endDate: string | null;
    lang: Language;
    class?: ClassValue;
  };

  const { startDate, endDate, lang, class: className }: ExperienceArticleProps = $props();

  const start = formatDate(startDate);
  const end = endDate ? formatDate(endDate) : 'Present';
  const diff = getDuration(startDate, endDate, lang);
</script>

<Typography variant="textSmall" class={className}>
  {`${start} - ${end} (${diff})`}
</Typography>
