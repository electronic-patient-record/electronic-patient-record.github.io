import { children, find } from '#lib/server/content.ts';
import { DEFAULT_LOCALE } from '#lib/locales.ts';

export const load = () => ({
	page: find(DEFAULT_LOCALE, 'compare'),
	children: children(DEFAULT_LOCALE, 'compare')
});
