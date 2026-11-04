# Site specification

A static site, deployed to GitHub Pages by GitHub Actions on each push to `main`.

- **Stack:** SvelteKit 3, Svelte 5, `@sveltejs/adapter-static`, Vite, TypeScript, pnpm, Node 26.
- **Design:** `@lilydesignsystem/svelte-headless` for structure, `svelte-theme-picker` and `svelte-text-size-picker` for
  preferences, `@lilydesignsystem/themes` for styling. `PickerBar` is not used: it requires search and a locale list, and this
  site has neither.
- **Pages:** `/` overview, `/status/` built and not built, `/research/` links to research, `/about/` how the project works.
- **Themes:** `src/lib/themes.ts` lists them; `scripts/copy-themes.mjs` copies them from the package into `static/themes`
  at build time (the copies are not committed). `src/app.html` applies a stored choice before first paint.
- **Checks:** `pnpm run check`, and `scripts/check-site.mjs` on the build: the clinical-use notice on every page, a skip-link
  target, unique titles, internal links, no government or NHS theme.
- **Not tested:** no browser test suite, no automated accessibility run, no check that links to the source repository resolve (one was run by hand at first publish).
