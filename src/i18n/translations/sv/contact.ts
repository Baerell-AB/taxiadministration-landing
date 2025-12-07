// Contact page content
export const seo = {
  title: 'Kontakta oss - Support för taxiåkerier | Taxi Administration',
  description: 'Kontakta taxiadministration.se för frågor om lönehantering för taxiåkerier. Vi svarar inom 24 timmar.',
};

export const header = {
  breadcrumbs: [
    { name: 'Hem', url: 'https://taxiadministration.se/' },
    { name: 'Kontakt', url: 'https://taxiadministration.se/kontakt/' },
  ],
  title: 'Kontakta oss',
  subtitle: 'Har du frågor om vårt system? Vi hjälper dig gärna. Fyll i formuläret så återkommer vi inom 24 timmar.',
};

export const contactInfo = {
  title: 'Hitta oss',
  company: {
    icon: 'ph:buildings-duotone',
    label: 'Företag',
    value: 'Baerell AB',
  },
  location: {
    icon: 'ph:globe-duotone',
    label: 'Plats',
    value: 'Stockholm, Sverige',
  },
  responseTime: {
    icon: 'ph:clock-duotone',
    label: 'Svarstid',
    value: 'Inom 24 timmar',
  },
  linkedInUrl: 'https://www.linkedin.com/company/baerell/',
  linkedInText: 'Följ oss på LinkedIn',
  linkedInIcon: 'ph:linkedin-logo-duotone',
};

export const form = {
  title: 'Skicka ett meddelande',
  action: 'https://formspree.io/f/xldwykeg',
  fields: {
    name: {
      label: 'Namn',
      type: 'text',
      required: true,
    },
    email: {
      label: 'E-post',
      type: 'email',
      required: true,
    },
    company: {
      label: 'Företag / Åkeri',
      type: 'text',
      required: false,
    },
    subject: {
      label: 'Ämne',
      type: 'select',
      required: true,
      options: [
        { value: '', label: 'Välj ett alternativ', disabled: true },
        { value: 'Fråga om systemet', label: 'Fråga om systemet' },
        { value: 'Prisförfrågan', label: 'Prisförfrågan' },
        { value: 'Teknisk support', label: 'Teknisk support' },
        { value: 'Övrigt', label: 'Övrigt' },
      ],
    },
    message: {
      label: 'Meddelande',
      type: 'textarea',
      required: true,
      rows: 5,
    },
  },
  submitButton: 'Skicka meddelande',
};

export const faqTeaser = {
  title: 'Vanliga frågor',
  subtitle: 'Kolla in vår FAQ för snabba svar på de vanligaste frågorna.',
  buttonText: 'Till vanliga frågor',
  buttonLink: '/#faq',
};
