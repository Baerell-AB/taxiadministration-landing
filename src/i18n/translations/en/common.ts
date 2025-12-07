// Common text elements used across multiple pages
export const navigation = {
  items: [
    { name: 'Features', href: '/en#features' },
    { name: 'Solutions', href: '/en/solutions' },
    { name: 'Pricing', href: '/en/pricing' },
    { name: 'Blog', href: '/en/blog' },
    { name: 'About', href: '/en/about' },
  ],
  login: 'Log in',
  tryFree: 'Try for free',
  appUrl: 'https://app.taxiadministration.se/login',
};

export const footer = {
  description: 'Automate your payroll calculations with precision for taxi and transport companies. Specifically developed for Swedish tax rules and regulations.',
  copyright: '© {year} taxiadministration.se. All rights reserved.',
  developedBy: 'Developed by Baerell AB | Stockholm, Sweden',
  linkedIn: 'https://www.linkedin.com/company/baerell/',

  product: {
    title: 'Product',
    links: [
      { name: 'Features', href: '/en#features' },
      { name: 'Pricing', href: '/en/pricing' },
      { name: 'Blog', href: '/en/blog' },
      { name: 'Partners', href: '/en/partners' },
    ],
  },

  support: {
    title: 'Support',
    links: [
      { name: 'FAQ', href: '/en#faq' },
      { name: 'Contact', href: '/en/contact' },
    ],
  },

  legal: {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: 'https://app.taxiadministration.se/privacy' },
      { name: 'Terms of Service', href: 'https://app.taxiadministration.se/terms' },
    ],
  },
};

export const cta = {
  title: 'Ready to get started?',
  subtitle: 'Join modern taxi and transport companies that have already saved hundreds of hours with automated payroll management.',
  benefits: [
    'No installation required',
    'No commitment',
    'Support in Swedish',
  ],
  buttons: {
    primary: {
      text: 'Start Now - Completely Free',
      href: 'https://app.taxiadministration.se/login',
    },
    secondary: {
      text: 'Contact us',
      href: '/en/contact',
    },
  },
};
