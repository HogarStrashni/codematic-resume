<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { cn } from '$lib/utils/tailwind';

  import Typography from '$lib/components/custom-ui/typography';

  import type { SectionTitle } from '$lib/types';

  type SectionWrapperProps = {
    children: Snippet;
    title: SectionTitle;
    class?: SvelteHTMLElements['section']['class'];
  };

  const { children, title, class: className }: SectionWrapperProps = $props();
</script>

<section class={cn('mt-9 space-y-6', className)}>
  <Typography tag="h2" variant="headingSmall" fontWeight="bold">
    {title}
  </Typography>

  {@render children()}
</section>
