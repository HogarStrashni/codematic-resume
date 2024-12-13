<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/custom-ui/header';

	let { children } = $props();
</script>

<h1 class="sr-only">Djordje Matic's resume</h1>

<div aria-label="Resume Content">
	<Header />
	{@render children()}
</div>
