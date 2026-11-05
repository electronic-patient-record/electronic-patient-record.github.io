<script lang="ts">
	import { ui } from '#lib/i18n.ts';
	import { TRANSLATIONS } from '#lib/locales.ts';
	import { REPO } from '#lib/site.ts';
	import Sections from '#lib/Sections.svelte';

	let { page, locale, tutorialHref, featuresHref } = $props();
	const t = $derived(ui(locale));
</script>

<svelte:head>
	<title>{page.title} — {t.brand}</title>
	<meta name="description" content={page.subtitle} />
</svelte:head>

<div class="hero-block">
	<h1>{page.title}</h1>
	<p class="subtitle">{page.subtitle}</p>
	<div class="lead">{@html page.intro}</div>
	<p class="actions">
		<a class="action primary" href={tutorialHref}>{t.cta.start}</a>
		<a class="action" href={featuresHref}>{t.cta.features}</a>
		<a class="action" href={REPO}>{t.cta.source}</a>
	</p>
	<p class="translations">
		{t.translations}:
		{#each TRANSLATIONS as item, i (item.code)}<bdi><a href={`/locales/${item.code}/`} lang={item.code}>{item.name}</a></bdi
			>{i < TRANSLATIONS.length - 1 ? ', ' : ''}{/each}
	</p>
</div>

<Sections html={page.html} />
