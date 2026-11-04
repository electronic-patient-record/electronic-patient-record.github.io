import { error } from '@sveltejs/kit';
import { children, find, forLocale, pages } from '#lib/server/content.ts';

export const entries = () =>
	pages.filter((p) => p.slug && !p.slug.includes('/')).map((p) => ({ locale: p.locale, slug: p.slug }));

export const load = ({ params }) => {
	const page = find(params.locale, params.slug);
	if (!page) error(404);
	const index =
		page.name === 'search'
			? forLocale(params.locale)
					.filter((p) => p.name !== 'search')
					.map(({ title, text, href }) => ({ title, text, href }))
			: [];
	return { page, index, children: children(params.locale, params.slug) };
};
