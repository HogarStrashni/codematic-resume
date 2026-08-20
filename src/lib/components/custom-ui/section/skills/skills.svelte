<script lang="ts">
  import type { SkillsData } from '$lib/types';

  import Tags from '../../tags/tags.svelte';

  type SkillsProps = {
    skillsData: SkillsData;
  };

  const { skillsData }: SkillsProps = $props();
</script>

<Tags data={skillsData} variant="text" />
