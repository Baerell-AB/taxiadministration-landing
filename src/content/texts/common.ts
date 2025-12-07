// Common text elements used across multiple pages
export const navigation = {
  items: [
    { name: 'Funktioner', href: '/#funktioner' },
    { name: 'Lösningar', href: '/losningar' },
    { name: 'Priser', href: '/priser' },
    { name: 'Blogg', href: '/blog' },
    { name: 'Om oss', href: '/om-oss' },
  ],
  login: 'Logga in',
  tryFree: 'Testa gratis',
  appUrl: 'https://app.taxiadministration.se/login',
};

export const footer = {
  description: 'Automatisera dina löneberäkningar med precision för taxi- och transportföretag. Utvecklat specifikt för svenska skatteregler och regelverket.',
  copyright: '© {year} taxiadministration.se. Alla rättigheter förbehållna.',
  developedBy: 'Utvecklat av Baerell AB | Stockholm, Sverige',
  linkedIn: 'https://www.linkedin.com/company/baerell/',
  
  product: {
    title: 'Produkten',
    links: [
      { name: 'Funktioner', href: '/#funktioner' },
      { name: 'Priser', href: '/priser' },
      { name: 'Blogg', href: '/blog' },
      { name: 'Partners', href: '/partners' },
    ],
  },
  
  support: {
    title: 'Support',
    links: [
      { name: 'Vanliga frågor', href: '/#faq' },
      { name: 'Kontakt', href: '/kontakt' },
    ],
  },
  
  legal: {
    title: 'Juridiskt',
    links: [
      { name: 'Integritetspolicy', href: 'https://app.taxiadministration.se/privacy' },
      { name: 'Användarvillkor', href: 'https://app.taxiadministration.se/terms' },
    ],
  },
};

export const cta = {
  title: 'Redo att komma igång?',
  subtitle: 'Gå med moderna taxi- och transportföretag som redan sparat hundratals timmar med automatiserad lönehantering.',
  benefits: [
    'Ingen installation',
    'Ingen bindningstid',
    'Support på svenska',
  ],
  buttons: {
    primary: {
      text: 'Starta Nu - Helt Gratis',
      href: 'https://app.taxiadministration.se/login',
    },
    secondary: {
      text: 'Kontakta oss',
      href: '/kontakt',
    },
  },
};
