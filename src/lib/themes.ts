import { DEFAULT_THEMES } from '@lilydesignsystem/svelte-picker-bar';

// Must match EXCLUDED in scripts/copy-themes.mjs. Government and NHS themes are left out: this is an
// independent project that is not for clinical use, and it must not look endorsed by a health service.
const EXCLUDED = /^united-(kingdom|states)-/;

export const themes = DEFAULT_THEMES.filter((slug) => !EXCLUDED.test(slug));
