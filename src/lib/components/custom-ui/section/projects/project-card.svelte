<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { cn } from '$lib/utils/tailwind';

	import type { ProjectData } from '$lib/data/projects';
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
	<div>
		<Typography tag="h3" fontWeight="bold">{title}</Typography>
		<Typography class="italic">{heading}</Typography>
	</div>
	<Actions {link} {github} />
	<Typography variant="textSmall">{text}</Typography>
</div>
