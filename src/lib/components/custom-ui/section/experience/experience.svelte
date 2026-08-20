<script lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { cn } from '$lib/utils/tailwind';

  import { ExperienceArticle } from '$lib/components/custom-ui/section/experience';

  import type { ExperienceData } from '$lib/types';

  type ExperienceProps = {
    experienceData: ExperienceData;
    class?: SvelteHTMLElements['div']['class'];
  };

  const { experienceData, class: className }: ExperienceProps = $props();
</script>

<div class={cn('space-y-6', className)}>
  {#each experienceData as articleData, idx (idx)}
    <ExperienceArticle {articleData} />
  {/each}
</div>
