<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { ClassValue } from 'svelte/elements';

  import Typography from '$lib/components/custom-ui/typography';
  import type { SectionTitle } from '$lib/types';
  import { cn } from '$lib/utils/tailwind';

  type SectionWrapperProps = {
    children: Snippet;
    title: SectionTitle;
    description?: string;
    class?: ClassValue;
  };

  const { children, title, description, class: className }: SectionWrapperProps = $props();
</script>

<section class={cn('mt-9', description ? 'space-y-2' : 'space-y-6', className)}>
  <Typography tag="h2" variant="headingSmall" fontWeight="bold">
    {title}
  </Typography>

  {#if description}
    <Typography variant="textSmall" fontWeight="light" class="text-gray-600">
      {description}
    </Typography>
  {/if}

  {@render children()}
</section>
