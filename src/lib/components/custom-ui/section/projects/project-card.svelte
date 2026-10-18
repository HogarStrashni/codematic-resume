<script lang="ts">
  import type { ClassValue } from 'svelte/elements';

  import { Actions } from '$lib/components/custom-ui/section/projects';
  import Typography from '$lib/components/custom-ui/typography';
  import { toPdf } from '$lib/state/to-pdf.svelte';
  import type { ProjectDataSingle } from '$lib/types';
  import { cn } from '$lib/utils';

  type ProjectCardProps = {
    data: ProjectDataSingle;
    class?: ClassValue;
  };
  let { data, class: className }: ProjectCardProps = $props();

  const {
    title,
    description: { heading, text },
    link,
    github
  } = data;
</script>

<div class={cn('space-y-2', className)}>
  {#if toPdf.isDownloadMode}
    <div class="space-y-2 print:flex print:items-center print:justify-between">
      {@render titleWithActions()}
    </div>
  {:else}
    {@render titleWithActions()}
  {/if}
  <Typography variant="textSmall">{text}</Typography>
</div>

{#snippet titleWithActions()}
  <div>
    <Typography tag="h3" fontWeight="bold">{title}</Typography>
    <Typography class="italic">{heading}</Typography>
  </div>
  <Actions {link} {github} />
{/snippet}
