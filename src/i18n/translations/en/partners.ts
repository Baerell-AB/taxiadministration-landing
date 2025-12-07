// Partners page content
export const seo = {
  title: 'Partner solution for auditors and accounting firms | Taxi Administration',
  description: 'Streamline payroll management for your taxi clients. Smooth data import, ready salary documentation and new revenue stream for your firm.',
};

export const breadcrumb = [
  { name: "Home", url: "https://taxiadministration.se/en/" },
  { name: "Partners", url: "https://taxiadministration.se/en/partners/" }
];

export const hero = {
  title: {
    start: 'Partner solution for',
    highlight: 'auditors and accounting firms',
  },
  subtitle: 'Streamline payroll management for your taxi clients. Smooth data import from Bolt, Uber, SumUp and more with ready salary documentation.',
  buttons: {
    primary: {
      text: 'Contact us',
      href: '/en/contact',
    },
    secondary: {
      text: 'See all features',
      href: '/en/solutions',
    },
  },
};

export const problemSection = {
  title: 'The challenge with taxi accounting',
  subtitle: 'The taxi industry has unique requirements and challenges that require specialized knowledge.',
  problems: [
    {
      title: 'Time-consuming data collection',
      description: 'Manual collection of trip data from drivers and several different platforms takes invaluable time.',
      icon: 'ph:clock-duotone',
    },
    {
      title: 'Complex platforms',
      description: 'Bolt, Uber, SumUp and more - each platform has different formats and reports that must be consolidated.',
      icon: 'ph:globe-duotone',
    },
    {
      title: 'Risk of errors',
      description: 'Manual calculations of commission, VAT and employer contributions increase the risk of costly mistakes.',
      icon: 'ph:file-search',
    },
  ],
};

export const benefitsSection = {
  title: 'Benefits for your firm',
  subtitle: 'taxiadministration.se gives you the tools to streamline work and expand your service offering.',
  benefits: [
    {
      title: 'Save time',
      description: 'Smooth import of trip data from all platforms. Ready reports and salary documentation with minimal manual work.',
      icon: 'ph:clock-duotone',
      features: [
        'Easy data import',
        'Ready salary specifications',
        'Export to Excel and PDF'
      ]
    },
    {
      title: 'New revenue stream',
      description: 'Offer payroll management as an additional service to your taxi clients. Upselling on existing customer relationships.',
      icon: 'ph:currency-dollar-duotone',
      features: [
        'Payroll management as a service',
        'Upselling to existing clients',
        'Scalable business model'
      ]
    },
    {
      title: 'Strengthen customer relationships',
      description: 'Become a complete partner for your taxi clients. Offer more value and increase customer loyalty.',
      icon: 'ph:buildings-duotone',
      features: [
        'Complete service offering',
        'Increased customer satisfaction',
        'Stronger customer relationships'
      ]
    }
  ],
};

export const howItWorks = {
  title: 'How it works',
  subtitle: 'Get started in a few simple steps and begin streamlining payroll management for your taxi clients.',
  steps: [
    {
      number: '1',
      title: 'Register your clients\' companies',
      description: 'Easy setup for each taxi client. We help you get started with Bolt, Uber, SumUp and other platforms.'
    },
    {
      number: '2',
      title: 'Import trip data smoothly',
      description: 'Import trip data easily from all platforms. The system handles different formats and compiles everything in one place.'
    },
    {
      number: '3',
      title: 'Ready salary documentation',
      description: 'Export ready salary documentation to Excel or PDF. Calculations according to Swedish tax rules with employer contributions and vacation pay.'
    }
  ],
};

export const featuresSection = {
  title: 'Built for Swedish taxi companies',
  subtitle: 'taxiadministration.se is developed specifically for Swedish conditions with all rules and calculations built in.',
  features: [
    {
      title: 'Support for all platforms',
      description: 'Bolt, Uber, SumUp and more platforms.',
    },
    {
      title: 'Swedish tax rules',
      description: 'Automatic calculation of VAT, employer contributions and vacation pay.',
    },
    {
      title: 'Flexible salary models',
      description: 'Support for different commission structures and splitting models.',
    },
    {
      title: 'Export and reports',
      description: 'Export to Excel and PDF for further handling in your existing system.',
    },
  ],
};

export const partnerCta = {
  title: 'Become a partner today',
  description: 'Contact us to discuss how we can help you streamline payroll management for your taxi clients and create new business opportunities.',
  features: [
    'Personal onboarding',
    'Dedicated support',
    'Special pricing for partners',
  ],
  button: {
    text: 'Contact us',
    href: '/en/contact',
  },
};

export const platformsSection = {
  title: 'Support for all major platforms',
  subtitle: 'Easily import data from the platforms your clients use.',
  platforms: ['Bolt', 'Uber', 'SumUp', 'More soon'],
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "taxiadministration.se Partner Solution",
  "description": "Partner solution for auditors and accounting firms working with taxi companies. Automated payroll management and reporting.",
  "provider": {
    "@type": "Organization",
    "name": "taxiadministration.se",
    "url": "https://taxiadministration.se"
  },
  "serviceType": "Payroll management and accounting for taxi companies",
  "areaServed": {
    "@type": "Country",
    "name": "Sweden"
  }
};
