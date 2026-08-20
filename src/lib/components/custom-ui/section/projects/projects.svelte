<script lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { cn } from '$lib/utils/tailwind';

  import { ProjectCard } from '$lib/components/custom-ui/section/projects';

  import type { ProjectData } from '$lib/types';

  type ProjectsProps = {
    projectsData: ProjectData;
    class?: SvelteHTMLElements['div']['class'];
  };

  const { projectsData, class: className }: ProjectsProps = $props();
</script>

<div class={cn('space-y-6', className)}>
  {#each projectsData as project, idx (idx)}
    <ProjectCard data={project} />
  {/each}
</div>
