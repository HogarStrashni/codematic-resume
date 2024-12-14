<script lang="ts">
	import Typography from '$lib/components/custom-ui/typography';
	import { cn } from '$lib/utils/tailwind';
	import type { SvelteHTMLElements } from 'svelte/elements';

	type ListTagsProps = {
		data: Array<string>;
		class?: SvelteHTMLElements['span']['class'];
	};
	let { data = [], class: className }: ListTagsProps = $props();

	const skillsString = data.join(' • ');
</script>

<Typography tag="span" variant="textSmall" class={cn('block', className)}>
	{skillsString}
</Typography>
