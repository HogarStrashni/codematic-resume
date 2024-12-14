<script lang="ts">
	import { skillsData } from '$lib/data/skills';
	import Header from '$lib/components/custom-ui/header';
	import SectionWrapper from '$lib/components/custom-ui/section';
	import Summary from '$lib/components/custom-ui/section/summary';
	import Experience from '$lib/components/custom-ui/section/experience';
	import ListTags from '$lib/components/custom-ui/list-tags/list-tags.svelte';
</script>

<Header />

<SectionWrapper title="Summary">
	<Summary class="space-y-2" />
</SectionWrapper>

<SectionWrapper title="Work Experience">
	<Experience class="space-y-4" />
</SectionWrapper>

<SectionWrapper title="Education">
	<div>Education placeholder</div>
</SectionWrapper>

<SectionWrapper title="Skills">
	<ListTags data={skillsData} variant="text" />
</SectionWrapper>

<SectionWrapper title="Projects">
	<div>Projects placeholder</div>
</SectionWrapper>
