<script lang="ts">
	import '#lib/site.css';
	import { page } from '$app/state';
	import { AnnouncementBanner, Footer, Header, SkipLink } from '@lilydesignsystem/svelte-headless';
	import ThemePicker from '@lilydesignsystem/svelte-theme-picker';
	import TextSizePicker from '@lilydesignsystem/svelte-text-size-picker';
	import { blob, nav, REPO } from '#lib/site.ts';
	import { themes } from '#lib/themes.ts';

	let { children } = $props();
	const themeLabels = Object.fromEntries(themes.map((t) => [t.id, t.label]));
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
		<div class="site-pickers">
			<TextSizePicker
				label="Text size"
				sizes={['largest', 'larger', 'large', 'normal', 'small', 'smaller', 'smallest']}
				defaultValue="normal"
				storageKey="epr-text-size"
			/>
			<ThemePicker
				label="Colour theme"
				themesUrl="/themes/"
				themes={themes.map((t) => t.id)}
				{themeLabels}
				defaultValue="light"
				storageKey="epr-theme"
				detectFromSystem
			/>
		</div>
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
