// Checks on the built site. Run after `vite build` (see `pnpm test`).
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const walk = (dir) =>
	readdirSync(dir).flatMap((name) => {
		const path = join(dir, name);
		return statSync(path).isDirectory() ? walk(path) : [path];
	});

const problems = [];
const files = walk('build');
const pages = files.filter((f) => f.endsWith('.html'));
const titles = new Map();

for (const page of pages) {
	const html = readFileSync(page, 'utf8');
	if (!/not for clinical use/i.test(html)) problems.push(`${page}: no "not for clinical use" notice`);
	if (!/id="content"/.test(html)) problems.push(`${page}: no #content target for the skip link`);
	const title = html.match(/<title>(.*?)<\/title>/)?.[1];
	if (!title) problems.push(`${page}: no title`);
	else if (titles.has(title)) problems.push(`${page}: same title as ${titles.get(title)}`);
	else titles.set(title, page);
	for (const [, href] of html.matchAll(/href="(\/[^"#?]*)/g)) {
		if (href.startsWith('//')) continue;
		const target = join('build', href);
		const found = href.endsWith('/') ? existsSync(join(target, 'index.html')) : existsSync(target);
		if (!found) problems.push(`${page}: broken internal link ${href}`);
	}
}

for (const file of files) {
	if (/national-health-service|government-digital-service|united-states-web-design/.test(file)) {
		problems.push(`${file}: a government or NHS theme must not ship`);
	}
}

if (problems.length) {
	console.error(problems.join('\n'));
	process.exit(1);
}
console.log(`site ok: ${pages.length} pages, ${files.length} files`);
