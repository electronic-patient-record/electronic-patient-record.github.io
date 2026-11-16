# Site specification

A static site, deployed to GitHub Pages by GitHub Actions on each push to `main`.

- **Stack:** SvelteKit 3, Svelte 5, `@sveltejs/adapter-static`, Vite, TypeScript, pnpm, Node 26.
- **Design:** `@lilydesignsystem/svelte-headless` for structure, `@lilydesignsystem/svelte-picker-bar` for the header (link,
  search, theme, locale, time zone, text size, share), `@lilydesignsystem/themes` for styling.
- **Content:** Markdown in `locales/`, read at build time by `src/lib/server/content.ts`. See [`locale/index.md`](locale/index.md).
- **Pages:** home, benefits, features, compare and a page per compared system, tutorial, status, research, about, privacy, search, 404.
  A `### ` run in a page becomes a row of cards (`src/lib/Sections.svelte`).
- **Search:** client-side over the text of this site, per locale. It does not search the specification, and it needs JavaScript.
- **Time zone:** the picker is present, but no page shows a time that depends on it.
- **Themes:** `PickerBar`'s default list less government and NHS themes (`src/lib/themes.ts`). `scripts/copy-themes.mjs` copies
  them into `static/themes` at build time (the copies are not committed). The theme picker is `svelte-theme-picker` 0.4
  (forced under the bar by a pnpm override, as the bar asks for 0.3): *Follow this device* (`system`) is the first choice
  and the default, and `src/app.html` applies a stored choice, or the device's light or dark, before first paint.
- **What the site stores** (the privacy page, linked from every footer, lists it): `epr-theme` and `epr-text-size` in
  localStorage, written only when the visitor changes the setting. The theme picker can use localStorage or a cookie
  (`storageKey`, `cookieName`); the cookie is off, as a static site has no server to read it. The text-size picker writes
  its default on first load when given a key, so the layout keeps the size itself and skips the first `onChange`.
  Language and locale are the address; the time zone, search and share keep nothing. A change to what is stored changes
  the privacy page in every language in the same commit.
- **Checks:** `pnpm run check`, and `scripts/check-site.mjs` on the build: the clinical-use notice in the page's language, a
  skip-link target, titles, `<html lang>`, internal links, no government or NHS theme, and the locale rules.
- **Not tested:** no browser test suite (checked by hand in Chromium at 1280 and 320 px), no automated accessibility run, no check that links to the source repository resolve.
