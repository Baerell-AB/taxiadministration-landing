// Contact page content
export const seo = {
  title: 'Nala soo xiriir - Taageero shirkadaha taksiiga | Taxi Administration',
  description: 'Nala soo xiriir taxiadministration.se su\'aalo ku saabsan maamulka mushahaarada shirkadaha taksiiga. Waxaan ka jawaabna 24 saacadood gudahood.',
};

export const header = {
  breadcrumbs: [
    { name: 'Guriga', url: 'https://taxiadministration.se/so/' },
    { name: 'Nala Soo Xiriir', url: 'https://taxiadministration.se/so/contact/' },
  ],
  title: 'Nala soo xiriir',
  subtitle: 'Ma leedahay su\'aalo ku saabsan nidaamkeena? Waan ku caawini doonaa. Buuxi foomka oo annaga ayaa kugu soo laaban doona 24 saacadood gudahood.',
};

export const contactInfo = {
  title: 'Na hel',
  company: {
    icon: 'ph:buildings-duotone',
    label: 'Shirkadda',
    value: 'Baerell AB',
  },
  location: {
    icon: 'ph:globe-duotone',
    label: 'Goobta',
    value: 'Stockholm, Sweden',
  },
  responseTime: {
    icon: 'ph:clock-duotone',
    label: 'Waqtiga jawaabta',
    value: '24 saacadood gudahood',
  },
  linkedInUrl: 'https://www.linkedin.com/company/baerell/',
  linkedInText: 'Nagu soo raac LinkedIn',
  linkedInIcon: 'ph:linkedin-logo-duotone',
};

export const form = {
  title: 'Dir fariinta',
  action: 'https://formspree.io/f/xldwykeg',
  fields: {
    name: {
      label: 'Magaca',
      type: 'text',
      required: true,
    },
    email: {
      label: 'Email',
      type: 'email',
      required: true,
    },
    company: {
      label: 'Shirkadda / Adeegga Taksiiga',
      type: 'text',
      required: false,
    },
    subject: {
      label: 'Mawduuca',
      type: 'select',
      required: true,
      options: [
        { value: '', label: 'Dooro ikhtiyaar', disabled: true },
        { value: 'Su\'aal ku saabsan nidaamka', label: 'Su\'aal ku saabsan nidaamka' },
        { value: 'Weydiinta qiimaha', label: 'Weydiinta qiimaha' },
        { value: 'Taageero farsamada', label: 'Taageero farsamada' },
        { value: 'Kale', label: 'Kale' },
      ],
    },
    message: {
      label: 'Fariinta',
      type: 'textarea',
      required: true,
      rows: 5,
    },
  },
  submitButton: 'Dir fariinta',
};

export const faqTeaser = {
  title: 'Su\'aalaha inta badan la isweydiiyo',
  subtitle: 'Hubi FAQ-geena jawaabaha dhakhsada ah ee su\'aalaha caanka ah.',
  buttonText: 'Tag FAQ',
  buttonLink: '/so/#faq',
};
