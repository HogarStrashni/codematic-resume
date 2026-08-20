<script lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { cn } from '$lib/utils/tailwind';

  import { ExperienceArticle } from '$lib/components/custom-ui/section/experience';

  import type { ExperienceData, Language } from '$lib/types';

  type ExperienceProps = {
    experienceData: ExperienceData;
    lang: Language;
    class?: SvelteHTMLElements['div']['class'];
  };

  const { experienceData, lang, class: className }: ExperienceProps = $props();
</script>

<div class={cn('space-y-6', className)}>
  {#each experienceData as articleData, idx (idx)}
    <ExperienceArticle {articleData} {lang} />
  {/each}
</div>
