export const SITE_URL = 'https://electronic-patient-record.github.io';
export const REPO = 'https://github.com/electronic-patient-record/electronic-patient-record';

/** Header navigation, in order. Each name is a topic's `.topic` file. */
export const NAV = ['benefits', 'features', 'compare', 'tutorial', 'status', 'about'] as const;
export type NavName = (typeof NAV)[number];
