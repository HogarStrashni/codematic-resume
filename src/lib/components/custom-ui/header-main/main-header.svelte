<script lang="ts">
  import type { ClassValue } from 'svelte/elements';

  import { resolve } from '$app/paths';
  import transparentLogo from '$lib/assets/codematic-logo.png?enhanced';
  import Image from '$lib/components/custom-ui/image';
  import Typography from '$lib/components/custom-ui/typography';
  import { cn } from '$lib/utils';

  type MainHeaderProps = {
    class?: ClassValue;
  };

  const { class: className }: MainHeaderProps = $props();

  const navigationLinks = [
    { label: 'About Me', href: resolve('/#about-me'), newPage: false },
    { label: 'Projects', href: resolve('/#projects'), newPage: false },
    { label: 'Contact Me', href: resolve('/#contact-me'), newPage: false },
    { label: 'Resume', href: resolve('/resume'), newPage: true }
  ];
</script>

<header
  class={cn(
    'sticky top-0 mx-auto hidden h-16 max-w-4xl items-center justify-between sm:flex sm:px-4 md:px-8',
    className
  )}
>
  <a href={resolve('/')}>
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
