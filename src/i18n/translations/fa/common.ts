// Common text elements used across multiple pages
export const navigation = {
  items: [
    { name: 'ویژگی‌ها', href: '/fa#features' },
    { name: 'راه‌حل‌ها', href: '/fa/solutions' },
    { name: 'قیمت‌گذاری', href: '/fa/pricing' },
    { name: 'وبلاگ', href: '/fa/blog' },
    { name: 'درباره ما', href: '/fa/about' },
  ],
  login: 'ورود',
  tryFree: 'امتحان رایگان',
  appUrl: 'https://app.taxiadministration.se/login',
};

export const footer = {
  description: 'مدیریت حقوق و دستمزد خودکار برای شرکت‌های تاکسی و حمل‌ونقل. طراحی شده مخصوص مقررات مالیاتی سوئد.',
  copyright: '© {year} taxiadministration.se. کلیه حقوق محفوظ است.',
  developedBy: 'توسعه داده شده توسط Baerell AB | استکهلم، سوئد',
  linkedIn: 'https://www.linkedin.com/company/baerell/',

  product: {
    title: 'محصول',
    links: [
      { name: 'ویژگی‌ها', href: '/fa#features' },
      { name: 'قیمت‌گذاری', href: '/fa/pricing' },
      { name: 'وبلاگ', href: '/fa/blog' },
      { name: 'شرکا', href: '/fa/partners' },
    ],
  },

  support: {
    title: 'پشتیبانی',
    links: [
      { name: 'سوالات متداول', href: '/fa#faq' },
      { name: 'تماس با ما', href: '/fa/contact' },
    ],
  },

  legal: {
    title: 'قوانین',
    links: [
      { name: 'سیاست حفظ حریم خصوصی', href: 'https://app.taxiadministration.se/privacy' },
      { name: 'شرایط استفاده از خدمات', href: 'https://app.taxiadministration.se/terms' },
    ],
  },
};

export const cta = {
  title: 'آماده شروع هستید؟',
  subtitle: 'به شرکت‌های مدرن تاکسی و حمل‌ونقل بپیوندید که صدها ساعت در مدیریت حقوق و دستمزد خودکار صرفه‌جویی کرده‌اند.',
  benefits: [
    'نیاز به کارت اعتباری ندارد',
    'بدون تعهد',
    'پشتیبانی به زبان سوئدی',
  ],
  buttons: {
    primary: {
      text: 'شروع کنید - کاملاً رایگان',
      href: 'https://app.taxiadministration.se/login',
    },
    secondary: {
      text: 'تماس با ما',
      href: '/fa/contact',
    },
  },
};
