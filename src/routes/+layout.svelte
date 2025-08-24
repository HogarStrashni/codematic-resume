<script lang="ts">
  import '../app.css';
  import { page } from '$app/state';

  let { children } = $props();
</script>

<svelte:head>
  <title>Đorđe Matić - Resume</title>
  <meta name="description" content="Codematic Đorđe Matić Resume - Website" />

  <meta property="og:title" content="Codematic - Đorđe Matić - Resume" />
  <meta
    property="og:description"
    content="Explore the professional background, skills, and accomplishments of Đorđe Matić, a passionate software developer."
  />
  <meta property="og:image" content={`${page.url.origin}/codematic-logo.png`} />
  <meta property="og:url" content={`${page.url.origin}`} />
  <meta property="og:type" content="website" />
</svelte:head>

{@render children()}
