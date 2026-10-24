<script lang="ts">
  import type { ClassValue } from 'svelte/elements';

  import { Github, Link } from '$lib/icons';
  import { toPdf } from '$lib/state/to-pdf.svelte';
  import { cn } from '$lib/utils';

  type ActionProps = {
    link: string;
    github: string | null;
    class?: ClassValue;
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
    rel="external"
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
      rel="external"
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
