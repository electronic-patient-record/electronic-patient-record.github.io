import { forLocale } from '#lib/server/content.ts';
import { sitemap } from '#lib/server/sitemap.ts';
import { LOCALES } from '#lib/locales.ts';

export const prerender = true;
export const entries = () => LOCALES.map((locale) => ({ locale }));
export const GET = ({ params }) =>
	sitemap(forLocale(params.locale).filter((p) => p.name !== 'search').map((p) => p.href));
