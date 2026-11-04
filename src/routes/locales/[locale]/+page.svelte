<script lang="ts">
	import Home from '#lib/Home.svelte';

	let { data } = $props();
</script>

<Home page={data.page} locale={data.locale} tutorialHref={data.tutorialHref} featuresHref={data.featuresHref} />
