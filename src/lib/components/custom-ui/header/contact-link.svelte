<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';

	import type { ContactInfo } from '$lib/data/contact';
	import Typography from '$lib/components/custom-ui/typography';

	type ContactLinkProps = ContactInfo & { class?: SvelteHTMLElements['a']['class'] };

	let { text, href, icon: Icon, class: className }: ContactLinkProps = $props();
</script>

<a {href} target="_blank" class={className}>
	<Icon class="size-5 shrink-0" />
	<Typography tag="span" variant="textSmall">{text}</Typography>
</a>
