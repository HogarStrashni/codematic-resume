<script lang="ts">
	import Typography, { type TextVariantProps } from '$lib/components/custom-ui/typography';
	import { cn } from '$lib/utils/tailwind';
	import type { SvelteHTMLElements } from 'svelte/elements';

	type ListTagsProps = {
		data: Array<string>;
		variant?: TextVariantProps['variant'];
		class?: SvelteHTMLElements['span']['class'];
	};
	let { data = [], variant = 'textSmall', class: className }: ListTagsProps = $props();

	const skillsString = data.join(' • ');
</script>

<Typography tag="span" {variant} class={cn('block italic', className)}>
	{skillsString}
</Typography>
