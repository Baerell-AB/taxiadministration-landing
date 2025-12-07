# Flerspråksstöd - Implementationsplan

## 📋 Översikt

Detta dokument beskriver den kompletta planen för att lägga till flerspråksstöd (i18n) på taxiadministration.se, med engelska som första extra språk. Strukturen är skalbar för att enkelt lägga till fler språk i framtiden.

## 🎯 Mål

- SEO-optimerad flerspråkig webbplats
- Separata URL:er per språk för bästa Google-indexering
- Korrekta hreflang-taggar på alla sidor
- Type-safe översättningar med TypeScript
- Enkel struktur för att lägga till fler språk

---

## ✅ IMPLEMENTATIONSCHECKLISTA

### FAS 1: Förberedelser (30 min)

#### 1.1 Skapa i18n-mappstruktur
- [ ] Skapa `src/i18n/` mapp
- [ ] Skapa `src/i18n/translations/` mapp
- [ ] Skapa `src/i18n/translations/sv/` mapp
- [ ] Skapa `src/i18n/translations/en/` mapp

#### 1.2 Skapa konfigurationsfiler
- [ ] Skapa `src/i18n/config.ts` med:
  - [ ] `languages` object (sv, en)
  - [ ] `defaultLang` konstant
  - [ ] `Language` type
  - [ ] `ui` object för UI-texter (t.ex. "Hoppa till innehåll")
- [ ] Skapa `src/i18n/utils.ts` med:
  - [ ] `getLangFromUrl()` funktion
  - [ ] `useTranslations()` funktion
  - [ ] `getTranslations()` funktion

#### 1.3 Uppdatera Astro-konfiguration
- [ ] Öppna `astro.config.mjs`
- [ ] Lägg till `i18n` object med:
  - [ ] `defaultLocale: 'sv'`
  - [ ] `locales: ['sv', 'en']`
  - [ ] `routing.prefixDefaultLocale: false`
- [ ] Uppdatera `sitemap` integration med i18n-config:
  - [ ] `i18n.defaultLocale: 'sv'`
  - [ ] `i18n.locales: { sv: 'sv-SE', en: 'en-US' }`

---

### FAS 2: Flytta befintligt innehåll till nya strukturen (15 min)

#### 2.1 Flytta befintliga översättningsfiler
- [ ] Flytta `src/content/texts/common.ts` → `src/i18n/translations/sv/common.ts`
- [ ] Flytta `src/content/texts/home.ts` → `src/i18n/translations/sv/home.ts`
- [ ] Flytta `src/content/texts/pricing.ts` → `src/i18n/translations/sv/pricing.ts`
- [ ] Flytta `src/content/texts/contact.ts` → `src/i18n/translations/sv/contact.ts`
- [ ] Flytta `src/content/texts/solutions.ts` → `src/i18n/translations/sv/solutions.ts`
- [ ] Flytta `src/content/texts/about.ts` → `src/i18n/translations/sv/about.ts`
- [ ] Flytta `src/content/texts/faq.ts` → `src/i18n/translations/sv/faq.ts`

#### 2.2 Skapa nya innehållsfiler för saknade sidor
- [ ] Skapa `src/i18n/translations/sv/partners.ts` (extrahera från partners.astro)
- [ ] Skapa `src/i18n/translations/sv/legal.ts` (integritetspolicy & användarvillkor)
- [ ] Skapa `src/i18n/translations/sv/blog.ts` (blog-specifika texter)
- [ ] Skapa `src/i18n/translations/sv/404.ts` (404-sida texter)

#### 2.3 Skapa index-fil för svenska
- [ ] Skapa `src/i18n/translations/sv/index.ts`
- [ ] Exportera alla översättningsmoduler

#### 2.4 Uppdatera imports i befintliga svenska sidor
- [ ] Uppdatera import i `src/pages/index.astro` (från `../content/texts` → `../i18n/translations/sv`)
- [ ] Uppdatera import i `src/pages/priser.astro`
- [ ] Uppdatera import i `src/pages/kontakt.astro`
- [ ] Uppdatera import i `src/pages/losningar.astro`
- [ ] Uppdatera import i `src/pages/om-oss.astro`
- [ ] Uppdatera import i `src/pages/blog.astro`
- [ ] Uppdatera import i `src/pages/blog/[slug].astro`
- [ ] Uppdatera import i `src/pages/partners.astro`
- [ ] Uppdatera import i `src/pages/integritetspolicy.astro`
- [ ] Uppdatera import i `src/pages/anvandarvillkor.astro`
- [ ] Uppdatera import i alla komponenter som använder texter (Hero, Features, FAQ, CTASection, etc.)

#### 2.5 Testa att svenska sidan fortfarande fungerar
- [ ] Kör `npm run dev`
- [ ] Besök `/` och verifiera att sidan fungerar
- [ ] Besök `/priser` och verifiera
- [ ] Besök `/kontakt` och verifiera
- [ ] Besök alla andra sidor och verifiera
- [ ] Fixa eventuella TypeScript-fel

#### 2.6 Ta bort gamla filer (när allt fungerar)
- [ ] Ta bort `src/content/texts/` mappen

---

### FAS 3: Skapa engelska översättningar (2-3 timmar)

#### 3.1 Kopiera svenska filer till engelska
- [ ] Kopiera `src/i18n/translations/sv/common.ts` → `src/i18n/translations/en/common.ts`
- [ ] Kopiera `src/i18n/translations/sv/home.ts` → `src/i18n/translations/en/home.ts`
- [ ] Kopiera `src/i18n/translations/sv/pricing.ts` → `src/i18n/translations/en/pricing.ts`
- [ ] Kopiera `src/i18n/translations/sv/contact.ts` → `src/i18n/translations/en/contact.ts`
- [ ] Kopiera `src/i18n/translations/sv/solutions.ts` → `src/i18n/translations/en/solutions.ts`
- [ ] Kopiera `src/i18n/translations/sv/about.ts` → `src/i18n/translations/en/about.ts`
- [ ] Kopiera `src/i18n/translations/sv/faq.ts` → `src/i18n/translations/en/faq.ts`
- [ ] Kopiera `src/i18n/translations/sv/partners.ts` → `src/i18n/translations/en/partners.ts`
- [ ] Kopiera `src/i18n/translations/sv/legal.ts` → `src/i18n/translations/en/legal.ts`
- [ ] Kopiera `src/i18n/translations/sv/blog.ts` → `src/i18n/translations/en/blog.ts`
- [ ] Kopiera `src/i18n/translations/sv/404.ts` → `src/i18n/translations/en/404.ts`

#### 3.2 Översätt common.ts (Navigation, Footer, CTA)
- [ ] Översätt `navigation.items[]` (Funktioner → Features, osv.)
- [ ] Översätt `navigation.login`
- [ ] Översätt `navigation.tryFree`
- [ ] Översätt `footer.description`
- [ ] Översätt `footer.copyright`
- [ ] Översätt `footer.developedBy`
- [ ] Översätt `footer.product.title` och `links`
- [ ] Översätt `footer.support.title` och `links`
- [ ] Översätt `footer.legal.title` och `links`
- [ ] Översätt `cta.title`, `subtitle`, `benefits`, `buttons`

#### 3.3 Översätt home.ts
- [ ] Översätt `seo.title`
- [ ] Översätt `seo.description`
- [ ] Översätt `hero.title` (start, highlight, end)
- [ ] Översätt `hero.subtitle`
- [ ] Översätt `hero.buttons`
- [ ] Översätt `hero.benefits`
- [ ] Översätt `hero.image.alt`
- [ ] Översätt `features[]` (title, description)
- [ ] Översätt `featuresSection.title` och `subtitle`

#### 3.4 Översätt pricing.ts
- [ ] Översätt `seo.title`
- [ ] Översätt `seo.description`
- [ ] Översätt `hero` section
- [ ] Översätt alla `plans[]` (name, price, description, features)
- [ ] Översätt `faq` section om den finns
- [ ] Översätt alla knappar och CTA:er

#### 3.5 Översätt solutions.ts
- [ ] Översätt `seo.title`
- [ ] Översätt `seo.description`
- [ ] Översätt `hero` section
- [ ] Översätt alla `solutions[]`
- [ ] Översätt alla beskrivningar och features

#### 3.6 Översätt about.ts
- [ ] Översätt `seo.title`
- [ ] Översätt `seo.description`
- [ ] Översätt `hero` section
- [ ] Översätt företagsbeskrivning
- [ ] Översätt team-information om den finns
- [ ] Översätt värderingar/mission/vision

#### 3.7 Översätt contact.ts
- [ ] Översätt `seo.title`
- [ ] Översätt `seo.description`
- [ ] Översätt `hero` section
- [ ] Översätt formulärfält-labels
- [ ] Översätt placeholders
- [ ] Översätt knappar
- [ ] Översätt kontaktinformation

#### 3.8 Översätt faq.ts
- [ ] Översätt `seo.title`
- [ ] Översätt `seo.description`
- [ ] Översätt `hero` section
- [ ] Översätt alla frågor och svar i `faqs[]`

#### 3.9 Översätt partners.ts
- [ ] Översätt `seo.title`
- [ ] Översätt `seo.description`
- [ ] Översätt `hero` section
- [ ] Översätt partners-beskrivningar
- [ ] Översätt CTA:er

#### 3.10 Översätt legal.ts
- [ ] Översätt integritetspolicy titel och innehåll
- [ ] Översätt användarvillkor titel och innehåll
- [ ] Översätt SEO metadata för båda sidor

#### 3.11 Översätt blog.ts
- [ ] Översätt `seo.title`
- [ ] Översätt `seo.description`
- [ ] Översätt `hero` section
- [ ] Översätt kategorier
- [ ] Översätt "Läs mer", "Publicerad", etc.

#### 3.12 Översätt 404.ts
- [ ] Översätt `seo.title`
- [ ] Översätt `seo.description`
- [ ] Översätt 404-meddelande
- [ ] Översätt "Tillbaka till startsidan"-knapp

#### 3.13 Skapa index-fil för engelska
- [ ] Skapa `src/i18n/translations/en/index.ts`
- [ ] Exportera alla engelska översättningsmoduler

---

### FAS 4: Skapa engelska sidor (1 timme)

#### 4.1 Skapa engelska sidmapp
- [ ] Skapa `src/pages/en/` mapp
- [ ] Skapa `src/pages/en/blog/` mapp

#### 4.2 Skapa engelska hemsida
- [ ] Kopiera `src/pages/index.astro` → `src/pages/en/index.astro`
- [ ] Uppdatera import path från `../i18n/translations/sv` → `../../i18n/translations/en`
- [ ] Uppdatera Layout import från `../layouts/Layout.astro` → `../../layouts/Layout.astro`
- [ ] Verifiera att alla komponenter importeras korrekt

#### 4.3 Skapa engelska prissida
- [ ] Kopiera `src/pages/priser.astro` → `src/pages/en/pricing.astro`
- [ ] Uppdatera imports till engelska översättningar
- [ ] Uppdatera Layout import path

#### 4.4 Skapa engelska kontaktsida
- [ ] Kopiera `src/pages/kontakt.astro` → `src/pages/en/contact.astro`
- [ ] Uppdatera imports till engelska översättningar
- [ ] Uppdatera Layout import path

#### 4.5 Skapa engelska lösningssida
- [ ] Kopiera `src/pages/losningar.astro` → `src/pages/en/solutions.astro`
- [ ] Uppdatera imports till engelska översättningar
- [ ] Uppdatera Layout import path

#### 4.6 Skapa engelska om oss-sida
- [ ] Kopiera `src/pages/om-oss.astro` → `src/pages/en/about.astro`
- [ ] Uppdatera imports till engelska översättningar
- [ ] Uppdatera Layout import path

#### 4.7 Skapa engelska bloggsida
- [ ] Kopiera `src/pages/blog.astro` → `src/pages/en/blog.astro`
- [ ] Uppdatera imports till engelska översättningar
- [ ] Uppdatera Layout import path
- [ ] Uppdatera länkar till bloggposter (`/blog/[slug]` → `/en/blog/[slug]`)

#### 4.8 Skapa engelsk bloggpost-sida
- [ ] Kopiera `src/pages/blog/[slug].astro` → `src/pages/en/blog/[slug].astro`
- [ ] Uppdatera imports till engelska översättningar
- [ ] Uppdatera Layout import path
- [ ] Filtrera till engelska blogginlägg (om innehåll finns)

#### 4.9 Skapa engelska partners-sida
- [ ] Kopiera `src/pages/partners.astro` → `src/pages/en/partners.astro`
- [ ] Uppdatera imports till engelska översättningar
- [ ] Uppdatera Layout import path

#### 4.10 Skapa engelsk integritetspolicy
- [ ] Kopiera `src/pages/integritetspolicy.astro` → `src/pages/en/privacy.astro`
- [ ] Uppdatera imports till engelska översättningar från `legal.ts`
- [ ] Uppdatera Layout import path

#### 4.11 Skapa engelska användarvillkor
- [ ] Kopiera `src/pages/anvandarvillkor.astro` → `src/pages/en/terms.astro`
- [ ] Uppdatera imports till engelska översättningar från `legal.ts`
- [ ] Uppdatera Layout import path

---

### FAS 5: Uppdatera Layout & Komponenter (30 min)

#### 5.1 Uppdatera Layout.astro
- [ ] Öppna `src/layouts/Layout.astro`
- [ ] Importera `getLangFromUrl` från `../i18n/utils`
- [ ] Lägg till `const lang = getLangFromUrl(Astro.url);`
- [ ] Ändra `<html lang="sv">` → `<html lang={lang}>`
- [ ] Importera `getRelativeLocaleUrl` från `astro:i18n`
- [ ] Skapa URL-mappning för båda språken
- [ ] Lägg till hreflang-taggar i `<head>`:
  - [ ] `<link rel="alternate" hreflang="sv" ...>`
  - [ ] `<link rel="alternate" hreflang="en" ...>`
  - [ ] `<link rel="alternate" hreflang="x-default" ...>`
- [ ] Uppdatera `og:locale` till dynamisk baserat på språk
- [ ] Lägg till `og:locale:alternate` för andra språket
- [ ] Uppdatera structured data `inLanguage` till dynamisk
- [ ] Uppdatera "Hoppa till innehåll" till dynamisk text från `ui`

#### 5.2 Uppdatera Header.astro
- [ ] Öppna `src/components/Header.astro`
- [ ] Importera `getLangFromUrl` från `../i18n/utils`
- [ ] Lägg till `const lang = getLangFromUrl(Astro.url);`
- [ ] Importera översättningar baserat på språk
- [ ] Uppdatera navigation-länkar till dynamiska från översättningar
- [ ] Skapa logik för alternatePath (språkväxling)
- [ ] Lägg till språkväljare-knapp/länk i header
- [ ] Styla språkväljaren
- [ ] Lägg till aria-label för tillgänglighet

#### 5.3 Uppdatera Footer.astro
- [ ] Öppna `src/components/Footer.astro`
- [ ] Importera `getLangFromUrl` från `../i18n/utils`
- [ ] Lägg till `const lang = getLangFromUrl(Astro.url);`
- [ ] Importera översättningar baserat på språk
- [ ] Uppdatera alla footer-texter till dynamiska från översättningar
- [ ] Uppdatera footer-länkar till dynamiska

#### 5.4 Uppdatera dynamiska komponenter (om de innehåller text)
- [ ] Gå igenom `Hero.astro` - gör texter dynamiska om hårdkodade
- [ ] Gå igenom `Features.astro` - gör texter dynamiska om hårdkodade
- [ ] Gå igenom `FAQ.astro` - gör texter dynamiska om hårdkodade
- [ ] Gå igenom `CTASection.astro` - gör texter dynamiska om hårdkodade
- [ ] Gå igenom övriga komponenter och uppdatera där det behövs

---

### FAS 6: Testning (30 min)

#### 6.1 Testa svenska sidor
- [ ] Kör `npm run dev`
- [ ] Öppna `/` - verifiera innehåll och layout
- [ ] Öppna `/priser` - verifiera innehåll
- [ ] Öppna `/kontakt` - verifiera innehåll
- [ ] Öppna `/losningar` - verifiera innehåll
- [ ] Öppna `/om-oss` - verifiera innehåll
- [ ] Öppna `/blog` - verifiera innehåll
- [ ] Öppna `/partners` - verifiera innehåll
- [ ] Öppna `/integritetspolicy` - verifiera innehåll
- [ ] Öppna `/anvandarvillkor` - verifiera innehåll

#### 6.2 Testa engelska sidor
- [ ] Öppna `/en` - verifiera innehåll är på engelska
- [ ] Öppna `/en/pricing` - verifiera innehåll
- [ ] Öppna `/en/contact` - verifiera innehåll
- [ ] Öppna `/en/solutions` - verifiera innehåll
- [ ] Öppna `/en/about` - verifiera innehåll
- [ ] Öppna `/en/blog` - verifiera innehåll
- [ ] Öppna `/en/partners` - verifiera innehåll
- [ ] Öppna `/en/privacy` - verifiera innehåll
- [ ] Öppna `/en/terms` - verifiera innehåll

#### 6.3 Testa språkväljare
- [ ] Från `/` klicka på "EN" - ska gå till `/en`
- [ ] Från `/en` klicka på "SV" - ska gå till `/`
- [ ] Från `/priser` klicka på "EN" - ska gå till `/en/pricing`
- [ ] Från `/en/pricing` klicka på "SV" - ska gå till `/priser`
- [ ] Testa på alla sidor att språkväxlingen fungerar

#### 6.4 Verifiera SEO-taggar
- [ ] Öppna `/` i webbläsare
- [ ] Inspektera HTML och verifiera:
  - [ ] `<html lang="sv">`
  - [ ] `<link rel="alternate" hreflang="sv" ...>` finns
  - [ ] `<link rel="alternate" hreflang="en" ...>` finns
  - [ ] `<link rel="alternate" hreflang="x-default" ...>` finns
  - [ ] `<meta property="og:locale" content="sv_SE">` finns
  - [ ] `<meta property="og:locale:alternate" content="en_US">` finns
- [ ] Öppna `/en` i webbläsare
- [ ] Inspektera HTML och verifiera:
  - [ ] `<html lang="en">`
  - [ ] Hreflang-taggar finns
  - [ ] `<meta property="og:locale" content="en_US">` finns

#### 6.5 Testa build och sitemap
- [ ] Kör `npm run build`
- [ ] Verifiera att bygget går igenom utan fel
- [ ] Öppna `dist/sitemap-0.xml` och verifiera:
  - [ ] Svenska sidor finns (`https://taxiadministration.se/priser`)
  - [ ] Engelska sidor finns (`https://taxiadministration.se/en/pricing`)
  - [ ] Alla sidor inkluderade

#### 6.6 Validera med externa verktyg
- [ ] Kör `npm run preview`
- [ ] Testa med [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Validera structured data fungerar för båda språken
- [ ] Testa med [hreflang validator](https://www.aleydasolis.com/english/international-seo-tools/hreflang-tags-generator/)

#### 6.7 Responsivitet och prestanda
- [ ] Testa alla sidor på mobil viewport
- [ ] Testa alla sidor på tablet viewport
- [ ] Verifiera att språkväljare fungerar på alla enheter
- [ ] Kontrollera laddningstider

---

### FAS 7: Deploy och uppföljning

#### 7.1 Pre-deploy checklista
- [ ] Säkerhetskopiera nuvarande produktion
- [ ] Kör `npm run build` utan fel
- [ ] Kör alla tester som finns
- [ ] Verifiera att alla TypeScript-typer är korrekta
- [ ] Granska git diff för oväntade ändringar

#### 7.2 Deploy
- [ ] Committa alla ändringar med beskrivande commit-meddelande
- [ ] Pusha till repository
- [ ] Deploy till produktion (enligt er deploy-process)
- [ ] Vänta på att deploy är klar

#### 7.3 Post-deploy verifiering
- [ ] Besök https://taxiadministration.se och verifiera svenska sidan
- [ ] Besök https://taxiadministration.se/en och verifiera engelska sidan
- [ ] Testa språkväljaren i produktion
- [ ] Verifiera sitemap: https://taxiadministration.se/sitemap-0.xml
- [ ] Verifiera hreflang-taggar i produktion

#### 7.4 Google Search Console
- [ ] Logga in på Google Search Console
- [ ] Skicka in ny sitemap
- [ ] Verifiera att båda språkversionerna crawlas
- [ ] Sätt upp internationell målgruppsanpassning om tillgängligt
- [ ] Begär omindexering av viktigaste sidorna

#### 7.5 Övervaka och optimera
- [ ] Övervaka Google Analytics för engelska besökare
- [ ] Kontrollera för crawl-fel i Search Console
- [ ] Följ upp indexeringsstatus för engelska sidor
- [ ] Samla feedback från användare
- [ ] Justera översättningar baserat på feedback

---

## 📁 Nuvarande struktur

### Befintliga sidor
```
src/pages/
├── index.astro              # Hem
├── priser.astro             # Prissättning
├── kontakt.astro            # Kontakt
├── losningar.astro          # Lösningar
├── om-oss.astro             # Om oss
├── blog.astro               # Blogglista
├── blog/[slug].astro        # Bloggpost
├── partners.astro           # Partners
├── integritetspolicy.astro  # Integritetspolicy
├── anvandarvillkor.astro    # Användarvillkor
└── 404.astro                # 404-sida
```

### Befintlig innehållsstruktur
```
src/content/texts/
├── common.ts      # Navigation, footer, CTA
├── home.ts        # Hemsida
├── pricing.ts     # Priser
├── contact.ts     # Kontakt
├── solutions.ts   # Lösningar
├── about.ts       # Om oss
├── faq.ts         # FAQ
└── index.ts       # Export
```

## 🏗️ Ny struktur

### Steg 1: Konfigurera Astro i18n

**Fil:** `astro.config.mjs`

```javascript
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";

export default defineConfig({
  site: 'https://taxiadministration.se',
  output: 'static',
  prefetch: true,

  // Lägg till i18n-konfiguration
  i18n: {
    defaultLocale: 'sv',
    locales: ['sv', 'en'],
    routing: {
      prefixDefaultLocale: false  // Svenska utan prefix: /priser, Engelska med: /en/pricing
    }
  },

  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'sv',
        locales: {
          sv: 'sv-SE',
          en: 'en-US'
        }
      }
    }),
    icon({
      // ... befintlig config
    }),
  ],
  // ... resten av config
});
```

### Steg 2: Omstrukturera innehåll

**Ny mappstruktur för översättningar:**

```
src/i18n/
├── config.ts          # Språkkonfiguration
├── utils.ts           # Hjälpfunktioner för språkhantering
└── translations/
    ├── sv/            # Svenska översättningar
    │   ├── common.ts
    │   ├── home.ts
    │   ├── pricing.ts
    │   ├── contact.ts
    │   ├── solutions.ts
    │   ├── about.ts
    │   ├── faq.ts
    │   ├── legal.ts   # Ny: integritetspolicy & användarvillkor
    │   ├── partners.ts
    │   ├── blog.ts
    │   └── index.ts
    └── en/            # Engelska översättningar
        ├── common.ts
        ├── home.ts
        ├── pricing.ts
        ├── contact.ts
        ├── solutions.ts
        ├── about.ts
        ├── faq.ts
        ├── legal.ts
        ├── partners.ts
        ├── blog.ts
        └── index.ts
```

**Exempel: `src/i18n/config.ts`**

```typescript
export const languages = {
  sv: 'Svenska',
  en: 'English',
};

export const defaultLang = 'sv';

export type Language = keyof typeof languages;

export const ui = {
  sv: {
    'nav.skipToContent': 'Hoppa till innehåll',
  },
  en: {
    'nav.skipToContent': 'Skip to content',
  },
} as const;
```

**Exempel: `src/i18n/utils.ts`**

```typescript
import { defaultLang, type Language } from './config';

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

// Import översättningar baserat på språk
export async function getTranslations(lang: Language) {
  const translations = await import(`./translations/${lang}/index.ts`);
  return translations;
}
```

### Steg 3: Skapa engelska sidor

**Ny sidstruktur:**

```
src/pages/
├── index.astro              # Svenska hem (/)
├── priser.astro             # Svenska priser (/priser)
├── kontakt.astro            # Svenska kontakt (/kontakt)
├── losningar.astro          # Svenska lösningar (/losningar)
├── om-oss.astro             # Svenska om oss (/om-oss)
├── blog.astro               # Svenska blog (/blog)
├── blog/
│   └── [slug].astro         # Svenska bloggpost (/blog/[slug])
├── partners.astro           # Svenska partners (/partners)
├── integritetspolicy.astro  # Svenska integritetspolicy (/integritetspolicy)
├── anvandarvillkor.astro    # Svenska användarvillkor (/anvandarvillkor)
├── 404.astro                # Svenska 404 (/404)
└── en/                      # Engelska sidor
    ├── index.astro          # Engelska hem (/en)
    ├── pricing.astro        # Engelska priser (/en/pricing)
    ├── contact.astro        # Engelska kontakt (/en/contact)
    ├── solutions.astro      # Engelska lösningar (/en/solutions)
    ├── about.astro          # Engelska om oss (/en/about)
    ├── blog.astro           # Engelska blog (/en/blog)
    ├── blog/
    │   └── [slug].astro     # Engelska bloggpost (/en/blog/[slug])
    ├── partners.astro       # Engelska partners (/en/partners)
    ├── privacy.astro        # Engelska integritetspolicy (/en/privacy)
    └── terms.astro          # Engelska användarvillkor (/en/terms)
```

### Steg 4: Uppdatera Layout för i18n

**Fil:** `src/layouts/Layout.astro`

Ändringar som behövs:

1. **Dynamisk lang-attribut**
   ```astro
   ---
   import { getLangFromUrl } from '../i18n/utils';
   const lang = getLangFromUrl(Astro.url);
   ---
   <html lang={lang}>
   ```

2. **Hreflang-taggar**
   ```astro
   ---
   import { getRelativeLocaleUrl } from 'astro:i18n';

   // Generera URL-mappningar för alla språk
   const currentPath = Astro.url.pathname.replace(/^\/(en|sv)\//, '/');
   const svUrl = getRelativeLocaleUrl('sv', currentPath);
   const enUrl = getRelativeLocaleUrl('en', currentPath);
   ---

   <head>
     <!-- Befintliga meta-taggar -->

     <!-- Hreflang för SEO -->
     <link rel="alternate" hreflang="sv" href={`https://taxiadministration.se${svUrl}`} />
     <link rel="alternate" hreflang="en" href={`https://taxiadministration.se${enUrl}`} />
     <link rel="alternate" hreflang="x-default" href={`https://taxiadministration.se${svUrl}`} />
   </head>
   ```

3. **Dynamisk Open Graph locale**
   ```astro
   <meta property="og:locale" content={lang === 'sv' ? 'sv_SE' : 'en_US'} />
   {lang === 'sv' && <meta property="og:locale:alternate" content="en_US" />}
   {lang === 'en' && <meta property="og:locale:alternate" content="sv_SE" />}
   ```

4. **Dynamisk structured data**
   ```astro
   <script type="application/ld+json" set:html={JSON.stringify({
     "@context": "https://schema.org",
     // ... dynamiskt innehåll baserat på språk
     "inLanguage": lang === 'sv' ? 'sv-SE' : 'en-US'
   })} />
   ```

### Steg 5: Språkväljare i Header

**Fil:** `src/components/Header.astro`

Lägg till språkväljare i navigationen:

```astro
---
import { getLangFromUrl } from '../i18n/utils';
const lang = getLangFromUrl(Astro.url);
const currentPath = Astro.url.pathname;

// Generera motsvarande URL för andra språket
const alternatePath = lang === 'sv'
  ? `/en${currentPath}`
  : currentPath.replace(/^\/en/, '');
---

<nav>
  <!-- Befintlig navigation -->

  <!-- Språkväljare -->
  <div class="language-switcher">
    <a
      href={alternatePath}
      aria-label={lang === 'sv' ? 'Switch to English' : 'Byt till Svenska'}
    >
      {lang === 'sv' ? 'EN' : 'SV'}
    </a>
  </div>
</nav>
```

## 🔄 Migreringsprocess

### Fas 1: Förberedelser (30 min)

1. ✅ Installera inga nya dependencies (använd Astros inbyggda i18n)
2. ✅ Skapa `src/i18n/` mappstruktur
3. ✅ Skapa `config.ts` och `utils.ts`
4. ✅ Uppdatera `astro.config.mjs` med i18n-konfiguration

### Fas 2: Flytta befintligt innehåll (15 min)

1. ✅ Flytta `src/content/texts/` → `src/i18n/translations/sv/`
2. ✅ Uppdatera imports i befintliga svenska sidor
3. ✅ Skapa `legal.ts` för integritetspolicy & användarvillkor

### Fas 3: Skapa engelska översättningar (2-3 timmar)

1. ✅ Kopiera alla filer från `sv/` → `en/`
2. ✅ Översätt allt innehåll till engelska
3. ✅ Översätt SEO-metadata (titles, descriptions)

**Ordning för översättning:**
1. `common.ts` - Navigation, footer (används överallt)
2. `home.ts` - Hemsida (viktigast för SEO)
3. `pricing.ts` - Prissida
4. `solutions.ts` - Lösningar
5. `about.ts` - Om oss
6. `contact.ts` - Kontakt
7. `faq.ts` - FAQ
8. `partners.ts` - Partners
9. `legal.ts` - Integritetspolicy & Användarvillkor
10. `blog.ts` - Blog-texter

### Fas 4: Skapa engelska sidor (1 timme)

1. ✅ Skapa `src/pages/en/` mapp
2. ✅ För varje svensk sida: kopiera till engelska mappen
3. ✅ Uppdatera imports för att använda engelska översättningar
4. ✅ Ändra filnamn där det behövs (t.ex. `priser.astro` → `pricing.astro`)

### Fas 5: Uppdatera Layout & komponenter (30 min)

1. ✅ Uppdatera `Layout.astro` med:
   - Dynamisk `lang`-attribut
   - Hreflang-taggar
   - Dynamisk OG locale
   - Dynamisk structured data
2. ✅ Uppdatera `Header.astro` med språkväljare
3. ✅ Uppdatera `Footer.astro` med dynamiska länkar

### Fas 6: Testning (30 min)

1. ✅ Testa alla svenska sidor fungerar som tidigare
2. ✅ Testa alla engelska sidor visar rätt innehåll
3. ✅ Verifiera hreflang-taggar i HTML
4. ✅ Kontrollera sitemap innehåller båda språken
5. ✅ Testa språkväljare fungerar korrekt
6. ✅ Validera structured data med Google Rich Results Test

## 📊 URL-struktur

### Svenska (standardspråk)
```
/ (hem)
/priser
/kontakt
/losningar
/om-oss
/blog
/blog/[slug]
/partners
/integritetspolicy
/anvandarvillkor
```

### Engelska
```
/en (home)
/en/pricing
/en/contact
/en/solutions
/en/about
/en/blog
/en/blog/[slug]
/en/partners
/en/privacy
/en/terms
```

## 🔍 SEO-checklista

- [ ] Hreflang-taggar på alla sidor
- [ ] Canonical URLs korrekta för varje språk
- [ ] Sitemap genererad med båda språken
- [ ] OG locale och alternate locales konfigurerade
- [ ] Structured data uppdaterad med språk
- [ ] Meta-titlar och beskrivningar översatta
- [ ] Alt-texter på bilder översatta
- [ ] robots.txt tillåter alla språk

## 🌍 Framtida språk

När fler språk ska läggas till:

1. Lägg till språkkod i `astro.config.mjs`:
   ```javascript
   locales: ['sv', 'en', 'de', 'no']
   ```

2. Kopiera `src/i18n/translations/en/` → `src/i18n/translations/de/`

3. Översätt alla filer

4. Kopiera `src/pages/en/` → `src/pages/de/`

5. Uppdatera imports till tyska översättningar

6. Uppdatera hreflang-taggar i Layout

## 📝 Exempel på sidimplementation

### Svensk sida (befintlig)

**Fil:** `src/pages/priser.astro`

```astro
---
import Layout from '../layouts/Layout.astro';
import { pricing } from '../i18n/translations/sv';

const { seo, hero, plans } = pricing;
---

<Layout title={seo.title} description={seo.description}>
  <h1>{hero.title}</h1>
  <p>{hero.subtitle}</p>
  <!-- ... -->
</Layout>
```

### Engelsk sida (ny)

**Fil:** `src/pages/en/pricing.astro`

```astro
---
import Layout from '../../layouts/Layout.astro';
import { pricing } from '../../i18n/translations/en';

const { seo, hero, plans } = pricing;
---

<Layout title={seo.title} description={seo.description}>
  <h1>{hero.title}</h1>
  <p>{hero.subtitle}</p>
  <!-- ... -->
</Layout>
```

## 🛠️ Verktyg för översättning

**För kvalitetsöversättningar:**
- ChatGPT / Claude för initial översättning
- Native speaker för korrekturläsning
- DeepL för kompletterande översättningar
- Google Translate console för SEO-kontroll

**Viktigt vid översättning:**
- Översätt inte varumärken (Bolt, Uber, SumUp)
- Behåll tekniska termer där relevant
- Anpassa exempel till målmarknad
- Översätt valuta där relevant (SEK → USD/EUR)

## ✅ Definition of Done

En sida räknas som komplett när:

1. [ ] Översättning finns i TypeScript-fil
2. [ ] Astro-sida skapad i `/en/`-mappen
3. [ ] SEO-metadata översatt
4. [ ] Hreflang-taggar genereras korrekt
5. [ ] Sidorna visas i sitemap
6. [ ] Språkväljare fungerar mellan språkversioner
7. [ ] Visuell kontroll att allt ser bra ut
8. [ ] Inga TypeScript-fel

## 🚀 Deploy-checklista

Innan deploy till produktion:

- [ ] Kör `npm run build` utan fel
- [ ] Verifiera sitemap.xml innehåller alla språk
- [ ] Testa alla språkväljare-länkar
- [ ] Google Search Console konfigurerad för internationell webbplats
- [ ] Backup av nuvarande site

## 📚 Resurser

- [Astro i18n Documentation](https://docs.astro.build/en/guides/internationalization/)
- [Google Multilingual & Multi-regional Sites](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites)
- [Hreflang Best Practices](https://ahrefs.com/blog/hreflang-tags/)

---

**Skapad:** 2025-12-07
**Senast uppdaterad:** 2025-12-07
**Status:** Planering klar - Redo för implementation
