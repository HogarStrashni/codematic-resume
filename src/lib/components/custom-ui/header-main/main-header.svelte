<script lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import Typography from '$lib/components/custom-ui/typography';
  import Image from '$lib/components/custom-ui/image';
  import { cn } from '$lib/utils/tailwind';

  import { navigationLinks } from './navigation';
  import transparentLogo from '$lib/assets/codematic-logo.png?enhanced';

  type MainHeaderProps = {
    class?: SvelteHTMLElements['div']['class'];
  };

  const { class: className }: MainHeaderProps = $props();
</script>

<header
  class={cn(
    'sticky top-0 mx-auto hidden h-16 max-w-4xl items-center justify-between sm:flex sm:px-4 md:px-8',
    className
  )}
>
  <a href="/">
    <Image src={transparentLogo} alt="CODEMATIC logo" icon={false} class="w-40" />
  </a>

  <section class="flex gap-4">
    {#each navigationLinks as { label, href, newPage } (label)}
      <a {href} target={newPage ? '_blank' : undefined}>
        <Typography tag="span" variant="caption">{label}</Typography>
      </a>
    {/each}
  </section>
</header>
