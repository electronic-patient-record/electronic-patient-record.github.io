<script lang="ts">
	import Topic from '#lib/Topic.svelte';

	let { data } = $props();
</script>

<Topic page={data.page} locale={data.locale} />
