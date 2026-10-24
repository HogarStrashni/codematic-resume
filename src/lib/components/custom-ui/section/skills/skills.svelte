<script lang="ts">
  import Tags from '$lib/components/custom-ui/tags';
  import type { SkillsData } from '$lib/types';

  type SkillsProps = {
    skillsData: SkillsData;
  };

  const { skillsData }: SkillsProps = $props();
</script>

<Tags data={skillsData} variant="text" />
