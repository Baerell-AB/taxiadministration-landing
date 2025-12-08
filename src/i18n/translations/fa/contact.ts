// Contact page content
export const seo = {
  title: 'تماس با ما - پشتیبانی شرکت‌های تاکسی | Taxi Administration',
  description: 'با taxiadministration.se برای سوالات مربوط به مدیریت حقوق شرکت‌های تاکسی تماس بگیرید. ما در عرض 24 ساعت پاسخ می‌دهیم.',
};

export const header = {
  breadcrumbs: [
    { name: 'خانه', url: 'https://taxiadministration.se/fa/' },
    { name: 'تماس با ما', url: 'https://taxiadministration.se/fa/contact/' },
  ],
  title: 'تماس با ما',
  subtitle: 'سوالی درباره سیستم ما دارید؟ ما به شما کمک خواهیم کرد. فرم را پر کنید و ما در عرض 24 ساعت با شما تماس خواهیم گرفت.',
};

export const contactInfo = {
  title: 'با ما در ارتباط باشید',
  company: {
    icon: 'ph:buildings-duotone',
    label: 'شرکت',
    value: 'Baerell AB',
  },
  location: {
    icon: 'ph:globe-duotone',
    label: 'موقعیت',
    value: 'استکهلم، سوئد',
  },
  responseTime: {
    icon: 'ph:clock-duotone',
    label: 'زمان پاسخگویی',
    value: 'در عرض 24 ساعت',
  },
  linkedInUrl: 'https://www.linkedin.com/company/baerell/',
  linkedInText: 'ما را در LinkedIn دنبال کنید',
  linkedInIcon: 'ph:linkedin-logo-duotone',
};

export const form = {
  title: 'ارسال پیام',
  action: 'https://formspree.io/f/xldwykeg',
  fields: {
    name: {
      label: 'نام',
      type: 'text',
      required: true,
    },
    email: {
      label: 'ایمیل',
      type: 'email',
      required: true,
    },
    company: {
      label: 'شرکت / سرویس تاکسی',
      type: 'text',
      required: false,
    },
    subject: {
      label: 'موضوع',
      type: 'select',
      required: true,
      options: [
        { value: '', label: 'یک گزینه انتخاب کنید', disabled: true },
        { value: 'سوال درباره سیستم', label: 'سوال درباره سیستم' },
        { value: 'درخواست قیمت', label: 'درخواست قیمت' },
        { value: 'پشتیبانی فنی', label: 'پشتیبانی فنی' },
        { value: 'سایر', label: 'سایر' },
      ],
    },
    message: {
      label: 'پیام',
      type: 'textarea',
      required: true,
      rows: 5,
    },
  },
  submitButton: 'ارسال پیام',
};

export const faqTeaser = {
  title: 'سوالات متداول',
  subtitle: 'بخش سوالات متداول ما را برای پاسخ‌های سریع به سوالات رایج بررسی کنید.',
  buttonText: 'مشاهده سوالات متداول',
  buttonLink: '/fa/#faq',
};
