<script lang="ts">
  import type { ClassValue } from 'svelte/elements';

  import Typography from '$lib/components/custom-ui/typography';
  import { Link } from '$lib/icons';
  import type { ProjectDataSingle } from '$lib/types';
  import { cn } from '$lib/utils/tailwind';

  type ProjectCardProps = {
    data: ProjectDataSingle;
    class?: ClassValue;
  };
  let { data, class: className }: ProjectCardProps = $props();

  const {
    title,
    description: { heading, text }
  } = data;
</script>

<div class={cn('space-y-4 rounded-xl border border-gray-800 p-4 sm:p-8', className)}>
  <div class="sm:space-y-1">
    <Typography tag="h3" variant="headingSmall">{title}</Typography>
    <Typography class="italic" variant="textSmall">{heading}</Typography>
  </div>
  <Typography variant="textSmall">{text}</Typography>

  <a
    href={data.link}
    aria-label="Link to Web App"
    target="_blank"
    class="flex max-w-fit items-center gap-2 text-blue-800"
  >
    <Link class="size-4" />
    <Typography variant="caption">Website Link</Typography>
  </a>
</div>
