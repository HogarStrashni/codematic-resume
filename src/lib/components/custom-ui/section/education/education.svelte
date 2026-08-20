<script lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { cn } from '$lib/utils/tailwind';
  import { toPdf } from '$lib/state/to-pdf.svelte';

  import { educationData } from '$lib/data/en';
  import Typography from '$lib/components/custom-ui/typography';
  import Image from '$lib/components/custom-ui/image';
  import agfblLogo from '$lib/assets/agfbl-logo.png?enhanced';

  type EducationProps = { class?: SvelteHTMLElements['div']['class'] };
  let { class: className }: EducationProps = $props();

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
