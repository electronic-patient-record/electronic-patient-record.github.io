import { byName, find, peers } from '#lib/server/content.ts';
import { DEFAULT_LOCALE } from '#lib/locales.ts';
import { NAV } from '#lib/site.ts';

// The locale comes from the URL. The root has none, so it is the canonical English home.
export const load = ({ params, route }) => {
	const locale = (params as { locale?: string }).locale ?? DEFAULT_LOCALE;
	const { slug: topic, vendor } = params as { slug?: string; vendor?: string };
	const base = route.id?.startsWith('/compare') ? 'compare' : (topic ?? '');
	const slug = vendor ? `${base}/${vendor}` : base;
	const page = route.id === '/404' ? undefined : find(locale, slug);
	return {
		locale,
		home: `/locales/${locale}/`,
		nav: NAV.map((name) => ({ name, href: byName(locale, name).href })),
		searchHref: byName(locale, 'search').href,
		researchHref: byName(locale, 'research').href,
		tutorialHref: byName(locale, 'tutorial').href,
		featuresHref: byName(locale, 'features').href,
		peers: page ? peers(page) : {}
	};
};
