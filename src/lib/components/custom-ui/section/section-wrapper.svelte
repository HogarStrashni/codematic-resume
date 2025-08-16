<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { cn } from '$lib/utils/tailwind';

	import Typography from '$lib/components/custom-ui/typography';

	type SectionWrapperProps = {
		children: Snippet;
		title: string;
		class?: SvelteHTMLElements['section']['class'];
	};
	let { children, title, class: className }: SectionWrapperProps = $props();
</script>

<section class={cn('mt-10 space-y-6', className)}>
	<Typography tag="h2" variant="headingSmall" fontWeight="bold">
		{title}
	</Typography>

	{@render children()}
</section>
