import { error } from '@sveltejs/kit';
import { find, pages } from '#lib/server/content.ts';
import { DEFAULT_LOCALE } from '#lib/locales.ts';

// English comparison pages are at /compare/<vendor>/.
export const entries = () =>
	pages
		.filter((p) => p.slug.includes('/') && p.locale !== DEFAULT_LOCALE)
		.map((p) => {
			const [slug, vendor] = p.slug.split('/');
			return { locale: p.locale, slug, vendor };
		});

export const load = ({ params }) => {
	const page = find(params.locale, `${params.slug}/${params.vendor}`);
	if (!page) error(404);
	return { page };
};
