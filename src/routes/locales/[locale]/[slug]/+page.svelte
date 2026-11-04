<script lang="ts">
	import Search from '#lib/Search.svelte';
	import Topic from '#lib/Topic.svelte';

	let { data } = $props();
</script>

{#if data.page.name === 'search'}
	<Search page={data.page} locale={data.locale} index={data.index} />
{:else}
	<Topic page={data.page} locale={data.locale} children={data.children} />
{/if}
