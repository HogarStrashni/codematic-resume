<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';

	let { children } = $props();
	$inspect($page.url.origin);
</script>

<svelte:head>
	<title>Đorđe Matić - Resume</title>
	<meta name="description" content="Codematic Đorđe Matić Resume - Personal Website" />

	<meta property="og:title" content="Personal Resume" />
	<meta property="og:description" content="Codematic - Đorđe Matić Resume" />
	<meta property="og:image" content={`${$page.url.origin}/codematic-logo.png`} />
	<meta property="og:url" content={`${$page.url.origin}`} />
	<meta property="og:type" content="website" />
</svelte:head>

{@render children()}
