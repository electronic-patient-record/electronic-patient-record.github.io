// The locales. Rule: rules/locales-for-global-sharing-with-svelte in sixarm/ai-agents-tips.
// `cy-001` is a copy of `cy-gb` and `zh-001` a copy of `zh-cn`; scripts/check-site.mjs fails if they differ.
export const DEFAULT_LOCALE = 'en-001';
export const LOCALES = ['en-001', 'cy-gb', 'cy-001', 'zh-cn', 'zh-001'];

/** Each label is in its own language. Mandarin's written form here is Simplified Chinese. */
export const LOCALE_LABELS: Record<string, string> = {
	'en-001': 'English (World)',
	'cy-gb': 'Cymraeg (Prydain Fawr)',
	'cy-001': 'Cymraeg (Byd)',
	'zh-cn': '普通话（中国）',
	'zh-001': '普通话（世界）'
};

/** The hero's "Translations:" list: the *-001 locales by endonym. */
export const TRANSLATIONS = [
	{ code: 'cy-001', name: 'Cymraeg' },
	{ code: 'en-001', name: 'English' },
	{ code: 'zh-001', name: '普通话' }
];

/** The language tag for `<html lang>`. */
export function htmlLang(locale: string): string {
	const [language, region] = locale.split('-');
	return region && /^[a-z]{2}$/.test(region) ? `${language}-${region.toUpperCase()}` : locale;
}
