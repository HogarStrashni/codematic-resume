<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { cn } from '$lib/utils/tailwind';

	import type { ContactInfo } from '$lib/data';
	import Typography from '$lib/components/custom-ui/typography';

	type LinkProps = ContactInfo & { class?: SvelteHTMLElements['a']['class'] };

	let { text, href, icon: Icon, class: className }: LinkProps = $props();
</script>

<a {href} target="_blank" class={cn('group/link', className)}>
	<Icon class="size-5 shrink-0" />
	<Typography
		tag="span"
		variant="textSmall"
		class="underline underline-offset-4 duration-200 group-active:text-purple-600 lg:group-hover/link:text-blue-600 print:text-blue-600"
	>
		{text}
	</Typography>
</a>
