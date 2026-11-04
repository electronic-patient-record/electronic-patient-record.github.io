import { error } from '@sveltejs/kit';
import { find, pages } from '#lib/server/content.ts';
import { DEFAULT_LOCALE } from '#lib/locales.ts';

export const entries = () =>
	pages
		.filter((p) => p.locale === DEFAULT_LOCALE && p.slug.startsWith('compare/'))
		.map((p) => ({ vendor: p.slug.split('/')[1] }));

export const load = ({ params }) => {
	const page = find(DEFAULT_LOCALE, `compare/${params.vendor}`);
	if (!page) error(404);
	return { page };
};
