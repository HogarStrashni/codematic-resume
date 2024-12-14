<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { cn } from '$lib/utils/tailwind';

	type LogoProps = {
		src: string;
		alt?: string;
		class?: SvelteHTMLElements['img']['class'];
	};
	let { src, alt = '', class: className }: LogoProps = $props();
</script>

<div class={cn('size-8 shrink-0 overflow-hidden rounded border', className)}>
	<img {src} {alt} width={32} height={32} />
</div>
