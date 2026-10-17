<script lang="ts">
  import type { ClassValue } from 'svelte/elements';

  import { ProjectCard } from '$lib/components/custom-ui/section/projects-main-page';
  import type { ProjectData } from '$lib/types';
  import { cn } from '$lib/utils/tailwind';

  type ProjectsProps = {
    projectsData: ProjectData;
    class?: ClassValue;
  };

  const { projectsData, class: className }: ProjectsProps = $props();
</script>

<div class={cn('space-y-4 sm:space-y-8', className)}>
  {#each projectsData as project, idx (idx)}
    <ProjectCard data={project} />
  {/each}
</div>
