<script lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { cn } from '$lib/utils/tailwind';

  import Typography, { type TextVariantProps } from '$lib/components/custom-ui/typography';

  type TagsProps = {
    data: Array<string>;
    variant?: TextVariantProps['variant'];
    class?: SvelteHTMLElements['span']['class'];
  };
  let { data = [], variant = 'textSmall', class: className }: TagsProps = $props();

  const skillsString = data.join(' • ');
</script>

<Typography tag="span" {variant} class={cn('block italic', className)}>
  {skillsString}
</Typography>
