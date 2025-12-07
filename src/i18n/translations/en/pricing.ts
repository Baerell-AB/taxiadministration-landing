// Pricing page content
export const seo = {
  title: 'Affordable taxi accounting - start free | Taxi Administration',
  description: 'Flexible pricing for taxi companies. Start free with 1 driver. Upgrade as you grow. No binding period.',
};

export const header = {
  breadcrumbs: [
    { name: 'Home', url: 'https://taxiadministration.se/en/' },
    { name: 'Pricing', url: 'https://taxiadministration.se/en/pricing/' },
  ],
  title: 'Affordable taxi accounting - start free',
  subtitle: 'Flexible pricing that grows with your company. No binding period, no hidden fees.',
};

export const tiers = [
  {
    name: 'Free',
    price: '0',
    period: 'SEK/month',
    description: 'Perfect for getting started and testing the system.',
    features: [
      '1 driver',
      'Basic salary calculations',
      'PDF reports',
      'Email support',
      'Import from all platforms',
    ],
    cta: {
      text: 'Get started free',
      href: 'https://app.taxiadministration.se/login',
    },
    highlighted: false,
  },
  {
    name: 'Standard',
    price: '499',
    period: 'SEK/month',
    description: 'For small businesses and growing companies.',
    features: [
      'Up to 10 drivers',
      'All calculation features',
      'Advanced reports',
      'Excel export',
      'Priority support',
      'Customizable salary models',
    ],
    cta: {
      text: 'Try free',
      href: 'https://app.taxiadministration.se/login',
    },
    highlighted: true,
  },
];

export const enterprise = {
  name: 'Enterprise',
  label: 'Contact us',
  description: 'For larger companies with 10+ drivers and special needs.',
  features: [
    'Unlimited drivers',
    'Dedicated contact person',
    'Custom integration',
    'Tailored reports',
    'Onboarding assistance',
    'SLA guarantee',
  ],
  cta: {
    text: 'Contact sales',
    href: '/en/contact',
  },
};

export const pricingFaqs = [
  {
    question: 'Can I change plans at any time?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. The change takes effect immediately and you only pay for what you use.',
  },
  {
    question: 'Is there a binding period?',
    answer: 'No, there is no binding period. You can cancel your subscription at any time and continue using the service until the end of your billing period.',
  },
  {
    question: 'How does the free plan work?',
    answer: 'The free plan gives you access to basic features for 1 driver. You can use it as long as you want at no cost.',
  },
  {
    question: 'What happens if I have more than 10 drivers?',
    answer: 'For companies with more than 10 drivers, we offer the Enterprise plan with customized pricing. Contact us for a quote.',
  },
];

export const pricingFaqSection = {
  title: 'Frequently asked questions about pricing',
};
