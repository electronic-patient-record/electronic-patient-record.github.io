import type { Handle } from '@sveltejs/kit/hooks';
import { DEFAULT_LOCALE, htmlLang } from '#lib/locales.ts';

// A prerendered page carries its own language, so it is right without JavaScript.
export const handle: Handle = ({ event, resolve }) => {
	const lang = htmlLang(event.params.locale ?? DEFAULT_LOCALE);
	return resolve(event, { transformPageChunk: ({ html }) => html.replace('%epr.lang%', lang) });
};
