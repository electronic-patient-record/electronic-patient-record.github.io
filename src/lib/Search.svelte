<script lang="ts">
	import { page as appPage } from '$app/state';
	import { ui } from '#lib/i18n.ts';

	let { page, locale, index } = $props();
	const t = $derived(ui(locale));

	let query = $state('');
	let ready = $state(false);

	// The query is only in the browser's URL: this page is prerendered without one.
	$effect(() => {
		const raw = appPage.url.search.slice(1);
		try {
			query = decodeURIComponent(raw);
		} catch {
			query = raw;
		}
		ready = true;
	});

	const results = $derived.by(() => {
		const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
		if (terms.length === 0) return [];
		return index.filter((e: { title: string; text: string }) => {
			const haystack = `${e.title} ${e.text}`.toLowerCase();
			return terms.every((term) => haystack.includes(term));
		});
	});
</script>

<svelte:head>
	<title>{page.title} — {t.brand}</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<h1>{page.title}</h1>
{#if !ready}
	<p>{t.search.needsJs}</p>
{:else if query.trim() === ''}
	<p>{t.search.empty}</p>
{:else}
	<p role="status">{t.search.results(results.length, query)}</p>
	{#if results.length > 0}
		<ul>
			{#each results as result (result.href)}
				<li><a href={result.href}>{result.title}</a></li>
			{/each}
		</ul>
	{/if}
{/if}
<div class="lead">{@html page.intro}</div>
