// Facts about the project. Each comes from the source repository; nothing here is an estimate.
export const SITE_URL = 'https://electronic-patient-record.github.io';
export const REPO = 'https://github.com/electronic-patient-record/electronic-patient-record';
export const blob = (path: string) => `${REPO}/blob/main/${path}`;
export const tree = (path: string) => `${REPO}/tree/main/${path}`;

export const nav = [
	{ href: '/', label: 'Home' },
	{ href: '/status/', label: 'Status' },
	{ href: '/research/', label: 'Research' },
	{ href: '/about/', label: 'About' }
];

/** Copied by hand from spec/14-implementation-status.md, generated in the source repository. */
export const snapshot = {
	date: '2026-11-04',
	commit: '6deddf5',
	facts: [
		['Service version', '0.1.0'],
		['Matcher version', '0.5.0'],
		['User interface version', '0.1.0'],
		['Database migrations', '24'],
		['Route registrations', '70'],
		['Service tests', '565, plus 159 that need a database'],
		['Matcher tests', '105'],
		['User interface unit tests', '245'],
		['User interface end-to-end tests', '89'],
		['Locales (machine-written until a speaker reviews them)', '10']
	],
	tasksDone: 52,
	tasksOpen: 312
};
