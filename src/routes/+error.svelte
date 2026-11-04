<script lang="ts">
	import { page } from '$app/state';
	import { ui } from '#lib/i18n.ts';

	const t = $derived(ui(page.data.locale ?? 'en-001'));
</script>

<svelte:head><title>{t.error.title} — {t.brand}</title></svelte:head>

<h1>{t.error.title}</h1>
<p><a href={page.data.home ?? '/'}>{t.notFound.home}</a>.</p>
