<script lang="ts">
  import ContactForm from '$lib/components/custom-ui/contact-form';
  import MainHeader from '$lib/components/custom-ui/header-main';
  import HeroSection from '$lib/components/custom-ui/section/hero-section';
  import Projects from '$lib/components/custom-ui/section/projects-main-page';
  import Skills from '$lib/components/custom-ui/section/skills';
  import Summary from '$lib/components/custom-ui/section/summary';
  import SectionWrapper from '$lib/components/custom-ui/section/wrapper';
  import { Separator } from '$lib/components/ui/separator';
  import { projectsData, sectionTitle, skillsData, summaryData } from '$lib/data/en';

  $effect(() => {
    document.body.style.backgroundColor = 'black';

    return () => (document.body.style.backgroundColor = '');
  });
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

    <SectionWrapper
      title={sectionTitle.sideProjects}
      description="A selection of projects I've built independently, driven by curiosity and a passion for creating things. From experimenting with new technologies to turning ideas into reality, these projects reflect my personal interests and explorations outside of my day-to-day professional work."
    >
      <Projects {projectsData} class="mt-8" />
    </SectionWrapper>

    <Separator class="sm:my-20" id="contact-me" />

    <SectionWrapper
      title="Contact Me"
      description="Have something interesting in mind? I'm always open to new opportunities, creative collaborations, and conversations with people who enjoy building great things. Whether it's a project idea or just a quick hello, feel free to get in touch."
    >
      <ContactForm class="mt-8" />
    </SectionWrapper>
  </div>
</div>
