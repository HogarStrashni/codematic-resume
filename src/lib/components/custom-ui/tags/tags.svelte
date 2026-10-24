<script lang="ts">
  import type { ClassValue } from 'svelte/elements';

  import Typography, { type TextVariantProps } from '$lib/components/custom-ui/typography';
  import { cn } from '$lib/utils';

  type TagsProps = {
    data: Array<string>;
    variant?: TextVariantProps['variant'];
    class?: ClassValue;
  };
  let { data = [], variant = 'textSmall', class: className }: TagsProps = $props();

  const skillsString = $derived(data.join(' • '));
</script>

<Typography tag="span" {variant} class={cn('block italic', className)}>
  {skillsString}
</Typography>
