<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<h1 class="sr-only">Djordje Matic's resume</h1>

<div class="border" aria-label="Resume Content">
	<header class="flex justify-center border">
		<h2 class="text-3xl">Header</h2>
	</header>
	{@render children()}
</div>
