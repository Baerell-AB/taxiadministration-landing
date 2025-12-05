// Pricing page content
export const seo = {
  title: 'Prisvärd taxi bokföring - börja gratis | Taxi Administration',
  description: 'Flexibla priser för taxiåkerier. Börja gratis med 1 förare. Uppgradera när du växer. Ingen bindningstid.',
};

export const header = {
  breadcrumbs: [
    { name: 'Hem', url: 'https://taxiadministration.se/' },
    { name: 'Priser', url: 'https://taxiadministration.se/priser/' },
  ],
  title: 'Prisvärd taxi bokföring - börja gratis',
  subtitle: 'Flexibla priser som växer med ditt åkeri. Ingen bindningstid, inga dolda avgifter.',
};

export const tiers = [
  {
    name: 'Gratis',
    price: '0',
    period: 'kr/mån',
    description: 'Perfekt för att komma igång och testa systemet.',
    features: [
      '1 förare',
      'Grundläggande löneberäkningar',
      'PDF-rapporter',
      'E-postsupport',
      'Import från alla plattformar',
    ],
    cta: {
      text: 'Kom igång gratis',
      href: 'https://app.taxiadministration.se',
    },
    highlighted: false,
  },
  {
    name: 'Standard',
    price: '499',
    period: 'kr/mån',
    description: 'För småföretag och växande åkerier.',
    features: [
      'Upp till 10 förare',
      'Alla beräkningsfunktioner',
      'Avancerade rapporter',
      'Excel-export',
      'Prioriterad support',
      'Anpassningsbara lönemodeller',
    ],
    cta: {
      text: 'Testa gratis',
      href: 'https://app.taxiadministration.se',
    },
    highlighted: true,
  },
];

export const enterprise = {
  name: 'Enterprise',
  label: 'Kontakta oss',
  description: 'För större åkerier med 10+ förare och särskilda behov.',
  features: [
    'Obegränsat antal förare',
    'Dedikerad kontaktperson',
    'Anpassad integration',
    'Skräddarsydda rapporter',
    'Onboarding-hjälp',
    'SLA-garanti',
  ],
  cta: {
    text: 'Kontakta försäljning',
    href: '/kontakt',
  },
};

export const pricingFaqs = [
  {
    question: 'Kan jag byta plan när som helst?',
    answer: 'Ja, du kan uppgradera eller nedgradera din plan när som helst. Ändringen träder i kraft direkt och du betalar bara för det du använder.',
  },
  {
    question: 'Finns det någon bindningstid?',
    answer: 'Nej, det finns ingen bindningstid. Du kan säga upp din prenumeration när som helst och fortsätta använda tjänsten fram till slutet av din faktureringsperiod.',
  },
  {
    question: 'Hur fungerar den kostnadsfria planen?',
    answer: 'Den kostnadsfria planen ger dig tillgång till grundläggande funktioner för 1 förare. Du kan använda den så länge du vill utan kostnad.',
  },
  {
    question: 'Vad händer om jag har fler än 10 förare?',
    answer: 'För åkerier med fler än 10 förare erbjuder vi Enterprise-planen med skräddarsydd prissättning. Kontakta oss för en offert.',
  },
];

export const pricingFaqSection = {
  title: 'Vanliga frågor om priser',
};
