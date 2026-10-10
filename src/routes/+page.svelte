<script lang="ts">
  import MainHeader from '$lib/components/custom-ui/header-main';
  import Projects from '$lib/components/custom-ui/section/projects-main-page';
  import Skills from '$lib/components/custom-ui/section/skills';
  import Summary from '$lib/components/custom-ui/section/summary';
  import SectionWrapper from '$lib/components/custom-ui/section/wrapper';
  import Typography from '$lib/components/custom-ui/typography/typography.svelte';
  import { Separator } from '$lib/components/ui/separator';
  import { sectionTitle, summaryData, skillsData, projectsData } from '$lib/data/en';
</script>

<div class="bg-gray-900 text-gray-400" aria-label="Website Content">
  <MainHeader />

  <div class="mx-auto max-w-4xl scroll-smooth px-4 pb-12 sm:px-8 sm:pb-20 md:px-16">
    <!-- Hero section -->
    <section class="-mt-16 flex min-h-svh flex-col pt-16 sm:-mt-20 sm:pt-20 lg:min-h-dvh">
      <div class="flex-1">
        <Typography tag="h1">New website</Typography>
      </div>
    </section>

    <Separator class="sm:my-20" id="about-me" />

    <!-- About me and Skills section -->
    <SectionWrapper title="About me">
      <Summary {summaryData} />
    </SectionWrapper>
    <SectionWrapper title={sectionTitle.skills}>
      <Skills {skillsData} />
    </SectionWrapper>

    <Separator class="sm:my-20" id="projects" />

    <!-- Projects section -->
    <SectionWrapper title={sectionTitle.sideProjects}>
      <Projects {projectsData} />
    </SectionWrapper>

    <Separator class="sm:my-20" id="contact-me" />

    <!-- Contact Form section -->
    <SectionWrapper title="Contact Form">
      <label>
        <input />
      </label>
    </SectionWrapper>
  </div>
</div>
