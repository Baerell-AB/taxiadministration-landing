// Solutions page content
export const seo = {
  title: 'راه‌حل‌های هوشمند حسابداری و مدیریت تاکسی | Taxi Administration',
  description: 'مدیریت کامل حقوق، گزارشات راننده و اسناد ممیزی برای شرکت‌های تاکسی. نسخه نمایشی را ببینید و رایگان شروع کنید.',
};

export const header = {
  breadcrumbs: [
    { name: 'خانه', url: 'https://taxiadministration.se/fa/' },
    { name: 'راه‌حل‌ها', url: 'https://taxiadministration.se/fa/solutions/' },
  ],
  title: 'راه‌حل‌های هوشمند حسابداری و مدیریت تاکسی',
  subtitle: 'مدیریت کامل حقوق، گزارشات راننده و اسناد ممیزی برای شرکت‌های تاکسی. طراحی شده برای شرایط سوئد و مقررات مالیاتی.',
};

export const demo = {
  title: 'ببینید چگونه کار می‌کند',
  videoId: 'Iu3Cqa4QBL8',
  description: 'نسخه نمایشی Taxi Administration - مدیریت حقوق شرکت‌های تاکسی',
};

export const solutions = [
  {
    title: 'مدیریت حقوق و دستمزد',
    description: 'کل فرآیند حقوق را از جمع‌آوری درآمد تا مشخصات حقوق آماده خودکار کنید. سیستم کمیسیون، مالیات بر ارزش افزوده، مشارکت کارفرما و حقوق مرخصی را براساس قرارداد شما محاسبه می‌کند.',
    icon: 'ph:currency-dollar-duotone',
    image: 'salaryReport',
    features: [
      'محاسبه خودکار کمیسیون و تقسیم',
      'پشتیبانی از مدل‌های مختلف حقوق',
      'محاسبه مشارکت کارفرما',
      'حقوق مرخصی قانونی',
    ],
  },
  {
    title: 'گزارشات راننده',
    description: 'دید کامل از سفرها و درآمد هر راننده را دریافت کنید. گزارشات تفصیلی که سفرهای هر پلتفرم، کل درآمد و حقوق محاسبه شده را نشان می‌دهد.',
    icon: 'ph:users-duotone',
    image: 'driverReport',
    features: [
      'گزارشات تک راننده',
      'خلاصه هر پلتفرم',
      'تاریخچه و روندها',
      'خروجی PDF یا Excel',
    ],
  },
  {
    title: 'پیکربندی انعطاف‌پذیر',
    description: 'سیستم را مطابق نیازهای خاص شرکت خود تنظیم کنید. مدل‌های تقسیم، ساختار کمیسیون و قوانین محاسبه را متناسب با قراردادهای خود تنظیم کنید.',
    icon: 'ph:layout-duotone',
    image: 'configuration',
    features: [
      'مدل‌های تقسیم قابل تنظیم',
      'ساختار کمیسیون سفارشی',
      'مدیریت چند پلتفرم',
      'قوانین محاسبه سفارشی',
    ],
  },
];

export const platforms = {
  title: 'پشتیبانی از تمام پلتفرم‌های اصلی',
  subtitle: 'به راحتی داده‌ها را از پلتفرم‌هایی که امروز استفاده می‌کنید وارد کنید.',
  list: [
    'Bolt',
    'Uber',
    'SumUp',
    'پلتفرم‌های بیشتر به زودی',
  ],
};

export const video = {
  videoSchema: {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    'name': 'نسخه نمایشی Taxi Administration - مدیریت حقوق شرکت‌های تاکسی',
    'description': 'ببینید چگونه taxiadministration.se مدیریت حقوق شرکت‌های تاکسی را خودکار می‌کند. پشتیبانی از Bolt، Uber، SumUp و دیگر پلتفرم‌ها.',
    'thumbnailUrl': 'https://img.youtube.com/vi/Iu3Cqa4QBL8/maxresdefault.jpg',
    'uploadDate': '2024-01-01',
    'contentUrl': 'https://www.youtube.com/watch?v=Iu3Cqa4QBL8',
    'embedUrl': 'https://www.youtube.com/embed/Iu3Cqa4QBL8',
    'duration': 'PT3M',
    'publisher': {
      '@type': 'Organization',
      'name': 'Taxi Administration',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://taxiadministration.se/favicon.png',
      },
    },
  },
};
