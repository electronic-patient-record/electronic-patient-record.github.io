// Reads locales/<code>/ at build time. A page in another locale is found by `.locale-peer-id`, never by slug:
// slugs are per-locale and in the locale's own script, so nothing here may assume ASCII.
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { marked } from 'marked';
import { DEFAULT_LOCALE, LOCALES } from '#lib/locales.ts';

export type Page = {
	locale: string;
	slug: string;
	name: string;
	peerId: string;
	href: string;
	title: string;
	subtitle: string;
	intro: string;
	html: string;
	text: string;
};

const ROOT = 'locales';
const plain = (html: string) => html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

// English comparison pages live at /compare/, the addresses people share.
function hrefFor(locale: string, slug: string, name: string): string {
	if (locale === DEFAULT_LOCALE && name === 'compare') return '/compare/';
	if (locale === DEFAULT_LOCALE && name.startsWith('vendor:')) return `/compare/${slug.split('/')[1]}/`;
	return slug ? `/locales/${locale}/${slug}/` : `/locales/${locale}/`;
}

function read(locale: string, dir: string, slug: string, name: string): Page {
	const base = `/locales/${locale}`;
	const source = readFileSync(join(dir, 'index.md'), 'utf8').replaceAll('](@/', `](${base}/`);
	const peerId = readFileSync(join(dir, '.locale-peer-id'), 'utf8').trim();
	const [head, ...rest] = source.split(/\n(?=## )/);
	const lines = head.split(/\n\n+/).map((b: string) => b.trim()).filter(Boolean);
	const title = lines[0].replace(/^#\s+/, '');
	const subtitle = lines[1] ?? '';
	const intro = lines.slice(2).join('\n\n');
	const html = marked.parse(rest.join('\n'), { async: false });
	return {
		locale,
		slug,
		name,
		peerId,
		href: hrefFor(locale, slug, name),
		title,
		subtitle: plain(marked.parseInline(subtitle, { async: false })),
		intro: marked.parse(intro, { async: false }),
		html,
		text: plain(html)
	};
}

function load(): Page[] {
	const pages: Page[] = [];
	for (const locale of LOCALES) {
		const dir = join(ROOT, locale);
		pages.push(read(locale, dir, '', 'home'));
		const topics = join(dir, 'topics');
		for (const slug of readdirSync(topics)) {
			const topic = join(topics, slug);
			if (!existsSync(join(topic, '.topic'))) throw new Error(`${topic}: no .topic file`);
			pages.push(read(locale, topic, slug, readFileSync(join(topic, '.topic'), 'utf8').trim()));
			for (const entry of readdirSync(topic, { withFileTypes: true })) {
				if (!entry.isDirectory()) continue;
				const child = join(topic, entry.name);
				const name = readFileSync(join(child, '.topic'), 'utf8').trim();
				pages.push(read(locale, child, `${slug}/${entry.name}`, name));
			}
		}
	}
	return pages;
}

export const pages = load();

export function find(locale: string, slug: string): Page | undefined {
	return pages.find((p) => p.locale === locale && p.slug === slug);
}

export const forLocale = (locale: string) => pages.filter((p) => p.locale === locale);

/** This page's address in every locale. */
export function peers(page: Page): Record<string, string> {
	return Object.fromEntries(pages.filter((p) => p.peerId === page.peerId).map((p) => [p.locale, p.href]));
}

/** The pages under a topic, such as the systems under Compare. */
export function children(locale: string, slug: string) {
	return forLocale(locale)
		.filter((p) => p.slug.startsWith(`${slug}/`))
		.map(({ title, subtitle, href }) => ({ title, subtitle, href }))
		.sort((a, b) => a.title.localeCompare(b.title));
}

export function byName(locale: string, name: string): Page {
	const page = pages.find((p) => p.locale === locale && p.name === name);
	if (!page) throw new Error(`${locale}: no topic ${name}`);
	return page;
}

export { DEFAULT_LOCALE };
