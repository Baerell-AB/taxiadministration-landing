// Pricing page content
export const seo = {
  title: 'Xisaabaadka taksiiga oo la awoodi karo - bilow bilaash | Taxi Administration',
  description: 'Qiimaha dabacsanaa shirkadaha taksiiga. Bilow bilaash 1 darawal. Kor u qaado markaad korto. Waqti xidhan ma jiro.',
};

export const header = {
  breadcrumbs: [
    { name: 'Guriga', url: 'https://taxiadministration.se/so/' },
    { name: 'Qiimaha', url: 'https://taxiadministration.se/so/pricing/' },
  ],
  title: 'Xisaabaadka taksiiga oo la awoodi karo - bilow bilaash',
  subtitle: 'Qiimaha dabacsan oo la socda shirkaddaada. Waqti xidhan ma jiro, lacago qarsoon ma jiraan.',
};

export const tiers = [
  {
    name: 'Bilaash',
    price: '0',
    period: 'SEK/bil',
    description: 'Fiican bilowga iyo tijaabinta nidaamka.',
    features: [
      '1 darawal',
      'Xisaabinta mushahaarada aasaasiga ah',
      'Warbixinnada PDF',
      'Taageero email',
      'Soo deji dhammaan goobaha',
    ],
    cta: {
      text: 'Bilow bilaash',
      href: 'https://app.taxiadministration.se/login',
    },
    highlighted: false,
  },
  {
    name: 'Caadiga ah',
    price: '499',
    period: 'SEK/bil',
    description: 'Shirkadaha yaryar iyo kuwa sii kordhaya.',
    features: [
      'Ilaa 10 darawalada',
      'Dhammaan astaanta xisaabinta',
      'Warbixinnada horumarsan',
      'Soo saarid Excel',
      'Taageero mudnaanta ah',
      'Qaababka mushahaarada la habeyn karo',
    ],
    cta: {
      text: 'Tijaabi bilaash',
      href: 'https://app.taxiadministration.se/login',
    },
    highlighted: true,
  },
];

export const enterprise = {
  name: 'Ganacsi',
  label: 'Nala soo xiriir',
  description: 'Shirkadaha waaweyn oo leh 10+ darawalada iyo baahiyaha gaarka ah.',
  features: [
    'Darawalada xaddidan',
    'Qof qoonsi ah',
    'Isku dhafka gaarka ah',
    'Warbixinnada la habeeyay',
    'Caawimaadda bilaabista',
    'Dammaanad SLA',
  ],
  cta: {
    text: 'Nala soo xiriir iibka',
    href: '/so/contact',
  },
};

export const pricingFaqs = [
  {
    question: 'Ma isbeddeli karaa qorshooyinka waqti kasta?',
    answer: 'Haa, waxaad kor u qaadi kartaa ama hoos u dhigi kartaa qorshahaa waqti kasta. Isbeddelku wuxuu dhaqan galayaa isla markiiba oo waxaad bixinaysaa oo kaliya waxaad isticmaasho.',
  },
  {
    question: 'Ma jiraa waqti xidhan?',
    answer: 'Maya, waqti xidhan ma jiro. Waxaad joojin kartaa rukunkaaga waqti kasta oo sii wadi kartaa isticmaalka adeegga ilaa dhammaadka mudadaada lacag bixinta.',
  },
  {
    question: 'Sidee qorshaha bilaashka ah u shaqeeyaa?',
    answer: 'Qorshaha bilaashka ahi wuxuu ku siinayaa astaanta aasaasiga ah 1 darawal. Waxaad isticmaali kartaa muddo kasta oo aan lacag lahayn.',
  },
  {
    question: 'Maxaa dhacaya haddii aan leeyahay in ka badan 10 darawalada?',
    answer: 'Shirkadaha leh in ka badan 10 darawalada, waxaan bixinaa qorshaha Ganacsiga oo leh qiime la habeeyay. Nala soo xiriir qiimeynta.',
  },
];

export const pricingFaqSection = {
  title: 'Su\'aalaha inta badan la isweydiiyo qiimaha',
};
