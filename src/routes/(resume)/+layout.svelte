<script lang="ts">
  import '../../app.css';

  let { children } = $props();
</script>

<div class="mx-auto max-w-4xl p-4 text-gray-700 sm:p-8 md:p-16" aria-label="Resume Content">
  {@render children()}
</div>
