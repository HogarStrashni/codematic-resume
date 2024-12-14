<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';

	import { contactInfo } from '$lib/data/contact';
	import Typography from '$lib/components/custom-ui/typography';
	import { ContactLink } from '$lib/components/custom-ui/header';

	type HeaderProps = { class?: SvelteHTMLElements['header']['class'] };
	let { class: className }: HeaderProps = $props();
</script>

<header class={className}>
	<Typography tag="h1" variant="heading" fontWeight="bold">
		Đorđe Matić
		<span class="sr-only">resume</span>
	</Typography>

	<Typography class="mt-2">Software Developer | Frontend Focused</Typography>
	<Typography>Banja Luka, Bosnia and Herzegovina</Typography>

	<div class="mt-4 grid gap-2 md:grid-cols-2">
		{#each contactInfo as data (data.id)}
			<ContactLink {...data} class="flex max-w-fit items-center gap-2" />
		{/each}
	</div>
</header>
