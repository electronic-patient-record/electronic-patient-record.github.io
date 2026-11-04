<script lang="ts">
	import { ui } from '#lib/i18n.ts';

	let { data } = $props();
	const t = $derived(ui(data.locale));
</script>

<svelte:head>
	<title>{t.notFound.title} — {t.brand}</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<h1>{t.notFound.title}</h1>
<p><a href={data.home}>{t.notFound.home}</a>.</p>
