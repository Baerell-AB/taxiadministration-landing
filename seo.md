# SEO-rapport: Taxi Administration

**Datum:** December 2025
**Webbplats:** taxiadministration.se
**Målgrupp:** Svenska taxiåkare och åkeriägare

---

## Sammanfattning

Denna rapport analyserar SEO-status för taxiadministration.se baserat på aktuella best practices för 2025. Rapporten identifierar styrkor, svagheter och konkreta åtgärdsförslag för att förbättra synligheten i svenska sökresultat.

### Övergripande betyg: 7/10

**Styrkor:**
- Korrekt språkinställning (sv)
- Bra grundläggande meta-struktur
- Sitemap genereras automatiskt
- Optimerade bilder (WebP-format)

**Förbättringsområden:**
- Structured data (schema markup) behöver utökas
- FAQ-schema saknas
- Robots.txt saknas
- Canonical URLs behöver implementeras explicit
- Saknar hreflang (om internationell expansion planeras)

---

## 1. Teknisk SEO

### 1.1 Meta Tags - Status

| Element | Status | Kommentar |
|---------|--------|-----------|
| Title tags | ✅ Bra | Unika per sida, innehåller sökord |
| Meta description | ✅ Bra | Under 160 tecken, innehåller CTA |
| Viewport | ✅ Bra | Korrekt mobile-first |
| Lang attribute | ✅ Bra | `lang="sv"` på alla sidor |
| Charset | ✅ Bra | UTF-8 |
| Canonical | ⚠️ Saknas | Bör läggas till explicit |
| Robots meta | ⚠️ Saknas | Bör specificeras |

**Källa:** [SEO Meta Data Best Practices 2025](https://saleshive.com/blog/seo-meta-data-best-practices-rankings-2025/)

### 1.2 Nuvarande Title Tags

| Sida | Title | Längd | Bedömning |
|------|-------|-------|-----------|
| / | Bokföring och lönehantering för taxiåkerier \| Taxi Administration | 65 tecken | ✅ Optimal |
| /losningar | Smarta lösningar för taxi revision och administration \| Taxi Administration | 76 tecken | ⚠️ Lite lång |
| /priser | Prisvärd taxi bokföring - börja gratis \| Taxi Administration | 60 tecken | ✅ Bra |
| /om-oss | Om oss \| Taxi Administration | 29 tecken | ⚠️ För kort |
| /kontakt | Kontakta oss \| Taxi Administration | 35 tecken | ⚠️ Kan förbättras |

**Rekommendation:** Title tags bör vara 50-60 tecken för optimal visning i SERP.

### 1.3 Structured Data (Schema Markup)

**Nuvarande implementation:**
```json
{
  "@type": "LocalBusiness",
  "name": "Taxi Administration",
  "address": { "addressLocality": "Stockholm" }
}
```

**Problem:**
- Endast LocalBusiness-schema finns
- Saknar SoftwareApplication/WebApplication-schema (för SaaS)
- Saknar FAQPage-schema (stor miss för FAQ-sektionen!)
- Saknar Organization-schema med fullständig info
- Saknar BreadcrumbList för navigation
- Saknar Service-schema för tjänsterna

**Källa:** [Schema for SaaS Companies](https://salt.agency/blog/schema-for-saas-companies-salt-agency/)

### 1.4 Core Web Vitals

Astro genererar statiska sidor vilket är positivt för prestanda. Dock bör följande verifieras:

| Metrik | Mål 2025 | Kommentar |
|--------|----------|-----------|
| LCP (Largest Contentful Paint) | ≤ 2.5s | Optimerade bilder hjälper |
| INP (Interaction to Next Paint) | ≤ 200ms | Minimal JS är positivt |
| CLS (Cumulative Layout Shift) | < 0.1 | Bilder har width/height ✅ |

**Källa:** [Core Web Vitals 2025](https://nitropack.io/blog/post/most-important-core-web-vitals-metrics)

**Rekommendationer:**
- Lägg till `loading="lazy"` på bilder under fold
- Preload hero-bilden för snabbare LCP
- Testa med PageSpeed Insights efter deploy

---

## 2. On-Page SEO

### 2.1 Sökord och Keyword Strategy

**Primära sökord (enligt content.md):**
- taxi revision
- taxi bokföring
- bokföring åkeri
- lönehantering taxi

**Sekundära sökord att överväga:**
- löneberäkning taxiförare
- Uber lönerapport
- Bolt förarrapport
- taxiåkeri administration
- löneunderlag taxi
- taxiföretagare bokföring

**Long-tail keywords (rekommenderas för svensk marknad):**
- "hur beräknar man lön för taxiförare"
- "bokföring för uber förare"
- "lönehantering taxiåkeri stockholm"
- "automatisk löneberäkning taxi"

**Källa:** [Taxi Service SEO Keywords](https://www.seopital.co/blog/the-best-taxi-service-seo-keywords)

### 2.2 Heading-struktur (H1-H6)

| Sida | H1 | Bedömning |
|------|-----|-----------|
| / | "Automatisera dina löneberäkningar med precision" | ✅ Bra, men saknar "taxi" |
| /losningar | "Smarta lösningar för taxi revision och administration" | ✅ Bra med sökord |
| /priser | "Prisvärd taxi bokföring - börja gratis" | ✅ Bra med sökord |
| /om-oss | "Om Taxi Administration" | ✅ OK |
| /kontakt | "Kontakta oss" | ⚠️ Generisk |

**Rekommendation för startsidan H1:**
"Automatisera **löneberäkningar för taxiåkerier** med precision"

### 2.3 Content Quality

**Styrkor:**
- Relevant, svenskt innehåll
- Tydliga förklaringar av funktioner
- FAQ besvarar vanliga frågor
- Priser tydligt presenterade

**Förbättringsområden:**
- Lägg till mer branschspecifikt innehåll
- Överväg en kunskapsbank/blogg för long-tail SEO
- Mer content kring specifika plattformar (Uber, Bolt)

---

## 3. Local SEO (Svensk marknad)

### 3.1 Nuvarande status

| Element | Status |
|---------|--------|
| Svenskt språk | ✅ |
| Stockholm i adress | ✅ |
| Svenska meta descriptions | ✅ |
| og:locale sv_SE | ✅ |
| LocalBusiness schema | ✅ (grundläggande) |

### 3.2 Förbättringar för Local SEO

**Registrering på svenska kataloger (VIKTIGT):**
- [ ] Google Business Profile
- [ ] Eniro.se
- [ ] Hitta.se
- [ ] Företagsfakta.se

**Källa:** [SEO in Sweden](https://kandusweden.com/seo-in-sweden-how-to-rank-your-business-on-googles-first-page/)

**NAP-konsistens (Name, Address, Phone):**
Säkerställ att företagsnamn, adress och kontaktinfo är identisk överallt.

---

## 4. Åtgärdsplan

### Prioritet 1 - Kritiskt (Implementera direkt)

#### 4.1 Lägg till FAQPage Schema
FAQ-sektionen finns redan men saknar schema markup. Detta kan öka CTR med upp till 30%.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Vilka plattformar stöder ni?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vi stöder Uber, Bolt, Taxi Stockholm..."
      }
    }
  ]
}
```

#### 4.2 Lägg till robots.txt
Skapa `/public/robots.txt`:
```
User-agent: *
Allow: /

Sitemap: https://taxiadministration.se/sitemap-index.xml
```

#### 4.3 Lägg till canonical URLs
I Layout.astro, lägg till:
```html
<link rel="canonical" href={Astro.url.href} />
```

### Prioritet 2 - Hög (Inom 1-2 veckor)

#### 4.4 Utöka Structured Data

**Organization + SoftwareApplication schema:**
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://taxiadministration.se/#organization",
      "name": "Baerell AB",
      "url": "https://taxiadministration.se",
      "logo": "https://taxiadministration.se/logo.png",
      "sameAs": ["https://www.linkedin.com/company/baerell/"],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Stockholm",
        "addressCountry": "SE"
      }
    },
    {
      "@type": "WebApplication",
      "name": "Taxi Administration",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "SEK"
      }
    }
  ]
}
```

#### 4.5 BreadcrumbList Schema
Lägg till på undersidor för bättre SERP-visning.

#### 4.6 Förbättra Title Tags

| Sida | Nuvarande | Förslag |
|------|-----------|---------|
| /om-oss | "Om oss \| Taxi Administration" | "Om Baerell AB - Lönehantering för taxiåkerier i Stockholm" |
| /kontakt | "Kontakta oss \| Taxi Administration" | "Kontakta oss - Support för taxiåkerier \| Taxi Administration" |

### Prioritet 3 - Medium (Inom 1 månad)

#### 4.7 Registrera på svenska kataloger
- Google Business Profile (högsta prioritet)
- Eniro.se
- Hitta.se

#### 4.8 Preload Hero Image
I Layout.astro eller Hero.astro:
```html
<link rel="preload" as="image" href="/path/to/hero-image.webp" />
```

#### 4.9 Skapa Open Graph-bild
Skapa en anpassad OG-bild (1200x630px) för bättre delning på sociala medier.

### Prioritet 4 - Låg (Framtida förbättringar)

#### 4.10 Blogg/Kunskapsbank
Överväg att lägga till en blogg för:
- Long-tail keyword ranking
- Thought leadership
- Intern länkning
- Färskt innehåll för Google

**Förslag på artiklar:**
- "Guide: Så beräknar du lön för taxiförare"
- "Uber vs Bolt - Jämförelse för åkeriägare"
- "Bokföringstips för taxiföretagare 2025"

#### 4.11 Video SEO
YouTube-videon på /losningar kan optimeras med VideoObject schema.

---

## 5. Tekniska filer att skapa/uppdatera

### 5.1 robots.txt (SKAPA)
**Sökväg:** `/public/robots.txt`
```
User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://taxiadministration.se/sitemap-index.xml
```

### 5.2 Förbättrad Schema Markup (UPPDATERA)
**Fil:** `src/layouts/Layout.astro`

Se Prioritet 2 ovan för fullständig kod.

### 5.3 SEO-komponenter att överväga

**SEO.astro komponent:**
Skapa en återanvändbar komponent för meta tags med:
- Dynamisk canonical URL
- Open Graph fallbacks
- Twitter Card support (om relevant)
- JSON-LD schema per sidtyp

---

## 6. Mätning och uppföljning

### 6.1 Verktyg att använda

| Verktyg | Användning |
|---------|------------|
| Google Search Console | Indexering, prestanda, fel |
| Google Analytics 4 | Trafik, konverteringar |
| PageSpeed Insights | Core Web Vitals |
| Google Rich Results Test | Testa structured data |
| Ahrefs/SEMrush | Keyword tracking (betalversion) |

### 6.2 KPI:er att följa

- Organisk trafik (månad över månad)
- Ranking för primära sökord
- Click-through rate (CTR) från SERP
- Core Web Vitals score
- Indexerade sidor i Search Console

---

## 7. Checklista för lansering

### Före lansering
- [ ] Verifiera alla title tags och meta descriptions
- [ ] Implementera FAQPage schema
- [ ] Skapa robots.txt
- [ ] Lägg till canonical URLs
- [ ] Testa structured data med Rich Results Test
- [ ] Kör PageSpeed Insights
- [ ] Verifiera att sitemap genereras korrekt

### Efter lansering
- [ ] Registrera i Google Search Console
- [ ] Skicka in sitemap
- [ ] Skapa Google Business Profile
- [ ] Registrera på Eniro.se och Hitta.se
- [ ] Sätt upp Google Analytics 4
- [ ] Övervaka indexering första veckorna

---

## 8. Källor och vidare läsning

- [A Complete Guide for Doing SEO in Swedish](https://www.ranktracker.com/blog/a-complete-guide-for-doing-seo-in-swedish/)
- [SEO in Sweden: How to Rank on Google](https://kandusweden.com/seo-in-sweden-how-to-rank-your-business-on-googles-first-page/)
- [Technical SEO Checklist 2025](https://searchatlas.com/blog/technical-seo-checklist/)
- [Schema for SaaS Companies](https://salt.agency/blog/schema-for-saas-companies-salt-agency/)
- [Core Web Vitals 2025](https://nitropack.io/blog/post/most-important-core-web-vitals-metrics)
- [Taxi Service SEO Keywords](https://www.seopital.co/blog/the-best-taxi-service-seo-keywords)
- [Local SEO for Taxi Companies](https://www.taxibutler.com/blog/how-to-use-seo-to-drive-your-taxi-company/)
- [Google Core Web Vitals Documentation](https://developers.google.com/search/docs/appearance/core-web-vitals)

---

## 9. Sammanfattning av åtgärder

| Åtgärd | Prioritet | Uppskattad tid |
|--------|-----------|----------------|
| FAQPage Schema | Kritisk | 30 min |
| robots.txt | Kritisk | 5 min |
| Canonical URLs | Kritisk | 15 min |
| Utökad Schema | Hög | 1-2 tim |
| BreadcrumbList | Hög | 30 min |
| Förbättra titles | Hög | 15 min |
| Google Business Profile | Medium | 30 min |
| Svenska kataloger | Medium | 1 tim |
| OG-bild | Medium | 1 tim |
| Blogg/Kunskapsbank | Låg | Löpande |

---

*Rapport skapad: December 2025*
*Nästa granskning rekommenderas: Mars 2026*
