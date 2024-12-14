<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';

	import { experienceData } from '$lib/data/experience';
	import { ExperienceArticle } from '$lib/components/custom-ui/section/experience';

	type ExperienceProps = { class?: SvelteHTMLElements['div']['class'] };
	let { class: className }: ExperienceProps = $props();
</script>

<div class={className}>
	{#each experienceData as articleData, idx (idx)}
		<ExperienceArticle {articleData} />
	{/each}
</div>
