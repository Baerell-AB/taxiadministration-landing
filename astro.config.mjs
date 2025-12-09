import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://taxiadministration.se',
  output: 'static',
  prefetch: true,
  i18n: {
    defaultLocale: 'sv',
    locales: ['sv', 'en', 'ar', 'so', 'fa'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'sv',
        locales: {
          sv: 'sv-SE',
          en: 'en-US',
          ar: 'ar-SA',
          so: 'so-SO',
          fa: 'fa-IR'
        }
      }
    }),
    icon({
      include: {
        ph: [
          "arrow-right",
          "buildings-duotone",
          "check-circle-duotone",
          "clock-duotone",
          "currency-dollar-duotone",
          "file-search",
          "globe-duotone",
          "layout-duotone",
          "lifebuoy-duotone",
          "linkedin-logo-duotone",
          "puzzle-piece-duotone",
          "shield-check-duotone",
          "users-duotone"
        ]
      }
    }),
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});
