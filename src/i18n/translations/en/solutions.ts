// Solutions page content
export const seo = {
  title: 'Smart solutions for taxi auditing and administration | Taxi Administration',
  description: 'Complete payroll management, driver reports and audit documentation for taxi companies. See demo and get started free.',
};

export const header = {
  breadcrumbs: [
    { name: 'Home', url: 'https://taxiadministration.se/en/' },
    { name: 'Solutions', url: 'https://taxiadministration.se/en/solutions/' },
  ],
  title: 'Smart solutions for taxi auditing and administration',
  subtitle: 'Complete payroll management, driver reports and audit documentation for taxi companies. Developed for Swedish conditions and tax rules.',
};

export const demo = {
  title: 'See how it works',
  videoId: 'Iu3Cqa4QBL8',
  description: 'Taxi Administration Demo - Payroll management for taxi companies',
};

export const solutions = [
  {
    title: 'Payroll Management',
    description: 'Automate the entire payroll process from revenue compilation to ready salary specifications. The system calculates commission, VAT, employer contributions and vacation pay according to your terms.',
    icon: 'ph:currency-dollar-duotone',
    image: 'salaryReport',
    features: [
      'Automatic calculation of commission and splitting',
      'Support for different salary models',
      'Calculation of employer contributions',
      'Vacation pay according to law',
    ],
  },
  {
    title: 'Driver Reports',
    description: 'Get full overview of each driver\'s trips and revenue. Detailed reports showing trips per platform, total revenue and calculated salary.',
    icon: 'ph:users-duotone',
    image: 'driverReport',
    features: [
      'Individual driver reports',
      'Summary per platform',
      'History and trends',
      'Export to PDF or Excel',
    ],
  },
  {
    title: 'Flexible Configuration',
    description: 'Customize the system according to your company\'s specific needs. Set up splitting models, commission structures and calculation rules that match your agreements.',
    icon: 'ph:layout-duotone',
    image: 'configuration',
    features: [
      'Customizable splitting models',
      'Custom commission structures',
      'Management of multiple platforms',
      'Custom calculation rules',
    ],
  },
];

export const platforms = {
  title: 'Support for all major platforms',
  subtitle: 'Easily import data from the platforms you use today.',
  list: [
    'Bolt',
    'Uber',
    'SumUp',
    'More soon',
  ],
};

export const video = {
  videoSchema: {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    'name': 'Taxi Administration Demo - Payroll management for taxi companies',
    'description': 'See how taxiadministration.se automates payroll calculations for taxi companies. Support for Bolt, Uber, SumUp and more.',
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
