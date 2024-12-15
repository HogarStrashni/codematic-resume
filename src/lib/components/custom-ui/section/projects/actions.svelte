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
		class="inline-block shrink-0 rounded border px-5 py-2"
	>
		<Link class="size-4" />
	</a>

	{#if github}
		<a
			href={github ?? undefined}
			aria-label="Github"
			target="_blank"
			class="inline-block shrink-0 rounded border px-5 py-2"
		>
			<Github class="size-4" />
		</a>
	{/if}
</div>
