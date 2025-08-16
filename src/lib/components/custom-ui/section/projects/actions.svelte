<script lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { cn } from '$lib/utils/tailwind';
  import { toPdf } from '$lib/state/to-pdf.svelte';

  import { Link, Github } from '$lib/icons';

  type ActionProps = {
    link: string;
    github: string | null;
    class?: SvelteHTMLElements['div']['class'];
  };
  let { link, github, class: className }: ActionProps = $props();
</script>

<div
  class={cn(
    'flex max-w-fit gap-2',
    toPdf.isDownloadMode ? 'print:flex-row-reverse' : 'print:hidden',
    className
  )}
>
  <a
    href={link}
    aria-label="Link to Web App"
    target="_blank"
    class={cn(
      'inline-block shrink-0 rounded border px-5 py-2 shadow-sm duration-200 active:shadow-none lg:hover:bg-gray-50',
      toPdf.isDownloadMode && 'print:shadow-none'
    )}
  >
    <Link class="size-4" />
  </a>

  {#if github}
    <a
      href={github ?? undefined}
      aria-label="Link to Github"
      target="_blank"
      class={cn(
        'inline-block shrink-0 rounded border px-5 py-2 shadow-sm duration-200 active:shadow-none lg:hover:bg-gray-50',
        toPdf.isDownloadMode && 'print:shadow-none'
      )}
    >
      <Github class="size-4" />
    </a>
  {/if}
</div>
