<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Đorđe Matić - Resume</title>
	<meta name="description" content="Codematic Đorđe Matić Resume - Personal Website" />
</svelte:head>

{@render children()}
