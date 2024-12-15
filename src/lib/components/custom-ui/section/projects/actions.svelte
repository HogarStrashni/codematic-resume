<script lang="ts">
	import { Link, Github } from '$lib/icons';

	type ActionProps = { link: string; github: string | null };
	let { link, github }: ActionProps = $props();
</script>

<div class="flex max-w-fit gap-2 print:hidden">
	<a
		href={link}
		aria-label="Link to Web App"
		target="_blank"
		class="inline-block shrink-0 rounded border px-5 py-2 shadow-sm duration-200 active:shadow-none lg:hover:bg-gray-50"
	>
		<Link class="size-4" />
	</a>

	{#if github}
		<a
			href={github ?? undefined}
			aria-label="Link to Github"
			target="_blank"
			class="inline-block shrink-0 rounded border px-5 py-2 shadow-sm duration-200 active:shadow-none lg:hover:bg-gray-50"
		>
			<Github class="size-4" />
		</a>
	{/if}
</div>
