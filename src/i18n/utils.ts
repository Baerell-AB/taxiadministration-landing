import { defaultLang, languages, ui, type Language } from './config';

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

// Get translations for a specific language
export async function getTranslations(lang: Language) {
  const translations = await import(`./translations/${lang}/index.ts`);
  return translations;
}
