import { error } from '@sveltejs/kit';
import { byName, find } from '#lib/server/content.ts';
import { LOCALES } from '#lib/locales.ts';

export const entries = () => LOCALES.map((locale) => ({ locale }));

export const load = ({ params }) => {
	const page = find(params.locale, '');
	if (!page) error(404);
	return {
		page,
		tutorialHref: byName(params.locale, 'tutorial').href,
		featuresHref: byName(params.locale, 'features').href
	};
};
