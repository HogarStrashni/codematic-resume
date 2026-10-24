<script lang="ts">
  import type { ClassValue } from 'svelte/elements';

  import { ExperienceArticle } from '$lib/components/custom-ui/section/experience';
  import type { ExperienceData, Language } from '$lib/types';
  import { cn } from '$lib/utils';

  type ExperienceProps = {
    experienceData: ExperienceData;
    lang: Language;
    class?: ClassValue;
  };

  const { experienceData, lang, class: className }: ExperienceProps = $props();
</script>

<div class={cn('space-y-6', className)}>
  {#each experienceData as articleData, idx (idx)}
    <ExperienceArticle {articleData} {lang} />
  {/each}
</div>
