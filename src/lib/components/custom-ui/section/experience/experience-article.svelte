<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';

	import { cn } from '$lib/utils/tailwind';
	import type { ExperienceData } from '$lib/data';
	import Typography from '$lib/components/custom-ui/typography';
	import { DateRangeDisplay } from '$lib/components/custom-ui/section/experience';
	import ListTags from '$lib/components/custom-ui/list-tags';
	import Image from '$lib/components/custom-ui/image';

	type ExperienceArticleProps = {
		articleData: ExperienceData;
		class?: SvelteHTMLElements['article']['class'];
	};
	let { articleData, class: className }: ExperienceArticleProps = $props();

	const { title, company, logo, startDate, endDate, description, technologies } = articleData;
</script>

<article class={cn('space-y-2', className)}>
	<div class="flex gap-2">
		<Image src={logo} alt={company + ' logo'} class="print:hidden" />
		<div>
			<Typography tag="h3" fontWeight="bold">{title}</Typography>
			<Typography>{company}</Typography>
			<DateRangeDisplay {startDate} {endDate} />
		</div>
	</div>
	<Typography variant="textSmall">{description}</Typography>

	<ListTags data={technologies} />
</article>
