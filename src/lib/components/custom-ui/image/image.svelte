<script lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { cn } from '$lib/utils/tailwind';

  // created by @sveltejs/enhanced-img plugin
  type Picture = {
    img: { src: string; w: number; h: number };
    sources: Record<string, string>;
  };

  type ImageProps = {
    src: Picture;
    alt?: string;
    class?: SvelteHTMLElements['img']['class'];
  };

  let { src, alt = '', class: className }: ImageProps = $props();
</script>

<div class={cn('size-8 shrink-0 overflow-hidden rounded border', className)}>
  <enhanced:img {src} {alt} />
</div>
