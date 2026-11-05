// UI chrome by locale. Page content lives in locales/<code>/ as Markdown.
const en = {
	brand: 'Electronic Patient Record',
	notice: 'Pre-release software. Not for clinical use. Do not enter real patient data.',
	machineNotice: '',
	skip: 'Skip to content',
	headerLabel: 'Site header',
	footerLabel: 'Site footer',
	statusLabel: 'Status notice',
	mainNav: 'Main',
	translations: 'Translations',
	nav: {
		benefits: 'Benefits',
		features: 'Features',
		compare: 'Compare',
		tutorial: 'Tutorial',
		status: 'Status',
		research: 'Research',
		about: 'About'
	},
	cta: { start: 'View tutorial', features: 'View features', source: 'View source code' },
	pickers: {
		link: 'Pages',
		search: 'Search this site',
		searchInput: 'Search terms',
		searchSubmit: 'Search',
		theme: 'Colour theme',
		locale: 'Language',
		timeZone: 'Time zone',
		textSize: 'Text size',
		share: 'Share',
		copy: 'Copy link',
		copied: 'Copied',
		email: 'Email'
	},
	footer: {
		source: 'Source on GitHub',
		licence: 'Licence',
		independent: 'Independent project. Not affiliated with or endorsed by the NHS, any government or any EPR supplier. Not for clinical use.'
	},
	search: {
		empty: 'Use the search button in the header.',
		needsJs: 'Search needs JavaScript.',
		results: (n: number, q: string) => `${n} ${n === 1 ? 'result' : 'results'} for "${q}".`
	},
	notFound: { title: 'Page not found', home: 'Go to the home page' },
	error: { title: 'Something went wrong' }
};

type Ui = typeof en;

const cy: Ui = {
	brand: 'Cofnod Cleifion Electronig',
	notice: 'Meddalwedd cyn-ryddhau. Nid at ddefnydd clinigol. Peidiwch â rhoi data cleifion go iawn.',
	machineNotice: 'Peiriant a ysgrifennodd y cyfieithiad hwn, ac nid oes siaradwr Cymraeg wedi’i adolygu. Y fersiwn Saesneg sy’n cyfrif.',
	skip: 'Neidio i’r cynnwys',
	headerLabel: 'Pennyn y wefan',
	footerLabel: 'Troedyn y wefan',
	statusLabel: 'Hysbysiad statws',
	mainNav: 'Prif lywio',
	translations: 'Cyfieithiadau',
	nav: {
		benefits: 'Buddion',
		features: 'Nodweddion',
		compare: 'Cymharu',
		tutorial: 'Tiwtorial',
		status: 'Statws',
		research: 'Ymchwil',
		about: 'Ynghylch'
	},
	cta: { start: 'Gweld y tiwtorial', features: 'Gweld y nodweddion', source: 'Gweld y cod ffynhonnell' },
	pickers: {
		link: 'Tudalennau',
		search: 'Chwilio’r wefan hon',
		searchInput: 'Termau chwilio',
		searchSubmit: 'Chwilio',
		theme: 'Thema lliw',
		locale: 'Iaith',
		timeZone: 'Cylchfa amser',
		textSize: 'Maint y testun',
		share: 'Rhannu',
		copy: 'Copïo’r ddolen',
		copied: 'Wedi’i gopïo',
		email: 'E-bost'
	},
	footer: {
		source: 'Y cod ar GitHub',
		licence: 'Trwydded',
		independent: 'Prosiect annibynnol. Nid yw’n gysylltiedig â’r GIG, unrhyw lywodraeth nac unrhyw gyflenwr EPR, ac nid oes yr un ohonynt yn ei gymeradwyo. Nid at ddefnydd clinigol.'
	},
	search: {
		empty: 'Defnyddiwch y botwm chwilio yn y pennyn.',
		needsJs: 'Mae angen JavaScript i chwilio.',
		results: (n: number, q: string) => `${n} canlyniad ar gyfer "${q}".`
	},
	notFound: { title: 'Heb ddod o hyd i’r dudalen', home: 'Mynd i’r hafan' },
	error: { title: 'Aeth rhywbeth o’i le' }
};

const zh: Ui = {
	brand: '电子病历',
	notice: '预发布软件。不得用于临床。请勿输入真实患者数据。',
	machineNotice: '本译文由机器撰写，尚未经中文使用者审校。以英文版为准。',
	skip: '跳到正文',
	headerLabel: '网站页眉',
	footerLabel: '网站页脚',
	statusLabel: '状态通知',
	mainNav: '主导航',
	translations: '翻译',
	nav: {
		benefits: '优势',
		features: '功能',
		compare: '比较',
		tutorial: '教程',
		status: '状态',
		research: '研究',
		about: '关于'
	},
	cta: { start: '查看教程', features: '查看功能', source: '查看源代码' },
	pickers: {
		link: '页面',
		search: '搜索本站',
		searchInput: '搜索词',
		searchSubmit: '搜索',
		theme: '颜色主题',
		locale: '语言',
		timeZone: '时区',
		textSize: '文字大小',
		share: '分享',
		copy: '复制链接',
		copied: '已复制',
		email: '电子邮件'
	},
	footer: {
		source: 'GitHub 上的源代码',
		licence: '许可证',
		independent: '独立项目。与 NHS、任何政府或任何电子病历供应商均无关联，也未获其认可。不得用于临床。'
	},
	search: {
		empty: '请使用页眉中的搜索按钮。',
		needsJs: '搜索需要 JavaScript。',
		results: (n: number, q: string) => `“${q}”的结果：${n} 项。`
	},
	notFound: { title: '找不到页面', home: '前往首页' },
	error: { title: '出错了' }
};

const ar: Ui = {
	brand: 'سجل المريض الإلكتروني',
	notice: 'برنامج قبل الإصدار. ليس للاستخدام السريري. لا تُدخل بيانات مرضى حقيقية.',
	machineNotice: 'كتبت آلة هذه الترجمة، ولم يراجعها متحدث بالعربية. والنسخة الإنجليزية هي المعتمدة.',
	skip: 'انتقل إلى المحتوى',
	headerLabel: 'رأس الموقع',
	footerLabel: 'تذييل الموقع',
	statusLabel: 'إشعار الحالة',
	mainNav: 'التنقل الرئيسي',
	translations: 'الترجمات',
	nav: {
		benefits: 'المزايا',
		features: 'الخصائص',
		compare: 'المقارنة',
		tutorial: 'الدليل التعليمي',
		status: 'الحالة',
		research: 'الأبحاث',
		about: 'حول المشروع'
	},
	cta: { start: 'عرض الدليل التعليمي', features: 'عرض الخصائص', source: 'عرض الشيفرة المصدرية' },
	pickers: {
		link: 'الصفحات',
		search: 'ابحث في هذا الموقع',
		searchInput: 'كلمات البحث',
		searchSubmit: 'بحث',
		theme: 'سمة الألوان',
		locale: 'اللغة',
		timeZone: 'المنطقة الزمنية',
		textSize: 'حجم النص',
		share: 'مشاركة',
		copy: 'نسخ الرابط',
		copied: 'تم النسخ',
		email: 'البريد الإلكتروني'
	},
	footer: {
		source: 'المصدر على GitHub',
		licence: 'الترخيص',
		independent: 'مشروع مستقل. لا ينتسب إلى NHS أو أي حكومة أو أي مورّد لسجلات المرضى الإلكترونية، ولا يحظى بتأييد أي منها. ليس للاستخدام السريري.'
	},
	search: {
		empty: 'استخدم زر البحث في رأس الصفحة.',
		needsJs: 'يتطلب البحث JavaScript.',
		results: (n: number, q: string) => `نتائج "${q}": ${n}.`
	},
	notFound: { title: 'الصفحة غير موجودة', home: 'الانتقال إلى الصفحة الرئيسية' },
	error: { title: 'حدث خطأ ما' }
};

const hi: Ui = {
	brand: 'इलेक्ट्रॉनिक रोगी रिकॉर्ड',
	notice: 'रिलीज़-पूर्व सॉफ़्टवेयर। नैदानिक उपयोग के लिए नहीं। वास्तविक रोगी डेटा दर्ज न करें।',
	machineNotice: 'यह अनुवाद मशीन ने लिखा है और किसी हिन्दी वक्ता ने इसकी समीक्षा नहीं की है। अंग्रेज़ी संस्करण ही मान्य है।',
	skip: 'सामग्री पर जाएँ',
	headerLabel: 'साइट हेडर',
	footerLabel: 'साइट फ़ुटर',
	statusLabel: 'स्थिति सूचना',
	mainNav: 'मुख्य नेविगेशन',
	translations: 'अनुवाद',
	nav: {
		benefits: 'लाभ',
		features: 'सुविधाएँ',
		compare: 'तुलना',
		tutorial: 'ट्यूटोरियल',
		status: 'स्थिति',
		research: 'शोध',
		about: 'परिचय'
	},
	cta: { start: 'ट्यूटोरियल देखें', features: 'सुविधाएँ देखें', source: 'स्रोत कोड देखें' },
	pickers: {
		link: 'पृष्ठ',
		search: 'इस साइट में खोजें',
		searchInput: 'खोज शब्द',
		searchSubmit: 'खोजें',
		theme: 'रंग थीम',
		locale: 'भाषा',
		timeZone: 'समय क्षेत्र',
		textSize: 'पाठ का आकार',
		share: 'साझा करें',
		copy: 'लिंक कॉपी करें',
		copied: 'कॉपी हो गया',
		email: 'ईमेल'
	},
	footer: {
		source: 'GitHub पर स्रोत',
		licence: 'लाइसेंस',
		independent: 'स्वतंत्र परियोजना। NHS, किसी सरकार या किसी EPR आपूर्तिकर्ता से संबद्ध या उनके द्वारा समर्थित नहीं। नैदानिक उपयोग के लिए नहीं।'
	},
	search: {
		empty: 'हेडर में खोज बटन का उपयोग करें।',
		needsJs: 'खोज के लिए JavaScript आवश्यक है।',
		results: (n: number, q: string) => `"${q}" के लिए परिणाम: ${n}।`
	},
	notFound: { title: 'पृष्ठ नहीं मिला', home: 'मुखपृष्ठ पर जाएँ' },
	error: { title: 'कुछ गलत हो गया' }
};

export function ui(locale: string): Ui {
	if (locale.startsWith('cy')) return cy;
	if (locale.startsWith('zh')) return zh;
	if (locale.startsWith('ar')) return ar;
	if (locale.startsWith('hi')) return hi;
	return en;
}
