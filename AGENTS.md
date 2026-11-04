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
- **Facts are a dated snapshot.** `src/lib/site.ts` is copied from `spec/14-implementation-status.md`; update date and commit with it.
- **No government or NHS theme or branding.** The project is independent and must not look endorsed. The check fails if one ships.
- **Other EPRs:** notes, never rankings. No page says a product is better or worse.
- **Lily:** use `@lilydesignsystem/*` components; `src/lib/site.css` is for layout; colour comes from theme tokens, except the clinical-use notice, which is fixed so it stays legible.
- **Never claim a translation is reviewed.** The site is English only for now.
- Use Svelte's `style:` directive rather than inline `style=""`. Use pnpm.
