# AGENTS.md

The source for <https://electronic-patient-record.github.io>, a small static SvelteKit 3 site about the
[electronic-patient-record](https://github.com/electronic-patient-record/electronic-patient-record) project.
`CLAUDE.md` imports this file. The stack and layout are in [`spec/index.md`](spec/index.md).

```sh
pnpm install
pnpm run dev      # local server
pnpm run check    # svelte-check
pnpm test         # build, then scripts/check-site.mjs
```

Rules:

- **Not for clinical use, on every page.** The banner is in the layout, and `scripts/check-site.mjs` fails without it.
- **Never fabricate.** No metric, demo URL, customer, approval or claim that is not true of the source repository. Say what
  is not built. No compliance claim of any kind.
- **Link out, do not duplicate.** The source repository is the truth; this site points at it.
- **Facts are a dated snapshot.** The status pages in `locales/` are copied from `spec/14-implementation-status.md`, with the date.
- **No government or NHS theme or branding.** The project is independent and must not look endorsed. The check fails if one ships. `PickerBar`'s default theme list is filtered for this.
- **Full PickerBar.** The header uses `@lilydesignsystem/svelte-picker-bar` with every picker. Each needs something real behind it: search lands on `/search/`.
- **Promote honestly.** Benefits are goals, written as "designed to". Nothing says the software is safe, proven or better. Features separate built from designed.
- **Other EPRs:** notes, never rankings. No page says a product is better or worse. Facts come from `spec/<vendor>/index.md` in the source repository, attributed. "Not found in public sources" is never evidence that a product lacks something, so never call it a strength of this project. Leave out ownership and staffing news.
- **Lily:** use `@lilydesignsystem/*` components; `src/lib/site.css` is for layout; colour comes from theme tokens, except the clinical-use notice, which is fixed so it stays legible.
- **Locales:** follow [`spec/locale/index.md`](spec/locale/index.md). Content is Markdown in `locales/`. A text change goes in all three languages, then `cy-gb` is copied to `cy-001` and `zh-cn` to `zh-001`. Never claim a translation is reviewed. Work serially, not with subagents.
- Use Svelte's `style:` directive rather than inline `style=""`. Use pnpm.
