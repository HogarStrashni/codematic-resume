<script lang="ts">
	import type { Snippet } from 'svelte';
	import Typography from '$lib/components/custom-ui/typography';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { cn } from '$lib/utils/tailwind';

	type SectionWrapperProps = {
		children: Snippet;
		title: string;
		class?: SvelteHTMLElements['section']['class'];
	};
	let { children, title, class: className }: SectionWrapperProps = $props();
</script>

<section class={cn('mt-12 space-y-4', className)}>
	<Typography tag="h3" variant="headingSmall" fontWeight="bold">
		{title}
	</Typography>

	{@render children()}
</section>
