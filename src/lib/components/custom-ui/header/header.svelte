<script lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { cn } from '$lib/utils/tailwind';

  import Typography from '$lib/components/custom-ui/typography';
  import { Printer, Download } from '$lib/icons';

  type HeaderProps = { class?: SvelteHTMLElements['div']['class'] };
  let { class: className }: HeaderProps = $props();
</script>

<header
  class={cn(
    'shadow-glass sticky top-16 flex -translate-y-16 items-center justify-end gap-2 bg-white/85 py-3 backdrop-blur-sm sm:-mb-4 print:hidden',
    className
  )}
>
  <button
    onclick={() => window.print()}
    class="hidden flex-col items-center rounded border bg-white px-6 py-2 shadow-sm duration-200 active:shadow-none lg:flex lg:hover:bg-gray-50"
  >
    <Printer class="size-4" />
    <Typography tag="span" variant="caption" fontWeight="light" class="italic">print</Typography>
  </button>
  <a
    href="/djordje-matic-resume.pdf"
    download="Djordje Matic - Resume.pdf"
    class="flex items-center gap-1 rounded border bg-white px-4 py-2 shadow-sm duration-200 active:shadow-none lg:flex-col lg:gap-0 lg:hover:bg-gray-50"
  >
    <Download class="size-4" />
    <Typography tag="span" variant="caption" fontWeight="light" class="italic">download</Typography>
  </a>
</header>
