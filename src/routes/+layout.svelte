<script lang="ts">
  import '../app.css';

  import { page } from '$app/state';
  import { basicInfo } from '$lib/data/en';

  let { children } = $props();
</script>

<svelte:head>
  <title>{basicInfo.name} - Portfolio</title>
  <meta name="description" content="Codematic {basicInfo.name} Portfolio - Website" />

  <meta property="og:title" content="Codematic - {basicInfo.name} - Portfolio" />
  <meta
    property="og:description"
    content="Explore the professional background, skills, and accomplishments of {basicInfo.name}, a passionate software developer."
  />
  <meta property="og:image" content={`${page.url.origin}/codematic-logo.png`} />
  <meta property="og:url" content={`${page.url.origin}`} />
  <meta property="og:type" content="website" />
</svelte:head>

{@render children()}
