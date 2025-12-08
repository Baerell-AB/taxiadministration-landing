// Solutions page content
export const seo = {
  title: 'Xalalka caqliga leh xisaabaadka taksiiga iyo maamulka | Taxi Administration',
  description: 'Maamulka mushahaarada oo buuxa, warbixinnada darawalada iyo dukumeentiga kormeerka shirkadaha taksiiga. Arag bandhiga oo bilow bilaash.',
};

export const header = {
  breadcrumbs: [
    { name: 'Guriga', url: 'https://taxiadministration.se/so/' },
    { name: 'Xalalka', url: 'https://taxiadministration.se/so/solutions/' },
  ],
  title: 'Xalalka caqliga leh xisaabaadka taksiiga iyo maamulka',
  subtitle: 'Maamulka mushahaarada oo buuxa, warbixinnada darawalada iyo dukumeentiga kormeerka shirkadaha taksiiga. Loo sameeyay xaaladaha Iswiidhan iyo xeerarka canshuuraha.',
};

export const demo = {
  title: 'Arag sida uu u shaqeeyo',
  videoId: 'Iu3Cqa4QBL8',
  description: 'Bandhiga Taxi Administration - Maamulka mushahaarada shirkadaha taksiiga',
};

export const solutions = [
  {
    title: 'Maamulka Mushahaarada',
    description: 'Ku automatigoow dhammaan habka mushahaarada laga bilaabo ururinta dakhliga ilaa qeexitaanka mushahaarada diyaarka ah. Nidaamku wuxuu xisaabiyaa gunnada, VAT, wax ku biirka shaqaalaha iyo mushahaarada fasaxa sida heshiiskaaga.',
    icon: 'ph:currency-dollar-duotone',
    image: 'salaryReport',
    features: [
      'Xisaabinta automatikoobsan ee gunnada iyo qaybinta',
      'Taageero qaabab kala duwan oo mushahaarka ah',
      'Xisaabinta wax ku biirka shaqaalaha',
      'Mushahaarada fasaxa sida sharciga',
    ],
  },
  {
    title: 'Warbixinnada Darawalada',
    description: 'Hel aragti buuxa oo ku saabsan safarrada iyo dakhliga darawal kasta. Warbixinno faahfaahsan oo muujinaya safarro goob kasta, wadarta dakhliga iyo mushahaarada la xisaabiyay.',
    icon: 'ph:users-duotone',
    image: 'driverReport',
    features: [
      'Warbixinnada darawalada keliya',
      'Soo koobid goob kasta',
      'Taariikhda iyo isbedelka',
      'Soo saar PDF ama Excel',
    ],
  },
  {
    title: 'Habaynta Dabacsanaa',
    description: 'U habeey nidaamka sida baahiyaha gaarka ah ee shirkaddaada. Dejiso qaababka qaybinta, qaab dhismeedka gunnada iyo xeerarka xisaabinta ee u dhigma heshiisyadeeda.',
    icon: 'ph:layout-duotone',
    image: 'configuration',
    features: [
      'Qaababka qaybinta oo la habeyn karo',
      'Qaab dhismeedka gunnada gaarka ah',
      'Maamulka goobaha badan',
      'Xeerarka xisaabinta gaarka ah',
    ],
  },
];

export const platforms = {
  title: 'Taageero dhammaan goobaha waaweyn',
  subtitle: 'Si fudud u soo deji xogta goobaha aad maanta isticmaasho.',
  list: [
    'Bolt',
    'Uber',
    'SumUp',
    'Kuwo badan oo dhawaan',
  ],
};

export const video = {
  videoSchema: {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    'name': 'Bandhiga Taxi Administration - Maamulka mushahaarada shirkadaha taksiiga',
    'description': 'Arag sida taxiadministration.se uu u automatigoobayo xisaabaadka mushahaarada shirkadaha taksiiga. Taageero Bolt, Uber, SumUp iyo kuwo kale.',
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
