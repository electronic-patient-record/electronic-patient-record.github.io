import { byName, find } from '#lib/server/content.ts';
import { DEFAULT_LOCALE } from '#lib/locales.ts';

export const load = () => ({
	page: find(DEFAULT_LOCALE, ''),
	tutorialHref: byName(DEFAULT_LOCALE, 'tutorial').href,
	featuresHref: byName(DEFAULT_LOCALE, 'features').href
});
