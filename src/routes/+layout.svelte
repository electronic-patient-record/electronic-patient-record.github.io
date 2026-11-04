<script lang="ts">
	import '#lib/site.css';
	import { page } from '$app/state';
	import { AnnouncementBanner, Footer, Header, SkipLink } from '@lilydesignsystem/svelte-headless';
	import PickerBar from '@lilydesignsystem/svelte-picker-bar';
	import { blob, nav, REPO } from '#lib/site.ts';
	import { themes } from '#lib/themes.ts';

	let { children } = $props();

	const encode = encodeURIComponent;
	const shareTargets = [
		{
			id: 'email',
			label: 'Email',
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
	];
</script>

<SkipLink href="#content" label="Skip to content" />

<AnnouncementBanner label="Status notice" class="notice">
	<div class="site-width">
		<p>Pre-release software. Not for clinical use. Do not enter real patient data.</p>
	</div>
</AnnouncementBanner>

<Header label="Site header" class="site-header">
	<div class="site-width">
		<a class="site-name" href="/">Electronic Patient Record</a>
		<nav class="site-nav" aria-label="Main">
			<ul>
				{#each nav as item (item.href)}
					<li>
						<a href={item.href} aria-current={page.url.pathname === item.href ? 'page' : undefined}>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
		<PickerBar
			class="site-pickers"
			labels={{
				link: 'Pages',
				search: 'Search this site',
				searchInput: 'Search terms',
				searchSubmit: 'Search',
				theme: 'Colour theme',
				locale: 'Language',
				timeZone: 'Time zone',
				textSize: 'Text size',
				share: 'Share'
			}}
			links={nav}
			searchProps={{ action: '/search/', placeholder: 'Search this site' }}
			themesUrl="/themes/"
			{themes}
			themeProps={{ defaultValue: 'light', storageKey: 'epr-theme', detectFromSystem: true }}
			locales={['en-GB']}
			localeProps={{ defaultValue: 'en-GB', localeLabels: { 'en-GB': 'English (UK)' } }}
			timeZoneProps={{ locale: 'en-GB' }}
			textSizeProps={{ storageKey: 'epr-text-size' }}
			{shareTargets}
			shareProps={{ copyLabel: 'Copy link', copiedLabel: 'Copied' }}
		/>
	</div>
</Header>

<main id="content" class="site-width">
	{@render children()}
</main>

<Footer label="Site footer" class="site-footer">
	<div class="site-width">
		<p>
			Open source: <a href={REPO}>source on GitHub</a>. Available under MIT, Apache-2.0, BSD-3-Clause,
			GPL-2.0-only or GPL-3.0-only, at your choice; see the
			<a href={blob('LICENSE.md')}>licence</a>.
		</p>
		<p>
			Independent project. Not affiliated with or endorsed by the NHS, any government or any EPR
			supplier. Not for clinical use.
		</p>
	</div>
</Footer>
