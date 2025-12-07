// Contact page content
export const seo = {
  title: 'Contact us - Support for taxi companies | Taxi Administration',
  description: 'Contact taxiadministration.se for questions about payroll management for taxi companies. We respond within 24 hours.',
};

export const header = {
  breadcrumbs: [
    { name: 'Home', url: 'https://taxiadministration.se/en/' },
    { name: 'Contact', url: 'https://taxiadministration.se/en/contact/' },
  ],
  title: 'Contact us',
  subtitle: 'Do you have questions about our system? We are happy to help. Fill in the form and we will get back to you within 24 hours.',
};

export const contactInfo = {
  title: 'Find us',
  company: {
    icon: 'ph:buildings-duotone',
    label: 'Company',
    value: 'Baerell AB',
  },
  location: {
    icon: 'ph:globe-duotone',
    label: 'Location',
    value: 'Stockholm, Sweden',
  },
  responseTime: {
    icon: 'ph:clock-duotone',
    label: 'Response time',
    value: 'Within 24 hours',
  },
  linkedInUrl: 'https://www.linkedin.com/company/baerell/',
  linkedInText: 'Follow us on LinkedIn',
  linkedInIcon: 'ph:linkedin-logo-duotone',
};

export const form = {
  title: 'Send a message',
  action: 'https://formspree.io/f/xldwykeg',
  fields: {
    name: {
      label: 'Name',
      type: 'text',
      required: true,
    },
    email: {
      label: 'Email',
      type: 'email',
      required: true,
    },
    company: {
      label: 'Company / Taxi service',
      type: 'text',
      required: false,
    },
    subject: {
      label: 'Subject',
      type: 'select',
      required: true,
      options: [
        { value: '', label: 'Choose an option', disabled: true },
        { value: 'Question about the system', label: 'Question about the system' },
        { value: 'Price inquiry', label: 'Price inquiry' },
        { value: 'Technical support', label: 'Technical support' },
        { value: 'Other', label: 'Other' },
      ],
    },
    message: {
      label: 'Message',
      type: 'textarea',
      required: true,
      rows: 5,
    },
  },
  submitButton: 'Send message',
};

export const faqTeaser = {
  title: 'Frequently asked questions',
  subtitle: 'Check out our FAQ for quick answers to the most common questions.',
  buttonText: 'Go to FAQ',
  buttonLink: '/en/#faq',
};
