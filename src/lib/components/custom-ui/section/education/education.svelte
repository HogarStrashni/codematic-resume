<script lang="ts">
  import type { ClassValue } from 'svelte/elements';

  import agfblLogo from '$lib/assets/agfbl-logo.png?enhanced';
  import Image from '$lib/components/custom-ui/image';
  import Typography from '$lib/components/custom-ui/typography';
  import { toPdf } from '$lib/state/to-pdf.svelte';
  import type { EducationData } from '$lib/types';
  import { cn } from '$lib/utils/tailwind';

  type EducationProps = {
    educationData: EducationData;
    class?: ClassValue;
  };

  const { educationData, class: className }: EducationProps = $props();

  const { faculty, university, degree, grade } = educationData;
</script>

<div class="flex gap-2">
  <Image
    src={agfblLogo}
    alt="AGFBL logo"
    class={cn(!toPdf.isDownloadMode && 'print:hidden', className)}
  />
  <div>
    <Typography fontWeight="bold">
      {faculty}, <span class="whitespace-nowrap">{university}</span>
    </Typography>
    <Typography>{degree}</Typography>
    <Typography variant="textSmall" class="italic">{grade}</Typography>
  </div>
</div>
