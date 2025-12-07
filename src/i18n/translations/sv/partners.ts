// Partners page content
export const seo = {
  title: 'Partnerlösning för revisorer och bokföringsbyråer | Taxi Administration',
  description: 'Effektivisera lönehanteringen för dina taxikunder. Smidig dataimport, färdiga löneunderlag och ny intäktskälla för din byrå.',
};

export const breadcrumb = [
  { name: "Hem", url: "https://taxiadministration.se/" },
  { name: "Partners", url: "https://taxiadministration.se/partners/" }
];

export const hero = {
  title: {
    start: 'Partnerlösning för',
    highlight: 'revisorer och bokföringsbyråer',
  },
  subtitle: 'Effektivisera lönehanteringen för dina taxikunder. Smidig dataimport från Bolt, Uber, SumUp och fler med färdiga löneunderlag.',
  buttons: {
    primary: {
      text: 'Kontakta oss',
      href: '/kontakt',
    },
    secondary: {
      text: 'Se alla funktioner',
      href: '/losningar',
    },
  },
};

export const problemSection = {
  title: 'Utmaningen med taxi bokföring',
  subtitle: 'Taxibranschen har unika krav och utmaningar som kräver specialiserad kunskap.',
  problems: [
    {
      title: 'Tidskrävande datainsamling',
      description: 'Manuell insamling av kördata från förare och flera olika plattformar tar ovärderlig tid.',
      icon: 'ph:clock-duotone',
    },
    {
      title: 'Komplexa plattformar',
      description: 'Bolt, Uber, SumUp och fler - varje plattform har olika format och rapporter som måste konsolideras.',
      icon: 'ph:globe-duotone',
    },
    {
      title: 'Risk för fel',
      description: 'Manuella beräkningar av provision, moms och arbetsgivaravgifter ökar risken för kostsamma misstag.',
      icon: 'ph:file-search',
    },
  ],
};

export const benefitsSection = {
  title: 'Fördelar för din byrå',
  subtitle: 'taxiadministration.se ger dig verktygen för att effektivisera arbetet och utöka ditt tjänsteutbud.',
  benefits: [
    {
      title: 'Spara tid',
      description: 'Smidig import av kördata från alla plattformar. Färdiga rapporter och löneunderlag med minimalt manuellt arbete.',
      icon: 'ph:clock-duotone',
      features: [
        'Enkel dataimport',
        'Färdiga lönespecifikationer',
        'Export till Excel och PDF'
      ]
    },
    {
      title: 'Ny intäktskälla',
      description: 'Erbjud lönehantering som tilläggstjänst till dina taxikunder. Merförsäljning på befintliga kundrelationer.',
      icon: 'ph:currency-dollar-duotone',
      features: [
        'Lönehantering som tjänst',
        'Merförsäljning till befintliga kunder',
        'Skalbar affärsmodell'
      ]
    },
    {
      title: 'Stärk kundrelationer',
      description: 'Bli en komplett partner för dina taxikunder. Erbjud mer värde och öka kundlojaliteten.',
      icon: 'ph:buildings-duotone',
      features: [
        'Komplett tjänsteutbud',
        'Ökad kundnöjdhet',
        'Starkare kundrelationer'
      ]
    }
  ],
};

export const howItWorks = {
  title: 'Så fungerar det',
  subtitle: 'Kom igång på några enkla steg och börja effektivisera lönehanteringen för dina taxikunder.',
  steps: [
    {
      number: '1',
      title: 'Registrera dina kunders åkerier',
      description: 'Enkel setup för varje taxikund. Vi hjälper dig komma igång med Bolt, Uber, SumUp och andra plattformar.'
    },
    {
      number: '2',
      title: 'Importera kördata smidigt',
      description: 'Importera kördata enkelt från alla plattformar. Systemet hanterar olika format och sammanställer allt på ett ställe.'
    },
    {
      number: '3',
      title: 'Färdiga löneunderlag',
      description: 'Exportera färdiga löneunderlag till Excel eller PDF. Beräkningar enligt svenska skatteregler med arbetsgivaravgifter och semesterersättning.'
    }
  ],
};

export const featuresSection = {
  title: 'Byggt för svenska taxiföretag',
  subtitle: 'taxiadministration.se är utvecklat specifikt för svenska förhållanden med alla regler och beräkningar inbyggda.',
  features: [
    {
      title: 'Stöd för alla plattformar',
      description: 'Bolt, Uber, SumUp och fler plattformar.',
    },
    {
      title: 'Svenska skatteregler',
      description: 'Automatisk beräkning av moms, arbetsgivaravgifter och semesterersättning.',
    },
    {
      title: 'Flexibla lönemodeller',
      description: 'Stöd för olika provisionsstrukturer och delningsmodeller.',
    },
    {
      title: 'Export och rapporter',
      description: 'Exportera till Excel och PDF för vidare hantering i ditt befintliga system.',
    },
  ],
};

export const partnerCta = {
  title: 'Bli partner idag',
  description: 'Kontakta oss för att diskutera hur vi kan hjälpa dig effektivisera lönehanteringen för dina taxikunder och skapa nya affärsmöjligheter.',
  features: [
    'Personlig onboarding',
    'Dedikerad support',
    'Specialpriser för partners',
  ],
  button: {
    text: 'Kontakta oss',
    href: '/kontakt',
  },
};

export const platformsSection = {
  title: 'Stöd för alla stora plattformar',
  subtitle: 'Importera enkelt data från de plattformar dina kunder använder.',
  platforms: ['Bolt', 'Uber', 'SumUp', 'Fler snart'],
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "taxiadministration.se Partnerlösning",
  "description": "Partnerlösning för revisorer och bokföringsbyråer som arbetar med taxiföretag. Automatiserad lönehantering och rapportering.",
  "provider": {
    "@type": "Organization",
    "name": "taxiadministration.se",
    "url": "https://taxiadministration.se"
  },
  "serviceType": "Lönehantering och redovisning för taxiföretag",
  "areaServed": {
    "@type": "Country",
    "name": "Sverige"
  }
};
