<script lang="ts">
  import {
    downloadFileMetadata,
    sectionTitle,
    basicInfo,
    contactInfo,
    summaryData,
    experienceData,
    educationData,
    skillsData,
    projectsData
  } from '$lib/data/en';

  import Header from '$lib/components/custom-ui/header';

  import SectionWrapper from '$lib/components/custom-ui/section/wrapper';
  import Contact from '$lib/components/custom-ui/section/contact';
  import Summary from '$lib/components/custom-ui/section/summary';
  import Experience from '$lib/components/custom-ui/section/experience';
  import Education from '$lib/components/custom-ui/section/education/education.svelte';
  import Skills from '$lib/components/custom-ui/section/skills';
  import Projects from '$lib/components/custom-ui/section/projects';
</script>

<Header {downloadFileMetadata} class="-mx-4 px-4 sm:-mx-8 sm:px-8 md:-mx-16 md:px-16" />

<Contact {basicInfo} {contactInfo} />

<SectionWrapper title={sectionTitle.summary} class="mt-12">
  <Summary {summaryData} />
</SectionWrapper>

<SectionWrapper title={sectionTitle.workExperience} class="mt-12">
  <Experience {experienceData} />
</SectionWrapper>

<SectionWrapper title={sectionTitle.education}>
  <Education {educationData} />
</SectionWrapper>

<SectionWrapper title={sectionTitle.skills}>
  <Skills {skillsData} />
</SectionWrapper>

<SectionWrapper title={sectionTitle.sideProjects}>
  <Projects {projectsData} />
</SectionWrapper>
