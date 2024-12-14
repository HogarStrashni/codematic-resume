<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';

	import { cn } from '$lib/utils/tailwind';
	import Typography from '$lib/components/custom-ui/typography';
	import { DateRangeDisplay } from '$lib/components/custom-ui/section/experience';
	import ListTags from '$lib/components/custom-ui/list-tags';
	import type { ExperienceData } from '$lib/data/experience';

	type ExperienceArticleProps = {
		articleData: ExperienceData;
		class?: SvelteHTMLElements['article']['class'];
	};
	let { articleData, class: className }: ExperienceArticleProps = $props();

	const { title, company, logo, startDate, endDate, description, technologies } = articleData;
</script>

<article class={cn('space-y-2', className)}>
	<div class="flex gap-2">
		<div class="size-8 shrink-0 overflow-hidden rounded border">
			<img src={logo} alt={title + 'logo'} />
		</div>
		<div>
			<Typography tag="h3" fontWeight="bold">{title}</Typography>
			<Typography>{company}</Typography>
			<DateRangeDisplay {startDate} {endDate} />
		</div>
	</div>
	<Typography variant="textSmall">{description}</Typography>

	<ListTags data={technologies} />
</article>
