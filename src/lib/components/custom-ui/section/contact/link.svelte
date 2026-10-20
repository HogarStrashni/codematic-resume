<script lang="ts">
  import type { ClassValue } from 'svelte/elements';

  import Typography from '$lib/components/custom-ui/typography';
  import type { ContactInfoSingle } from '$lib/types';
  import { cn } from '$lib/utils';

  type LinkProps = ContactInfoSingle & { class?: ClassValue };

  const { text, href, icon: Icon, class: className }: LinkProps = $props();
</script>

<a {href} rel="external" target="_blank" class={cn('group/link', className)}>
  <Icon class="size-5 shrink-0" />
  <Typography
    tag="span"
    variant="textSmall"
    class="underline underline-offset-4 duration-200 group-active:text-purple-600 lg:group-hover/link:text-blue-600 print:text-blue-600"
  >
    {text}
  </Typography>
</a>
