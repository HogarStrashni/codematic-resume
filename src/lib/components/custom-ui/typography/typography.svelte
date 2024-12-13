<script lang="ts">
	import type { Snippet } from 'svelte';

	import { cn } from '$lib/utils/tailwind';
	import type { ClassValue } from 'clsx';
	import { textVariants, type TextVariantProps } from './text-variants';

	type HTMLTextElement = 'h2' | 'h3' | 'p' | 'span';

	type TypographyProps = Partial<{
		children: Snippet;
		tag: HTMLTextElement;
		variant: TextVariantProps['variant'];
		fontWeight: TextVariantProps['fontWeight'];
		class: ClassValue;
	}>;

	let {
		children,
		tag = 'p',
		variant = 'text',
		fontWeight,
		class: className
	}: TypographyProps = $props();
</script>

<svelte:element this={tag} class={cn(textVariants({ variant, fontWeight, className }))}>
	{@render children?.()}
</svelte:element>
