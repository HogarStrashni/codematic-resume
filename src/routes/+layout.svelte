<script lang="ts">
  import '../app.css';
  import { page } from '$app/state';

  let { children } = $props();
</script>

<svelte:head>
  <title>Đorđe Matić - Portfolio</title>
  <meta name="description" content="Codematic Đorđe Matić Portfolio - Website" />

  <meta property="og:title" content="Codematic - Đorđe Matić - Portfolio" />
  <meta
    property="og:description"
    content="Explore the professional background, skills, and accomplishments of Đorđe Matić, a passionate software developer."
  />
  <meta property="og:image" content={`${page.url.origin}/codematic-logo.png`} />
  <meta property="og:url" content={`${page.url.origin}`} />
  <meta property="og:type" content="website" />
</svelte:head>

{@render children()}
