<script lang="ts">
	import { blob } from '#lib/site.ts';
	import { groups, vendors } from '#lib/research.ts';
</script>

<svelte:head>
	<title>Research — Electronic Patient Record</title>
	<meta name="description" content="Desk research behind the Electronic Patient Record specification." />
</svelte:head>

<h1>Research</h1>
<p class="lead">The desk research behind the specification, with its sources and its gaps.</p>
<p>
	These are proposals and readings of public sources, not clinical or legal advice. Most sources were
	read as search results, and each page has a "Not verified" section. No clinician or lawyer has
	reviewed them. The ideas are ranked in the <a href={blob('plan.md')}>plan</a> and tracked in
	<a href={blob('tasks.md')}>tasks</a>.
</p>

{#each groups as group (group.heading)}
	<section>
		<h2>{group.heading}</h2>
		<ul>
			{#each group.links as [label, path] (path)}
				<li><a href={blob(path)}>{label}</a></li>
			{/each}
		</ul>
	</section>
{/each}

<section>
	<h2>Notes on other EPRs</h2>
	<p>
		Public-source notes on what can be learned from systems already in use. They are not product
		reviews and do not say any system is better or worse. This project is a scaffold; these are
		working products.
	</p>
	<ul>
		{#each vendors as [label, path] (path)}
			<li><a href={blob(path)}>{label}</a></li>
		{/each}
	</ul>
</section>
