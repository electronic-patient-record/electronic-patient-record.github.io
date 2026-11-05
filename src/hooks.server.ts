import type { Handle } from '@sveltejs/kit/hooks';
import { DEFAULT_LOCALE, htmlDir, htmlLang } from '#lib/locales.ts';

// A prerendered page carries its own language, so it is right without JavaScript.
export const handle: Handle = ({ event, resolve }) => {
	const locale = event.params.locale ?? DEFAULT_LOCALE;
	return resolve(event, {
		transformPageChunk: ({ html }) =>
			html.replace('%epr.lang%', htmlLang(locale)).replace('%epr.dir%', htmlDir(locale))
	});
};
