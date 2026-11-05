# Locales

Follows `rules/locales-for-global-sharing-with-svelte` in the sixarm ai-agents-tips repository.

| Code | Language | Status |
|---|---|---|
| `en-001` | English (World), the source text, in British spelling | Source |
| `cy-gb` | Welsh | **Machine-written, not reviewed by a speaker** |
| `cy-001` | Welsh | Copy of `cy-gb` |
| `zh-cn` | Mandarin, written in Simplified Chinese | **Machine-written, not reviewed by a speaker** |
| `zh-001` | Mandarin, written in Simplified Chinese | Copy of `zh-cn` |
| `ar-001` | Arabic, Modern Standard, right to left | **Machine-written, not reviewed by a speaker** |
| `hi-in` | Hindi | **Machine-written, not reviewed by a speaker** |
| `hi-001` | Hindi | Copy of `hi-in` |

Each machine-written locale says so in its own language, in the banner on every page, and says the English is authoritative.
Remove that only with a named speaker's review. Never claim a translation is reviewed.

## Structure

- `locales/<code>/index.md`: the home page. First the `# headline`, then the subheadline, then the introduction, then `## ` sections.
- `locales/<code>/topics/<slug>/index.md`: a topic. Slugs are per locale, in the locale's own script. Comparison pages are
  `topics/<compare-slug>/<vendor>/`; a brand name is a proper noun and stays as it is.
- Beside every `index.md`: `.locale-peer-id` (32 lowercase hex and a newline, byte-identical across a topic's versions),
  `README.md` (a symlink to `index.md`), and for a topic `.topic` (its stable name for navigation).
- UI chrome is in `src/lib/i18n.ts`. The wordmark is translated. Labels are in `src/lib/locales.ts`.

In Markdown, `](@/slug/)` links within the locale. A page in another locale is found by peer id, never by slug, and nothing may
assume a slug is ASCII.

## Addresses

- `/` is the English home. `/locales/<code>/` is each locale's home, `/locales/<code>/<slug>/` a topic.
- `/<code>/` redirects to `/locales/<code>/`.
- English comparisons are at `/compare/` and `/compare/<vendor>/`. Others are at `/locales/<code>/<compare-slug>/<vendor>/`.
- `/sitemap.xml` covers the site, `/locales/<code>/sitemap.xml` each locale.

The locale picker keeps you on the same page in the other language, through peer ids. The language comes from the URL and is
set in `<html lang>` at prerender, so a page is right without JavaScript and for a crawler.

## Adding or changing content

Change the text in all of `en-001`, `cy-gb`, `zh-cn`, `ar-001` and `hi-in`, then copy `cy-gb` to `cy-001`, `zh-cn` to `zh-001` and `hi-in` to `hi-001`.
`scripts/check-site.mjs` fails on a copy that differs, a peer missing from a locale, or a bad peer id. Keep proper nouns
unconverted.

## Right to left

Arabic sets `dir="rtl"` from the locale, in the prerendered HTML and on a move between locales in the browser. Layout uses logical properties (`margin-inline`, `padding-inline`, `text-align: start`). Code blocks stay left to right.

## Not done

The rule's further locales (`en-us`, `en-gb` and others) were not asked for and are not added.
The documents the site links to in the source repository are English only.
