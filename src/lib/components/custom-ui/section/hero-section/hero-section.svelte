<script lang="ts">
  import { goto } from '$app/navigation';
  import Typography from '$lib/components/custom-ui/typography';
  import { Button } from '$lib/components/ui/button';
  import { basicInfo } from '$lib/data/en';

  import Image from '$lib/components/custom-ui/image';
  import avatarImage from '$lib/assets/avatar-image.jpg?enhanced';
</script>

<section class="-mt-16 flex min-h-svh flex-col pt-16 sm:-mt-20 sm:pt-20 lg:min-h-dvh">
  <div class="mx-auto flex w-full flex-1 flex-col justify-center gap-1 sm:max-w-128">
    <Image
      src={avatarImage}
      alt="{basicInfo.name} avatar"
      class="mb-2 size-24 rounded-full sm:size-36"
    />
    <Typography tag="span" variant="headingLarge">{basicInfo.name}</Typography>
    <Typography tag="span" class="mt-1 text-gray-600">{basicInfo.profession}</Typography>
    <Typography tag="span" class="text-gray-600">{basicInfo.residence}</Typography>

    <Button class="mt-4" onclick={() => goto('#contact-me')}>
      <Typography tag="span">Contact Me</Typography>
    </Button>
  </div>
</section>
