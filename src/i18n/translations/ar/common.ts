// Common text elements used across multiple pages
export const navigation = {
  items: [
    { name: 'الميزات', href: '/ar#features' },
    { name: 'الحلول', href: '/ar/solutions' },
    { name: 'الأسعار', href: '/ar/pricing' },
    { name: 'المدونة', href: '/ar/blog' },
    { name: 'من نحن', href: '/ar/about' },
  ],
  login: 'تسجيل الدخول',
  tryFree: 'جرب مجاناً',
  appUrl: 'https://app.taxiadministration.se/login',
};

export const footer = {
  description: 'أتمتة حسابات الرواتب بدقة لشركات سيارات الأجرة والنقل. تم تطويره خصيصاً للقواعد الضريبية السويدية واللوائح.',
  copyright: '© {year} taxiadministration.se. جميع الحقوق محفوظة.',
  developedBy: 'طوّرت بواسطة Baerell AB | ستوكهولم، السويد',
  linkedIn: 'https://www.linkedin.com/company/baerell/',

  product: {
    title: 'المنتج',
    links: [
      { name: 'الميزات', href: '/ar#features' },
      { name: 'الأسعار', href: '/ar/pricing' },
      { name: 'المدونة', href: '/ar/blog' },
      { name: 'الشركاء', href: '/ar/partners' },
    ],
  },

  support: {
    title: 'الدعم',
    links: [
      { name: 'الأسئلة الشائعة', href: '/ar#faq' },
      { name: 'اتصل بنا', href: '/ar/contact' },
    ],
  },

  legal: {
    title: 'قانوني',
    links: [
      { name: 'سياسة الخصوصية', href: 'https://app.taxiadministration.se/privacy' },
      { name: 'شروط الخدمة', href: 'https://app.taxiadministration.se/terms' },
    ],
  },
};

export const cta = {
  title: 'هل أنت مستعد للبدء؟',
  subtitle: 'انضم إلى شركات سيارات الأجرة والنقل الحديثة التي وفرت بالفعل مئات الساعات من خلال إدارة الرواتب الآلية.',
  benefits: [
    'لا يتطلب التثبيت',
    'بدون التزام',
    'دعم باللغة السويدية',
  ],
  buttons: {
    primary: {
      text: 'ابدأ الآن - مجاناً تماماً',
      href: 'https://app.taxiadministration.se/login',
    },
    secondary: {
      text: 'اتصل بنا',
      href: '/ar/contact',
    },
  },
};
