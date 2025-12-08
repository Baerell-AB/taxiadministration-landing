// Solutions page content
export const seo = {
  title: 'حلول ذكية لمراجعة وإدارة سيارات الأجرة | إدارة سيارات الأجرة',
  description: 'إدارة كاملة للرواتب، وتقارير السائقين ووثائق المراجعة لشركات سيارات الأجرة. شاهد العرض التوضيحي وابدأ مجاناً.',
};

export const header = {
  breadcrumbs: [
    { name: 'الرئيسية', url: 'https://taxiadministration.se/ar/' },
    { name: 'الحلول', url: 'https://taxiadministration.se/ar/solutions/' },
  ],
  title: 'حلول ذكية لمراجعة وإدارة سيارات الأجرة',
  subtitle: 'إدارة كاملة للرواتب، وتقارير السائقين ووثائق المراجعة لشركات سيارات الأجرة. تم تطويره للظروف السويدية والقواعد الضريبية.',
};

export const demo = {
  title: 'شاهد كيف يعمل',
  videoId: 'Iu3Cqa4QBL8',
  description: 'عرض توضيحي لإدارة سيارات الأجرة - إدارة الرواتب لشركات سيارات الأجرة',
};

export const solutions = [
  {
    title: 'إدارة الرواتب',
    description: 'أتمتة عملية الرواتب بأكملها من تجميع الإيرادات إلى مواصفات الرواتب الجاهزة. يحسب النظام العمولة وضريبة القيمة المضافة ومساهمات صاحب العمل وأجر الإجازة وفقاً لشروطك.',
    icon: 'ph:currency-dollar-duotone',
    image: 'salaryReport',
    features: [
      'حساب تلقائي للعمولة والتقسيم',
      'دعم نماذج الرواتب المختلفة',
      'حساب مساهمات صاحب العمل',
      'أجر الإجازة وفقاً للقانون',
    ],
  },
  {
    title: 'تقارير السائقين',
    description: 'احصل على نظرة عامة كاملة على رحلات وإيرادات كل سائق. تقارير مفصلة تُظهر الرحلات لكل منصة، وإجمالي الإيرادات والراتب المحسوب.',
    icon: 'ph:users-duotone',
    image: 'driverReport',
    features: [
      'تقارير السائقين الفردية',
      'ملخص لكل منصة',
      'التاريخ والاتجاهات',
      'تصدير إلى PDF أو Excel',
    ],
  },
  {
    title: 'تكوين مرن',
    description: 'قم بتخصيص النظام وفقاً لاحتياجات شركتك المحددة. قم بإعداد نماذج التقسيم، وهياكل العمولة وقواعد الحساب التي تطابق اتفاقياتك.',
    icon: 'ph:layout-duotone',
    image: 'configuration',
    features: [
      'نماذج تقسيم قابلة للتخصيص',
      'هياكل عمولة مخصصة',
      'إدارة منصات متعددة',
      'قواعد حساب مخصصة',
    ],
  },
];

export const platforms = {
  title: 'دعم لجميع المنصات الرئيسية',
  subtitle: 'استيراد البيانات بسهولة من المنصات التي تستخدمها اليوم.',
  list: [
    'Bolt',
    'Uber',
    'SumUp',
    'المزيد قريباً',
  ],
};

export const video = {
  videoSchema: {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    'name': 'عرض توضيحي لإدارة سيارات الأجرة - إدارة الرواتب لشركات سيارات الأجرة',
    'description': 'شاهد كيف يقوم taxiadministration.se بأتمتة حسابات الرواتب لشركات سيارات الأجرة. دعم لـ Bolt و Uber و SumUp والمزيد.',
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
