<script lang="ts">
	import { ui } from '#lib/i18n.ts';
	import Sections from '#lib/Sections.svelte';

	let { page, locale, children = [] } = $props();
	const t = $derived(ui(locale));
</script>

<svelte:head>
	<title>{page.title} — {t.brand}</title>
	<meta name="description" content={page.subtitle} />
</svelte:head>

<h1>{page.title}</h1>
<p class="subtitle">{page.subtitle}</p>
<div class="lead">{@html page.intro}</div>
<Sections html={page.html} />
{#if children.length > 0}
	<div class="cards">
		{#each children as child (child.href)}
			<div class="card">
				<h3><a href={child.href}>{child.title}</a></h3>
				<p>{child.subtitle}</p>
			</div>
		{/each}
	</div>
{/if}
