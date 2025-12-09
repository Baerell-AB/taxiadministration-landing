import { defaultLang, languages, ui, type Language } from './config';
import * as svTranslations from './translations/sv';
import * as enTranslations from './translations/en';
import * as arTranslations from './translations/ar';
import * as soTranslations from './translations/so';
import * as faTranslations from './translations/fa';

const translationsMap = {
  sv: svTranslations,
  en: enTranslations,
  ar: arTranslations,
  so: soTranslations,
  fa: faTranslations,
} as const;

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

// Get translations for a specific language (synchronous)
export function getTranslations(lang: Language) {
  return translationsMap[lang];
}
