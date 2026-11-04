<script lang="ts">
	import '#lib/site.css';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { AnnouncementBanner, Footer, Header, SkipLink } from '@lilydesignsystem/svelte-headless';
	import PickerBar from '@lilydesignsystem/svelte-picker-bar';
	import { ui } from '#lib/i18n.ts';
	import { LOCALE_LABELS, LOCALES } from '#lib/locales.ts';
	import { REPO } from '#lib/site.ts';
	import { themes } from '#lib/themes.ts';

	let { children, data } = $props();

	const t = $derived(ui(data.locale));
	const links = $derived([
		...data.nav.map((item) => ({ href: item.href, label: t.nav[item.name] })),
		{ href: data.researchHref, label: t.nav.research }
	]);
	const encode = encodeURIComponent;
	const shareTargets = $derived([
		{
			id: 'email',
			label: t.pickers.email,
			href: (url: string, title: string) => `mailto:?subject=${encode(title)}&body=${encode(url)}`,
			newTab: false
		},
		{
			id: 'linkedin',
			label: 'LinkedIn',
			href: (url: string) => `https://www.linkedin.com/sharing/share-offsite/?url=${encode(url)}`
		},
		{
			id: 'bluesky',
			label: 'Bluesky',
			href: (url: string, title: string) =>
				`https://bsky.app/intent/compose?text=${encode(`${title} ${url}`)}`
		}
	]);

	// The picker reports the locale it applied, including the one this page is already in.
	function changeLocale(code: string) {
		if (code === data.locale) return;
		goto(data.peers[code] ?? `/locales/${code}/`);
	}
</script>

<SkipLink href="#content" label={t.skip} />

<AnnouncementBanner label={t.statusLabel} class="notice">
	<div class="site-width">
		<p>{t.notice}</p>
		{#if t.machineNotice}<p class="machine-notice">{t.machineNotice}</p>{/if}
	</div>
</AnnouncementBanner>

<Header label={t.headerLabel} class="site-header">
	<div class="site-width">
		<a class="site-name" href={data.home}>{t.brand}</a>
		<nav class="site-nav" aria-label={t.mainNav}>
			<ul>
				{#each data.nav as item (item.name)}
					<li>
						<a href={item.href} aria-current={page.url.pathname === item.href ? 'page' : undefined}>
							{t.nav[item.name]}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
		<PickerBar
			class="site-pickers"
			labels={t.pickers}
			{links}
			searchProps={{ action: data.searchHref, placeholder: t.pickers.search }}
			themesUrl="/themes/"
			{themes}
			themeProps={{ defaultValue: 'light', storageKey: 'epr-theme', detectFromSystem: true }}
			locales={LOCALES}
			localeProps={{
				value: data.locale,
				defaultValue: data.locale,
				localeLabels: LOCALE_LABELS,
				onChange: changeLocale
			}}
			timeZoneProps={{ locale: data.locale }}
			textSizeProps={{ storageKey: 'epr-text-size' }}
			{shareTargets}
			shareProps={{ copyLabel: t.pickers.copy, copiedLabel: t.pickers.copied }}
		/>
	</div>
</Header>

<main id="content" class="site-width">
	{@render children()}
</main>

<Footer label={t.footerLabel} class="site-footer">
	<div class="site-width">
		<p>
			<a href={REPO}>{t.footer.source}</a> ·
			<a href={data.researchHref}>{t.nav.research}</a> ·
			<a href={`${REPO}/blob/main/LICENSE.md`}>{t.footer.licence}</a>
		</p>
		<p>{t.footer.independent}</p>
	</div>
</Footer>
