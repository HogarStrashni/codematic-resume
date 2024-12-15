<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { cn } from '$lib/utils/tailwind';

	type ImageProps = SvelteHTMLElements['img'];

	let { src, alt = '', width = 32, height = 32, class: className }: ImageProps = $props();
</script>

<div class={cn('size-8 shrink-0 overflow-hidden rounded border', className)}>
	<img {src} {alt} {width} {height} />
</div>
