<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';

	import { summaryData } from '$lib/data/summary-data';
	import Typography from '$lib/components/custom-ui/typography';

	type SummaryProps = { class?: SvelteHTMLElements['div']['class'] };
	let { class: className }: SummaryProps = $props();
</script>

<div class={className}>
	{#each summaryData as paragraph, idx (idx)}
		<Typography class="text-pretty">
			{paragraph}
		</Typography>
	{/each}
</div>
