<script lang="ts">
  import type { ClassValue } from 'svelte/elements';

  import rsLogo from '$lib/assets/rs-logo.png?enhanced';
  import Image from '$lib/components/custom-ui/image';
  import Typography from '$lib/components/custom-ui/typography';
  import { toPdf } from '$lib/state/to-pdf.svelte';
  import type { LicenceData } from '$lib/types';
  import { cn } from '$lib/utils';

  type EducationProps = {
    licenceData: LicenceData;
    class?: ClassValue;
  };

  const { licenceData, class: className }: EducationProps = $props();
</script>

{#each licenceData as { typeOfLicence, title, licensor, licenceNumber } (typeOfLicence)}
  <div class="flex gap-2">
    <Image
      src={rsLogo}
      alt="AGFBL logo"
      class={cn(!toPdf.isDownloadMode && 'print:hidden', className)}
    />
    <div>
      <Typography fontWeight="bold">{typeOfLicence}</Typography>
      <Typography fontWeight="bold">{title}</Typography>
      <Typography variant="textSmall" class="italic">{licensor}</Typography>
      <Typography fontWeight="bold">{licenceNumber}</Typography>
    </div>
  </div>
{/each}
