<script lang="ts">
  import Projects from '$lib/components/custom-ui/section/projects-main-page';
  import Skills from '$lib/components/custom-ui/section/skills';
  import Summary from '$lib/components/custom-ui/section/summary';
  import SectionWrapper from '$lib/components/custom-ui/section/wrapper';
  import Typography from '$lib/components/custom-ui/typography/typography.svelte';
  import { Separator } from '$lib/components/ui/separator';
  import { sectionTitle, summaryData, skillsData, projectsData } from '$lib/data/en';
</script>

<div class="bg-gray-900 text-gray-400" aria-label="Website Content">
  <header
    class="sticky top-0 mx-auto hidden h-12 max-w-4xl bg-gray-900 px-4 sm:px-8 md:px-16 lg:block"
  >
    <Typography>Codematic</Typography>
  </header>

  <div class="mx-auto max-w-4xl scroll-smooth px-4 pb-12 sm:px-8 sm:pb-20 md:px-16">
    <!-- Home section -->
    <section class="-mt-12 flex min-h-svh flex-col pt-12 sm:-mt-20 sm:pt-20 lg:min-h-dvh">
      <div class="flex-1">
        <Typography tag="h1">New website</Typography>
      </div>
    </section>

    <Separator class="sm:my-20" />

    <!-- About me and Skills section -->
    <SectionWrapper title="About me">
      <Summary {summaryData} />
    </SectionWrapper>
    <SectionWrapper title={sectionTitle.skills}>
      <Skills {skillsData} />
    </SectionWrapper>

    <Separator class="sm:my-20" />

    <!-- Projects section -->
    <SectionWrapper title={sectionTitle.sideProjects}>
      <Projects {projectsData} />
    </SectionWrapper>
  </div>
</div>
