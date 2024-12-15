<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { cn } from '$lib/utils/tailwind';

	import { contactInfo } from '$lib/data/contact';
	import Typography from '$lib/components/custom-ui/typography';
	import { ContactLink } from '$lib/components/custom-ui/header';
	import Image from '$lib/components/custom-ui/image';
	import avatarImage from '$lib/assets/avatar-image.png?enhanced';

	type HeaderProps = { class?: SvelteHTMLElements['header']['class'] };
	let { class: className }: HeaderProps = $props();
</script>

<header class={cn('space-y-2', className)}>
	<Image src={avatarImage} alt="Đorđe Matić avatar" class="size-24 rounded-full" />

	<Typography tag="h1" variant="heading" fontWeight="bold">
		Đorđe Matić
		<span class="sr-only">resume</span>
	</Typography>
	<div>
		<Typography>Software Developer | Frontend Focused</Typography>
		<Typography>Banja Luka, Bosnia and Herzegovina</Typography>
	</div>

	<div class="mt-4 grid gap-2 sm:grid-cols-2">
		{#each contactInfo as data (data.id)}
			<ContactLink {...data} class="flex max-w-fit items-center gap-2" />
		{/each}
	</div>
</header>
