# Site specification

A static site, deployed to GitHub Pages by GitHub Actions on each push to `main`.

- **Stack:** SvelteKit 3, Svelte 5, `@sveltejs/adapter-static`, Vite, TypeScript, pnpm, Node 26.
- **Design:** `@lilydesignsystem/svelte-headless` for structure, `@lilydesignsystem/svelte-picker-bar` for the header (link,
  search, theme, locale, time zone, text size, share), `@lilydesignsystem/themes` for styling.
- **Pages:** `/` overview, `/status/` built and not built, `/research/` links to research, `/about/` how the project works,
  `/search/` results, `/404.html`.
- **Search:** client-side, in the browser: `/search/?terms` matches page titles and summaries and research page titles
  (`src/lib/site.ts`, `src/lib/research.ts`). It does not search the text of the specification, and it needs JavaScript.
- **Locale and time zone:** the pickers are present but do little yet. The site is English only, so the locale picker has one
  entry, and no page shows a time that depends on the zone. Add a locale only with real content, marked machine-written until
  a speaker reviews it.
- **Themes:** `PickerBar`'s default list less government and NHS themes (`src/lib/themes.ts`). `scripts/copy-themes.mjs` copies
  them into `static/themes` at build time (the copies are not committed). `src/app.html` applies a stored choice before first paint.
- **Checks:** `pnpm run check`, and `scripts/check-site.mjs` on the build: the clinical-use notice on every page, a skip-link
  target, unique titles, internal links, no government or NHS theme.
- **Not tested:** no browser test suite, no automated accessibility run, no check that links to the source repository resolve (one was run by hand at first publish).
