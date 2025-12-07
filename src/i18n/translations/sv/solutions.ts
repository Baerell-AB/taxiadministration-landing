// Solutions page content
export const seo = {
  title: 'Smarta lösningar för taxi revision och administration | Taxi Administration',
  description: 'Komplett lönehantering, förarrapporter och revisionsunderlag för taxiåkerier. Se demo och kom igång gratis.',
};

export const header = {
  breadcrumbs: [
    { name: 'Hem', url: 'https://taxiadministration.se/' },
    { name: 'Lösningar', url: 'https://taxiadministration.se/losningar/' },
  ],
  title: 'Smarta lösningar för taxi revision och administration',
  subtitle: 'Komplett lönehantering, förarrapporter och revisionsunderlag för taxiåkerier. Utvecklat för svenska förhållanden och skatteregler.',
};

export const demo = {
  title: 'Se hur det fungerar',
  videoId: 'Iu3Cqa4QBL8',
  description: 'Taxi Administration Demo - Lönehantering för taxiåkerier',
};

export const solutions = [
  {
    title: 'Lönehantering',
    description: 'Automatisera hela löneprocessen från intäktssammanställning till färdiga lönespecifikationer. Systemet beräknar provision, moms, arbetsgivaravgifter och semesterersättning enligt dina villkor.',
    icon: 'ph:currency-dollar-duotone',
    image: 'salaryReport',
    features: [
      'Automatisk beräkning av provision och delning',
      'Stöd för olika lönemodeller',
      'Beräkning av arbetsgivaravgifter',
      'Semesterersättning enligt lag',
    ],
  },
  {
    title: 'Förarrapporter',
    description: 'Få full överblick över varje förares körningar och intäkter. Detaljerade rapporter som visar körningar per plattform, totala intäkter och beräknad lön.',
    icon: 'ph:users-duotone',
    image: 'driverReport',
    features: [
      'Individuella förarrapporter',
      'Sammanställning per plattform',
      'Historik och trender',
      'Exportera till PDF eller Excel',
    ],
  },
  {
    title: 'Flexibel Konfiguration',
    description: 'Anpassa systemet efter ditt åkeris specifika behov. Ställ in delningsmodeller, provisionsstrukturer och beräkningsregler som matchar era avtal.',
    icon: 'ph:layout-duotone',
    image: 'configuration',
    features: [
      'Anpassningsbara delningsmodeller',
      'Egna provisionsstrukturer',
      'Hantering av flera plattformar',
      'Egna beräkningsregler',
    ],
  },
];

export const platforms = {
  title: 'Stöd för alla stora plattformar',
  subtitle: 'Importera enkelt data från de plattformer du använder idag.',
  list: [
    'Bolt',
    'Uber',
    'SumUp',
    'Fler snart',
  ],
};

export const video = {
  videoSchema: {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    'name': 'Taxi Administration Demo - Lönehantering för taxiåkerier',
    'description': 'Se hur taxiadministration.se automatiserar löneberäkningar för taxiåkerier. Stöd för Bolt, Uber, SumUp och fler.',
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
