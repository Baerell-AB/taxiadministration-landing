# Taxiadministration.se - Migrationsplan & Innehåll

## Projektöversikt

**Mål:** Migrera Payflo-temat till Taxi Administration med fokus på SEO för svenska taxiåkerier.

**Målgrupp:** Svenska taxiåkare och åkeriägare

**Primära sökord:** taxi revision, taxi bokföring, bokföring åkeri, lönehantering taxi

---

## Metadata & Konfiguration

- **Domän:** taxiadministration.se
- **App-URL:** https://app.taxiadministration.se
- **YouTube Demo:** https://www.youtube.com/embed/Iu3Cqa4QBL8
- **Formspree ID:** xldwykeg
- **LinkedIn:** https://www.linkedin.com/company/baerell/
- **Språk:** sv (svenska)

---

## Sidstruktur efter migrering

### Sidor att BEHÅLLA och anpassa

| Nuvarande fil | Ny URL | SEO-fokus |
|---------------|--------|-----------|
| index.astro | / | "taxi administration", "bokföring taxiåkeri" |
| solutions.astro → losningar.astro | /losningar | "taxi revision", "lönehantering taxi" + YouTube |
| pricing.astro → priser.astro | /priser | "pris taxi bokföring", freemium-modell |
| about-us.astro → om-oss.astro | /om-oss | Förtroende, "Stockholm" för lokal SEO |
| contact.astro → kontakt.astro | /kontakt | Kontaktformulär |
| privacy-policy.astro → integritetspolicy.astro | /integritetspolicy | Juridiskt |
| terms-of-use.astro → anvandarvillkor.astro | /anvandarvillkor | Juridiskt |

### Sidor att TA BORT

- [ ] careers.astro - Ej relevant
- [ ] book-demo.astro - Ersätts av extern länk till app
- [ ] login.astro - Ersätts av extern länk till app
- [ ] product.astro - Slås ihop med lösningar
- [ ] cookie-policy.astro - Ej nödvändig
- [ ] blog/ (hela mappen) - Inget innehåll
- [ ] documentation/ (hela mappen) - Ej kundvänligt
- [ ] case-studies/ (hela mappen) - Inget innehåll
- [ ] tutorials/ (hela mappen) - Inget innehåll

---

## Prisstruktur

| Plan | Pris | Förare | CTA |
|------|------|--------|-----|
| Gratis | 0 kr/mån | 1 förare | "Kom igång gratis" |
| Standard | 499 kr/mån | Upp till 10 förare | "Testa gratis" |
| Enterprise | Kontakta oss | 10+ förare | "Kontakta försäljning" |

---

## MIGRATIONSPLAN - Faser

### FAS 1: Grundläggande branding
**Status:** [ ] Ej påbörjad

#### 1.1 Layout.astro
- [ ] Ändra `lang="en"` → `lang="sv"`
- [ ] Uppdatera default meta description (svenska)
- [ ] Ändra structured data: "Payflo" → "Taxi Administration" / "Baerell AB"
- [ ] Uppdatera OG/Twitter meta till taxiadministration.se
- [ ] Ta bort Twitter-specifika meta (ingen Twitter-närvaro)

#### 1.2 astro.config.mjs
- [ ] Ändra `site: 'https://payflo.dev'` → `site: 'https://taxiadministration.se'`

#### 1.3 tailwind.config.mjs
- [ ] Byt färgnamn `payflo-*` → `taxi-*` (kosmetiskt, kan hoppa över)

---

### FAS 2: Header & Footer
**Status:** [ ] Ej påbörjad

#### 2.1 Header.astro
**Navigation:**
- Funktioner → /losningar#funktioner
- Lösningar → /losningar
- Priser → /priser
- Om oss → /om-oss

**Knappar:**
- "Log In" → "Logga in" → https://app.taxiadministration.se
- "Book a Demo" → "Testa gratis" → https://app.taxiadministration.se

**Övrigt:**
- [ ] Uppdatera logo alt-text
- [ ] Ta bort onödiga menylänkar

#### 2.2 Footer.astro
**Nya sektioner:**
```
Produkten: Funktioner, Priser
Support: FAQ (#faq), Kontakt
Juridiskt: Integritetspolicy, Användarvillkor
```

**Ändringar:**
- [ ] Ta bort Twitter & GitHub, behåll endast LinkedIn (Baerell)
- [ ] Uppdatera copyright till "taxiadministration.se" / "Baerell AB"
- [ ] Uppdatera beskrivning enligt innehållet nedan

**Footer-beskrivning:**
> Automatisera dina löneberäkningar med precision för taxi- och transportföretag. Utvecklat specifikt för svenska skatteregler och regelverket.

---

### FAS 3: Startsidan (index.astro)
**Status:** [ ] Ej påbörjad

#### 3.1 SEO & Meta
- [ ] Title: "Bokföring och lönehantering för taxiåkerier | Taxi Administration"
- [ ] Meta description: "Automatisera löneberäkningar för ditt taxiåkeri. Stöd för Uber, Bolt, Taxi Stockholm. Börja gratis."

#### 3.2 Hero.astro
**H1:** Automatisera dina **löneberäkningar** med precision

**Underrubrik:** Se dina samlade intäkter och beräkna löner från alla olika plattformar.

**CTA-knappar:**
- Primär: "Kom igång gratis" → https://app.taxiadministration.se
- Sekundär: "Se demo" → /losningar#demo

**Ändringar:**
- [ ] Ta bort testimonial-avatarer (eller ersätt med relevant)
- [ ] Uppdatera hero-bild till salaryReport.png

#### 3.3 Features.astro
**Sektionsrubrik:** Varför välja vårt system?

**Sektionsbeskrivning:** Utvecklat specifikt för svenska taxi- och transportföretag med fokus på automatisering och regelefterlevnad.

**3 Features:**

1. **Automatiserade Beräkningar**
   - Ikon: Calculator
   - Beskrivning: Automatiserade och enkla löneberäkningar enligt dina villkor.

2. **Professionell Rapportering**
   - Ikon: FileText
   - Beskrivning: Generera PDF-rapporter för löneunderlag och redovisning.

3. **Tidsbesparande Automation**
   - Ikon: Clock
   - Beskrivning: Reducera administrativ tid med 90% genom automatiska beräkningar.

#### 3.4 FAQ.astro
**Sektionsrubrik:** Få svar på dina **frågor**

**5 FAQ-poster:**

1. **Integration** - Vilka plattformar stöder ni och hur lätt är det att komma igång?
   > Vi stöder Uber, Bolt, Taxi Stockholm (och fler plattformar) och manuell inmatning. Du laddar enkelt upp CSV-filer från plattformarna eller matar in data manuellt. Uppsättning tar mindre än 10 minuter.

2. **Rapporter** - Kan jag få ut löneunderlag för redovisning?
   > Ja, systemet genererar professionella PDF-rapporter som passar direkt för redovisning och lönespecifikationer. Du kan också exportera data till Excel för vidare bearbetning.

3. **Support** - Vilken support ingår och hur snabbt får jag hjälp?
   > Vi erbjuder e-postsupport med svar inom 24 timmar. Kontakta oss via formuläret. Vi har även omfattande dokumentation och video-guider på svenska.

4. **Funktioner** - Kan systemet hantera våra specifika lönemodeller?
   > Ja, systemet är byggt för svensk taxi- och transportbransch med stöd för olika delningsmodeller, semesterersättning, moms och andra svenska krav.

5. **Priser** - Hur får jag information om priser?
   > Kontakta oss via formuläret för en skräddarsydd offert. Vi återkommer inom 24 timmar med prisförslag. Inga dolda avgifter eller bindningstid.

#### 3.5 CTASection.astro
**Rubrik:** Redo att komma igång?

**Beskrivning:** Gå med i moderna taxi- och transportföretag som redan sparat hundratals timmar och förbättrat sin lönsamhet med automatiserad lönehantering.

**CTA:** "Starta Nu - Helt Gratis" → https://app.taxiadministration.se

**Trust Indicators:**
- Ingen installation
- Ingen bindningstid
- Support på svenska

#### 3.6 Partners.astro (anpassa eller ta bort)
**Alternativ 1:** Visa plattformar som stöds (Uber, Bolt, Taxi Stockholm)
**Alternativ 2:** Ta bort helt

#### 3.7 Testimonials.astro
**Status:** Inväntar kundcitat från användaren
- [ ] Behöver kundcitat för att fylla i

#### 3.8 HowItWorks.astro
**Alternativ:** Ersätt med "Screenshot Showcase"

**Screenshots:**
1. **Förarprofiler** - driverReport.png
2. **Dina egna inställningar** - configuration.png

---

### FAS 4: Lösningar-sidan (/losningar)
**Status:** [ ] Ej påbörjad

**Fil:** solutions.astro → losningar.astro

**SEO:**
- H1: "Smarta lösningar för taxi revision och administration"
- Meta: "Komplett lönehantering, förarrapporter och revisionsunderlag för taxiåkerier"

**Sektioner:**
1. Hero med övergripande beskrivning
2. YouTube-video inbäddad (#demo)
3. Detaljerade lösningar:
   - Lönehantering (salaryReport.png)
   - Förarrapporter (driverReport.png)
   - Revisionsunderlag
   - Konfiguration (configuration.png)
4. CTA: Testa gratis

---

### FAS 5: Priser-sidan (/priser)
**Status:** [ ] Ej påbörjad

**Fil:** pricing.astro → priser.astro

**SEO:**
- H1: "Prisvärd taxi bokföring - börja gratis"
- Meta: "Flexibla priser för taxiåkerier. Börja gratis med 1 förare. Uppgradera när du växer."

**Innehåll:**
- Tre prisnivåer (se prisstruktur ovan)
- FAQ om priser
- CTA: Testa gratis

---

### FAS 6: Övriga sidor
**Status:** [ ] Ej påbörjad

#### 6.1 Om oss (/om-oss)
**Fil:** about-us.astro → om-oss.astro
- Företagsinfo om Baerell AB
- Stockholm-fokus för lokal SEO
- [ ] Ta bort fake team members
- [ ] Behöver företagsbeskrivning från användaren

#### 6.2 Kontakt (/kontakt)
**Fil:** contact.astro → kontakt.astro
- Kontaktformulär (Formspree: xldwykeg)
- Kontaktinfo: Stockholm, Sverige
- E-post via formulär

#### 6.3 Juridiska sidor
- privacy-policy.astro → integritetspolicy.astro
- terms-of-use.astro → anvandarvillkor.astro
- [ ] Uppdatera företagsnamn till Baerell AB

---

### FAS 7: Städning
**Status:** [ ] Ej påbörjad

#### Filer att ta bort:
```
src/pages/careers.astro
src/pages/book-demo.astro
src/pages/login.astro
src/pages/product.astro
src/pages/cookie-policy.astro
src/pages/blog/ (hela mappen)
src/pages/documentation/ (hela mappen)
src/pages/case-studies/ (hela mappen)
src/pages/tutorials/ (hela mappen)
```

#### Publika filer att rensa:
- [ ] Placeholder-avatarer
- [ ] Partner-logotyper (om ej används)
- [ ] Blog-bilder

---

## SEO-checklista

- [ ] Alla sidor har unika H1 med sökord
- [ ] Meta descriptions på alla sidor (max 160 tecken)
- [ ] Alt-texter på alla bilder med sökord
- [ ] Intern länkning mellan sidor
- [ ] Schema.org structured data (LocalBusiness)
- [ ] Sitemap genereras korrekt
- [ ] Canonical URLs
- [ ] lang="sv" på alla sidor

---

## Bilder som behövs

| Fil | Beskrivning | Status |
|-----|-------------|--------|
| salaryReport.png | Huvudbild för hero/lönehantering | [ ] Behövs |
| driverReport.png | Föraröversikt med detaljerade profiler | [ ] Behövs |
| configuration.png | Konfigurationsinställningar | [ ] Behövs |
| tk-logga.png | Logotyp | [ ] Behövs |

---

## Innehåll som behövs från användaren

- [ ] Företagsbeskrivning för "Om oss"-sidan
- [ ] Kontaktuppgifter (telefon om relevant)
- [ ] Kundcitat/testimonials
- [ ] Screenshots (salaryReport.png, driverReport.png, configuration.png)
- [ ] Logotyp (tk-logga.png)

---

## Tekniska detaljer

### Färger
- **Primär blå:** blue-600 (#2563eb)
- **Hover blå:** blue-700
- **Grå bakgrund:** gray-50
- **Text primär:** gray-900
- **Text sekundär:** gray-600

### Typografi
- Hero H1: text-4xl → sm:text-5xl → lg:text-6xl
- Sektionsrubriker: text-4xl → sm:text-5xl → lg:text-6xl
- Brödtext: text-lg / text-xl

### Ikoner (Lucide)
Calculator, FileText, Users, Clock, CheckCircle, ArrowRight, Settings, CreditCard, HelpCircle, Shield, Mail, MessageCircle, User, Building, Send, Menu, X, MapPin, Linkedin, ChevronDown, ChevronUp

---

## Navigation efter migrering

### Header
```
Logo | Funktioner | Lösningar | Priser | Om oss | [Logga in] [Testa gratis]
```

### Footer
```
Produkten          Support           Juridiskt
- Funktioner       - FAQ             - Integritetspolicy
- Priser           - Kontakt         - Användarvillkor

© 2024 taxiadministration.se. Alla rättigheter förbehållna.
Utvecklat av Baerell AB | Stockholm, Sverige
```

---

## Arbetsordning (rekommenderad)

1. **FAS 1** - Grundläggande branding (Layout, config)
2. **FAS 2** - Header & Footer
3. **FAS 3** - Startsidan (viktigast för SEO)
4. **FAS 4** - Lösningar-sidan
5. **FAS 5** - Priser-sidan
6. **FAS 6** - Övriga sidor
7. **FAS 7** - Städning och slutkontroll
