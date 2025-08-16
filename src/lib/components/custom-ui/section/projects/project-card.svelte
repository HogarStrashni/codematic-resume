<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { cn } from '$lib/utils/tailwind';
	import { toPdf } from '$lib/state/to-pdf.svelte';

	import type { ProjectData } from '$lib/data';
	import Typography from '$lib/components/custom-ui/typography';
	import { Actions } from '$lib/components/custom-ui/section/projects';

	type ProjectCardProps = {
		data: ProjectData;
		class?: SvelteHTMLElements['div']['class'];
	};
	let { data, class: className }: ProjectCardProps = $props();

	const {
		title,
		description: { heading, text },
		link,
		github
	} = data;
</script>

<div class={cn('space-y-2', className)}>
	{#if toPdf.isDownloadMode}
		<div class="space-y-2 print:flex print:items-center print:justify-between">
			{@render titleWithActions()}
		</div>
	{:else}
		{@render titleWithActions()}
	{/if}
	<Typography variant="textSmall">{text}</Typography>
</div>

{#snippet titleWithActions()}
	<div>
		<Typography tag="h3" fontWeight="bold">{title}</Typography>
		<Typography class="italic">{heading}</Typography>
	</div>
	<Actions {link} {github} />
{/snippet}
