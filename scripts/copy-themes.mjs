// Copy the themes this site offers from @lilydesignsystem/themes into static/themes.
// Government and NHS themes are deliberately not offered: this is an independent project that is
// not for clinical use, and it must not look endorsed by any health service or government.
import { cpSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const root = dirname(require.resolve('@lilydesignsystem/themes/package.json'));
const source = readFileSync('src/lib/themes.ts', 'utf8');
const themes = [...source.matchAll(/id: '([a-z-]+)'/g)].map((m) => m[1]);
if (themes.length === 0) throw new Error('no themes found in src/lib/themes.ts');
mkdirSync('static/themes', { recursive: true });
for (const theme of themes) cpSync(join(root, 'dist', `${theme}.css`), `static/themes/${theme}.css`);
console.log(`copied ${themes.length} themes`);
