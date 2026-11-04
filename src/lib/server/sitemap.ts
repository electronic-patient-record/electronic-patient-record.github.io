import { SITE_URL } from '#lib/site.ts';

export function sitemap(hrefs: string[]): Response {
	const urls = hrefs.map((href) => `\t<url><loc>${SITE_URL}${encodeURI(href)}</loc></url>`).join('\n');
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
	return new Response(xml, { headers: { 'content-type': 'application/xml' } });
}
