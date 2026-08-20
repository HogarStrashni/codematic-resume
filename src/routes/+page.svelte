<script lang="ts">
  import Header from '$lib/components/custom-ui/header';
  import SectionWrapper from '$lib/components/custom-ui/section/wrapper';
  import Contact from '$lib/components/custom-ui/section/contact';
  import Summary from '$lib/components/custom-ui/section/summary';
  import Experience from '$lib/components/custom-ui/section/experience';
  import Education from '$lib/components/custom-ui/section/education/education.svelte';
  import Skills from '$lib/components/custom-ui/section/skills';
  import Projects from '$lib/components/custom-ui/section/projects';
</script>

<Header class="-mx-4 px-4 sm:-mx-8 sm:px-8 md:-mx-16 md:px-16" />

<Contact />

<SectionWrapper title="Summary" class="mt-12">
  <Summary />
</SectionWrapper>

<SectionWrapper title="Work Experience" class="mt-12">
  <Experience />
</SectionWrapper>

<SectionWrapper title="Education">
  <Education />
</SectionWrapper>

<SectionWrapper title="Skills">
  <Skills />
</SectionWrapper>

<SectionWrapper title="Side Projects">
  <Projects />
</SectionWrapper>
