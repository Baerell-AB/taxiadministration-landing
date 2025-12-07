# Google Analytics Implementation Plan - Landing Page

## Översikt

**Projekt:** taxiadministration.se (Astro landing page)
**Measurement ID:** G-H05H72ZJCF (landing page) + G-T4SDQ25EWX (connected tag för full journey)
**Mål:** Spåra leads och användarresan från landing page till app-signup

---

## Steg 1: Uppgradera GA4 med cross-domain tracking

**Fil:** `src/layouts/Layout.astro`

Uppdatera befintligt GA-script (rad 32-39) med cross-domain tracking:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-T4SDQ25EWX"></script>
<script is:inline>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-T4SDQ25EWX', {
    'linker': {
      'domains': ['taxiadministration.se', 'app.taxiadministration.se']
    }
  });
</script>
```

---

## Steg 2: Skapa analytics utility

**Ny fil:** `src/utils/analytics.ts`

Centraliserade funktioner för event-tracking:
- `trackEvent()` - generell event-funktion
- `trackCTAClick()` - spåra CTA-klick
- `trackFormSubmit()` - spåra formulär
- `trackPricingCTA()` - spåra prisknapp-klick
- Konstanter för event-namn och kategorier

---

## Steg 3: Skapa client-side tracker

**Ny fil:** `src/scripts/analytics-tracker.ts`

Automatisk tracking av:
- Alla CTA-knappar som leder till appen
- Kontaktformulär (start + submit)
- Prissidans knappar med tier-info
- Navigationsklick (header/footer)
- FAQ-interaktioner

---

## Steg 4: Integrera i Layout

**Fil:** `src/layouts/Layout.astro`

Lägg till efter befintliga scripts:

```html
<script>
  import { initAnalyticsTracking } from '../scripts/analytics-tracker';
  document.addEventListener('DOMContentLoaded', initAnalyticsTracking);
  document.addEventListener('astro:page-load', initAnalyticsTracking);
</script>
```

---

## Events att spåra

| Event | Kategori | Beskrivning |
|-------|----------|-------------|
| `cta_click` | cta | Klick på "Testa gratis", "Starta Nu" etc. |
| `form_start` | form | Börjar fylla i kontaktformulär |
| `form_submit` | form | Skickar kontaktformulär |
| `pricing_cta_click` | pricing | CTA-klick på prissidan |
| `navigation_click` | navigation | Navigationsklick |
| `faq_expand` | engagement | Öppnar FAQ-fråga |

---

## Filer att skapa/ändra

| Fil | Åtgärd |
|-----|--------|
| `src/layouts/Layout.astro` | Ändra - uppdatera GA config + lägg till script import |
| `src/utils/analytics.ts` | Skapa - analytics utility functions |
| `src/scripts/analytics-tracker.ts` | Skapa - client-side tracking logic |

---

## Nästa steg (app-projektet - separat implementation)

1. Uppdatera appens GA-config med `accept_incoming: true`
2. Implementera event-tracking för signup, CSV upload, etc.

---

## Testning

1. Använd GA4 DebugView för realtidstestning
2. Verifiera cross-domain med `_gl` parameter
3. Testa alla CTA:er och formulär
