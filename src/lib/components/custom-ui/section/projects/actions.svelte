<script lang="ts">
	import { Link, Github } from '$lib/icons';

	type ActionProps = { link: string; github: string | null };
	let { link, github }: ActionProps = $props();
</script>

<div class="flex max-w-fit gap-2">
	<a
		href={link}
		aria-label="Link to Web App"
		target="_blank"
		class="inline-block shrink-0 rounded border px-5 py-2 shadow duration-200 hover:bg-gray-50 active:shadow-none"
	>
		<Link class="size-4" />
	</a>

	{#if github}
		<a
			href={github ?? undefined}
			aria-label="Link to Github"
			target="_blank"
			class="inline-block shrink-0 rounded border px-5 py-2 shadow duration-200 hover:bg-gray-50 active:shadow-none"
		>
			<Github class="size-4" />
		</a>
	{/if}
</div>
