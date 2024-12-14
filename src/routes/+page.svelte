<script lang="ts">
	import Header from '$lib/components/custom-ui/header';
	import SectionWrapper from '$lib/components/custom-ui/section';

	import Summary from '$lib/components/custom-ui/section/summary';
	import Experience from '$lib/components/custom-ui/section/experience';
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
	<div>Skills placeholder</div>
</SectionWrapper>

<SectionWrapper title="Projects">
	<div>Projects placeholder</div>
</SectionWrapper>

<SectionWrapper title="Hobby and personal qualities">
	<div>Hobby and personal qualities placeholder</div>
</SectionWrapper>
