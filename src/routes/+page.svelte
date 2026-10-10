<script lang="ts">
  import MainHeader from '$lib/components/custom-ui/header-main';
  import HeroSection from '$lib/components/custom-ui/section/hero-section';
  import Projects from '$lib/components/custom-ui/section/projects-main-page';
  import Skills from '$lib/components/custom-ui/section/skills';
  import Summary from '$lib/components/custom-ui/section/summary';
  import SectionWrapper from '$lib/components/custom-ui/section/wrapper';
  import { Separator } from '$lib/components/ui/separator';
  import { sectionTitle, summaryData, skillsData, projectsData } from '$lib/data/en';
</script>

<div class="bg-black text-gray-400" aria-label="Website Content">
  <MainHeader class="bg-black" />

  <div class="mx-auto max-w-4xl scroll-smooth px-4 pb-12 sm:px-8 sm:pb-20 md:px-16">
    <HeroSection />

    <Separator class="sm:my-20" id="about-me" />

    <SectionWrapper title="About me">
      <Summary {summaryData} />
    </SectionWrapper>
    <SectionWrapper title={sectionTitle.skills}>
      <Skills {skillsData} />
    </SectionWrapper>

    <Separator class="sm:my-20" id="projects" />

    <SectionWrapper title={sectionTitle.sideProjects}>
      <Projects {projectsData} />
    </SectionWrapper>

    <Separator class="sm:my-20" id="contact-me" />

    <SectionWrapper title="Contact Form">
      <label>
        <input />
      </label>
    </SectionWrapper>
  </div>
</div>
