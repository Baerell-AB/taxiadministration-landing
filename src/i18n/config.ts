export const languages = {
  sv: 'Svenska',
  en: 'English',
  ar: 'العربية',
};

export const defaultLang = 'sv';

export type Language = keyof typeof languages;

// UI strings for common elements that are not in content files
export const ui = {
  sv: {
    'nav.skipToContent': 'Hoppa till innehåll',
  },
  en: {
    'nav.skipToContent': 'Skip to content',
  },
  ar: {
    'nav.skipToContent': 'تخطى إلى المحتوى',
  },
} as const;
