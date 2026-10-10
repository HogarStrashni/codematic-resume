<script lang="ts">
  import Typography from '$lib/components/custom-ui/typography';
  import { Button } from '$lib/components/ui/button';
  import { basicInfo } from '$lib/data/en';
</script>

<section class="-mt-16 flex min-h-svh flex-col pt-16 sm:-mt-20 sm:pt-20 lg:min-h-dvh">
  <div class="flex flex-1 flex-col justify-center gap-1">
    <Typography tag="span" variant="headingLarge">{basicInfo.name}</Typography>
    <Typography tag="span" class="mt-1 text-gray-600">{basicInfo.profession}</Typography>
    <Typography tag="span" class="text-gray-600">{basicInfo.residence}</Typography>

    <Button class="mt-4">
      <Typography tag="span">Contact Me</Typography>
    </Button>
  </div>
</section>
