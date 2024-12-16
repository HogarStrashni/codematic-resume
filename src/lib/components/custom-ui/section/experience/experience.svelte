<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { cn } from '$lib/utils/tailwind';

	import { experienceData } from '$lib/data';
	import { ExperienceArticle } from '$lib/components/custom-ui/section/experience';

	type ExperienceProps = { class?: SvelteHTMLElements['div']['class'] };
	let { class: className }: ExperienceProps = $props();
</script>

<div class={cn('space-y-6', className)}>
	{#each experienceData as articleData, idx (idx)}
		<ExperienceArticle {articleData} />
	{/each}
</div>
