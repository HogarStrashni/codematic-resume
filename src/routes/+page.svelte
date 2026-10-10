<script lang="ts">
  import Typography from '$lib/components/custom-ui/typography/typography.svelte';
  import { Separator } from '$lib/components/ui/separator';
</script>

<div class="bg-gray-900 text-gray-400" aria-label="Website Content">
  <header
    class="sticky top-0 mx-auto hidden h-12 max-w-4xl bg-gray-900 px-4 sm:px-8 md:px-16 lg:block"
  >
    <Typography>Codematic</Typography>
  </header>

  <div class="mx-auto max-w-4xl scroll-smooth px-4 pb-20 sm:px-8 md:px-16">
    <!-- Home section -->
    <section class="-mt-20 flex min-h-svh flex-col pt-20 lg:min-h-dvh">
      <div class="flex-1">
        <Typography tag="h1">New website</Typography>
      </div>
    </section>

    <Separator />

    <!-- About me and Skills section -->
    <section class="">
      <div>About me</div>
      <div>Skills</div>
    </section>

    <Separator />

    <!-- Project section -->
    <section class="">Projects</section>
  </div>
</div>
