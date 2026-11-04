# Site specification

A static site, deployed to GitHub Pages by GitHub Actions on each push to `main`.

- **Stack:** SvelteKit 3, Svelte 5, `@sveltejs/adapter-static`, Vite, TypeScript, pnpm, Node 26.
- **Design:** `@lilydesignsystem/svelte-headless` for structure, `@lilydesignsystem/svelte-picker-bar` for the header (link,
  search, theme, locale, time zone, text size, share), `@lilydesignsystem/themes` for styling.
- **Content:** Markdown in `locales/`, read at build time by `src/lib/server/content.ts`. See [`locale/index.md`](locale/index.md).
- **Pages:** home, benefits, features, compare and a page per compared system, tutorial, status, research, about, search, 404.
  A `### ` run in a page becomes a row of cards (`src/lib/Sections.svelte`).
- **Search:** client-side over the text of this site, per locale. It does not search the specification, and it needs JavaScript.
- **Time zone:** the picker is present, but no page shows a time that depends on it.
- **Themes:** `PickerBar`'s default list less government and NHS themes (`src/lib/themes.ts`). `scripts/copy-themes.mjs` copies
  them into `static/themes` at build time (the copies are not committed). `src/app.html` applies a stored choice before first paint.
- **Checks:** `pnpm run check`, and `scripts/check-site.mjs` on the build: the clinical-use notice in the page's language, a
  skip-link target, titles, `<html lang>`, internal links, no government or NHS theme, and the locale rules.
- **Not tested:** no browser test suite (checked by hand in Chromium at 1280 and 320 px), no automated accessibility run, no check that links to the source repository resolve.
