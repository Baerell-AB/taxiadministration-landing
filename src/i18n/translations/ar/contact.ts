// Contact page content
export const seo = {
  title: 'اتصل بنا - دعم لشركات سيارات الأجرة | إدارة سيارات الأجرة',
  description: 'اتصل بـ taxiadministration.se للأسئلة حول إدارة الرواتب لشركات سيارات الأجرة. نرد خلال 24 ساعة.',
};

export const header = {
  breadcrumbs: [
    { name: 'الرئيسية', url: 'https://taxiadministration.se/ar/' },
    { name: 'اتصل بنا', url: 'https://taxiadministration.se/ar/contact/' },
  ],
  title: 'اتصل بنا',
  subtitle: 'هل لديك أسئلة حول نظامنا؟ يسعدنا المساعدة. املأ النموذج وسنعود إليك خلال 24 ساعة.',
};

export const contactInfo = {
  title: 'اعثر علينا',
  company: {
    icon: 'ph:buildings-duotone',
    label: 'الشركة',
    value: 'Baerell AB',
  },
  location: {
    icon: 'ph:globe-duotone',
    label: 'الموقع',
    value: 'ستوكهولم، السويد',
  },
  responseTime: {
    icon: 'ph:clock-duotone',
    label: 'وقت الاستجابة',
    value: 'خلال 24 ساعة',
  },
  linkedInUrl: 'https://www.linkedin.com/company/baerell/',
  linkedInText: 'تابعنا على LinkedIn',
  linkedInIcon: 'ph:linkedin-logo-duotone',
};

export const form = {
  title: 'أرسل رسالة',
  action: 'https://formspree.io/f/xldwykeg',
  fields: {
    name: {
      label: 'الاسم',
      type: 'text',
      required: true,
    },
    email: {
      label: 'البريد الإلكتروني',
      type: 'email',
      required: true,
    },
    company: {
      label: 'الشركة / خدمة سيارات الأجرة',
      type: 'text',
      required: false,
    },
    subject: {
      label: 'الموضوع',
      type: 'select',
      required: true,
      options: [
        { value: '', label: 'اختر خياراً', disabled: true },
        { value: 'سؤال حول النظام', label: 'سؤال حول النظام' },
        { value: 'استفسار عن السعر', label: 'استفسار عن السعر' },
        { value: 'الدعم الفني', label: 'الدعم الفني' },
        { value: 'أخرى', label: 'أخرى' },
      ],
    },
    message: {
      label: 'الرسالة',
      type: 'textarea',
      required: true,
      rows: 5,
    },
  },
  submitButton: 'إرسال الرسالة',
};

export const faqTeaser = {
  title: 'الأسئلة الشائعة',
  subtitle: 'تحقق من الأسئلة الشائعة للحصول على إجابات سريعة على الأسئلة الأكثر شيوعاً.',
  buttonText: 'اذهب إلى الأسئلة الشائعة',
  buttonLink: '/ar/#faq',
};
