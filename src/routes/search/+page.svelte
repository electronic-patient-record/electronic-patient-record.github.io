<script lang="ts">
	import { page } from '$app/state';
	import { blob, pages } from '#lib/site.ts';
	import { groups, vendors } from '#lib/research.ts';

	const entries = [
		...pages.map((p) => ({ label: p.label, href: p.href, text: p.text })),
		...groups.flatMap((g) =>
			g.links.map(([label, path]) => ({ label, href: blob(path), text: g.heading }))
		),
		...vendors.map(([label, path]) => ({ label, href: blob(path), text: 'notes on other EPRs' }))
	];

	let query = $state('');
	let ready = $state(false);

	// The query is only in the browser's URL: this page is prerendered without one.
	$effect(() => {
		const raw = page.url.search.slice(1);
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
		return entries.filter((e) => {
			const haystack = `${e.label} ${e.text}`.toLowerCase();
			return terms.every((t) => haystack.includes(t));
		});
	});
</script>

<svelte:head>
	<title>Search — Electronic Patient Record</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<h1>Search</h1>
{#if !ready}
	<p>Search needs JavaScript. The <a href="/research/">research page</a> lists everything by hand.</p>
{:else if query.trim() === ''}
	<p>Use the search button in the header.</p>
{:else}
	<p role="status">
		{results.length}
		{results.length === 1 ? 'result' : 'results'} for "{query}".
	</p>
	{#if results.length > 0}
		<ul>
			{#each results as result (result.href)}
				<li><a href={result.href}>{result.label}</a></li>
			{/each}
		</ul>
	{/if}
{/if}
<p>This looks through page and research titles, not the text of the specification. To search that, use <a href={`https://github.com/search?q=repo%3Aelectronic-patient-record%2Felectronic-patient-record+${encodeURIComponent(query)}&type=code`}>GitHub</a>.</p>
