<script lang="ts">
  import { sectionTitle } from '$lib/data/en';

  import SectionWrapper from '$lib/components/custom-ui/section/wrapper';
  import Contact from '$lib/components/custom-ui/section/contact';
  import Summary from '$lib/components/custom-ui/section/summary';
  import Experience from '$lib/components/custom-ui/section/experience';
  import Education from '$lib/components/custom-ui/section/education/education.svelte';
  import Skills from '$lib/components/custom-ui/section/skills';
  import Projects from '$lib/components/custom-ui/section/projects';
</script>

<Contact />

<SectionWrapper title={sectionTitle.summary} class="mt-12">
  <Summary />
</SectionWrapper>

<SectionWrapper title={sectionTitle.workExperience} class="mt-12">
  <Experience />
</SectionWrapper>

<SectionWrapper title={sectionTitle.education}>
  <Education />
</SectionWrapper>

<SectionWrapper title={sectionTitle.skills}>
  <Skills />
</SectionWrapper>

<SectionWrapper title={sectionTitle.sideProjects}>
  <Projects />
</SectionWrapper>
