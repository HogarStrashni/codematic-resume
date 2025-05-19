<script lang="ts">
	import { skillsData } from '$lib/data';

	import Header from '$lib/components/custom-ui/header';
	import Contact from '$lib/components/custom-ui/section/contact';
	import SectionWrapper from '$lib/components/custom-ui/section';
	import Summary from '$lib/components/custom-ui/section/summary';
	import Experience from '$lib/components/custom-ui/section/experience';
	import Tags from '$lib/components/custom-ui/tags';
	import Education from '$lib/components/custom-ui/section/education/education.svelte';
	import Projects from '$lib/components/custom-ui/section/projects';
</script>

<Header class="-mx-4 px-4 sm:-mx-8 sm:px-8 md:-mx-16 md:px-16" />

<Contact />

<SectionWrapper title="Summary">
	<Summary />
</SectionWrapper>

<SectionWrapper title="Work Experience">
	<Experience />
</SectionWrapper>

<SectionWrapper title="Education">
	<Education />
</SectionWrapper>

<SectionWrapper title="Skills">
	<Tags data={skillsData} variant="text" />
</SectionWrapper>

<SectionWrapper title="Side Projects">
	<Projects />
</SectionWrapper>
