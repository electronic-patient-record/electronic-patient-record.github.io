// Checks on the built site. Run after `vite build` (see `pnpm test`).
import { existsSync, lstatSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';

const walk = (dir) =>
	readdirSync(dir).flatMap((name) => {
		const path = join(dir, name);
		return statSync(path).isDirectory() ? walk(path) : [path];
	});

const problems = [];
const files = walk('build');
const pages = files.filter((f) => f.endsWith('.html'));
const titles = new Map();

const NOTICE = /not for clinical use|nid at ddefnydd clinigol|不得用于临床|ليس للاستخدام السريري|नैदानिक उपयोग के लिए नहीं/i;
for (const page of pages) {
	const html = readFileSync(page, 'utf8');
	if (!NOTICE.test(html)) problems.push(`${page}: no clinical-use notice`);
	if (!/id="content"/.test(html)) problems.push(`${page}: no #content target for the skip link`);
	const title = html.match(/<title>(.*?)<\/title>/)?.[1];
	if (!title) problems.push(`${page}: no title`);
	const locale = page.match(/locales\/([^/]+)/)?.[1];
	const copy = locale === 'cy-001' || locale === 'zh-001' || locale === 'hi-001';
	if (title && !copy && !page.includes('compare/') && page !== 'build/index.html') {
		if (titles.has(title) && !/en-001/.test(titles.get(title))) problems.push(`${page}: same title as ${titles.get(title)}`);
		titles.set(title, page);
	}
	if (html.includes('%epr.lang%') || html.includes('%epr.dir%')) problems.push(`${page}: language placeholder left in`);
	if (!html.includes(`dir="${page.includes('/ar-') ? 'rtl' : 'ltr'}"`)) problems.push(`${page}: wrong text direction`);
	if (locale && !html.match(new RegExp(`<html lang="${locale}"`, 'i'))) problems.push(`${page}: wrong html lang`);
	for (const [, href] of html.matchAll(/href="(\/[^"#?]*)/g)) {
		if (href.startsWith('//')) continue;
		const target = join('build', decodeURI(href));
		const found = href.endsWith('/') ? existsSync(join(target, 'index.html')) : existsSync(target);
		if (!found) problems.push(`${page}: broken internal link ${href}`);
	}
}

// The locales rule: rules/locales-for-global-sharing-with-svelte in sixarm/ai-agents-tips.
const hex = /^[0-9a-f]{32}\n$/;
const ids = new Map();
for (const code of readdirSync('locales')) {
	const dirs = walk(join('locales', code)).filter((f) => f.endsWith('index.md')).map(dirname);
	for (const dir of dirs) {
		const id = join(dir, '.locale-peer-id');
		if (!existsSync(id)) { problems.push(`${dir}: no .locale-peer-id`); continue; }
		const value = readFileSync(id, 'utf8');
		if (!hex.test(value)) problems.push(`${id}: not 32 lowercase hex and a newline`);
		if (!lstatSync(join(dir, 'README.md')).isSymbolicLink()) problems.push(`${dir}: README.md is not a symlink`);
		ids.set(value, (ids.get(value) ?? 0) + 1);
	}
	if (!existsSync(join('build/locales', code, 'sitemap.xml'))) problems.push(`${code}: no sitemap.xml`);
}
const total = readdirSync('locales').length;
for (const [id, count] of ids) if (count !== total) problems.push(`peer ${id.trim()}: in ${count} of ${total} locales`);
for (const [a, b] of [['cy-gb', 'cy-001'], ['zh-cn', 'zh-001'], ['hi-in', 'hi-001']]) {
	for (const file of walk(join('locales', a)).filter((f) => f.endsWith('index.md'))) {
		const other = file.replace(a, b);
		if (!existsSync(other) || readFileSync(file, 'utf8') !== readFileSync(other, 'utf8')) problems.push(`${other}: differs from ${file}`);
	}
}
if (!existsSync('build/sitemap.xml')) problems.push('no sitemap.xml');
for (const vendor of ['epic', 'nervecentre']) {
	if (!existsSync(`build/compare/${vendor}/index.html`)) problems.push(`no /compare/${vendor}/`);
}

for (const file of files) {
	if (/national-health-service|government-digital-service|united-states-web-design/.test(file)) {
		problems.push(`${file}: a government or NHS theme must not ship`);
	}
}

// The clinical-use notice must reach the browser in every locale.
const scripts = files.filter((f) => f.endsWith('.js')).map((f) => readFileSync(f, 'utf8')).join('\n');
for (const notice of ['Nid at ddefnydd clinigol', '不得用于临床', 'ليس للاستخدام السريري', 'नैदानिक उपयोग के लिए नहीं']) {
	if (!scripts.includes(notice)) problems.push(`the notice "${notice}" is not in the built scripts`);
}

if (problems.length) {
	console.error(problems.join('\n'));
	process.exit(1);
}
console.log(`site ok: ${pages.length} pages, ${files.length} files`);
