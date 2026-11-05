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

	// Arabic is usually typed without vowel marks, and with one form of alef; the page text may have either.
	const fold = (text: string) =>
		text
			.normalize('NFC')
			.toLowerCase()
			.replace(/[\u064B-\u065F\u0670]/g, '')
			.replace(/[\u0622\u0623\u0625]/g, '\u0627');

	const results = $derived.by(() => {
		const terms = fold(query).split(/\s+/).filter(Boolean);
		if (terms.length === 0) return [];
		return index.filter((e: { title: string; text: string }) => {
			const haystack = fold(`${e.title} ${e.text}`);
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
