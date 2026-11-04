import { pages } from '#lib/server/content.ts';
import { sitemap } from '#lib/server/sitemap.ts';

export const prerender = true;
export const GET = () => sitemap(['/', ...pages.filter((p) => p.name !== 'search').map((p) => p.href)]);
