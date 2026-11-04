// Copy the Lily themes into static/themes, leaving out government and NHS themes: this is an independent
// project that is not for clinical use, and it must not look endorsed. Must match src/lib/themes.ts.
import { cpSync, mkdirSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { createRequire } from 'node:module';

const EXCLUDED = /^united-(kingdom|states)-/;
const require = createRequire(import.meta.url);
const dist = join(dirname(require.resolve('@lilydesignsystem/themes/package.json')), 'dist');
const files = readdirSync(dist).filter((f) => f.endsWith('.css') && !EXCLUDED.test(f));
mkdirSync('static/themes', { recursive: true });
for (const file of files) cpSync(join(dist, file), join('static/themes', file));
console.log(`copied ${files.length} themes`);
