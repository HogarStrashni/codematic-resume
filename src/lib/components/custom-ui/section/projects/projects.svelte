<script lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { cn } from '$lib/utils/tailwind';

  import { projectsData } from '$lib/data';
  import { ProjectCard } from '$lib/components/custom-ui/section/projects';

  type ProjectsProps = { class?: SvelteHTMLElements['div']['class'] };
  let { class: className }: ProjectsProps = $props();
</script>

<div class={cn('space-y-6', className)}>
  {#each projectsData as project, idx (idx)}
    <ProjectCard data={project} />
  {/each}
</div>
