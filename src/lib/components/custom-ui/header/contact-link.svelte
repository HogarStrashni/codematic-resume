<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { cn } from '$lib/utils/tailwind';

	import type { ContactInfo } from '$lib/data/contact';
	import Typography from '$lib/components/custom-ui/typography';

	type ContactLinkProps = ContactInfo & { class?: SvelteHTMLElements['a']['class'] };

	let { text, href, icon: Icon, class: className }: ContactLinkProps = $props();
</script>

<a {href} target="_blank" class={cn('group', className)}>
	<Icon class="size-5 shrink-0" />
	<Typography
		tag="span"
		variant="textSmall"
		class="underline underline-offset-4 duration-200 group-hover:text-blue-600 group-active:text-purple-600 print:text-blue-600"
	>
		{text}
	</Typography>
</a>
