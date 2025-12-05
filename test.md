# Testplan för taxiadministration.se

## Översikt

Detta är en statisk Astro-landningssida med 9 sidor och 7 komponenter. Eftersom sidan saknar backend-logik, användarautentisering och komplexa interaktioner är behovet av omfattande testning begränsat.

## Behöver vi tester?

### Kort svar: Minimal testning räcker

För en statisk landningssida som denna är **manuell testning + automatisk build-validering** oftast tillräckligt. Här är varför:

| Faktor | Vår sida | Konsekvens |
|--------|----------|------------|
| Backend-logik | Nej | Ingen affärslogik att testa |
| Formulär med validering | Enkel kontaktsida | Minimal testning behövs |
| Dynamiskt innehåll | Nej, statiskt | Inget att testa runtime |
| Användarsessioner | Nej | Ingen state att validera |
| Betalningar | Nej | Inga kritiska flöden |

### När testning ÄR värt det

1. **Om vi lägger till dynamiska funktioner** (prisberäknare, bokningsformulär)
2. **Vid frekvent refaktorering** av komponenter
3. **Om flera utvecklare arbetar** på projektet
4. **Inför större lanseringar** för att fånga regressioner

---

## Rekommenderad teststrategi

### Nivå 1: Grundläggande (Rekommenderas nu)

**Automatisk build-validering** - Redan inbyggt i Astro:

```bash
npm run build
```

Detta fångar:
- Trasiga imports
- TypeScript-fel
- Saknade filer
- Ogiltigt HTML/Astro-syntax

**Manuell checklista före deploy:**

- [ ] Alla sidor laddar (index, losningar, priser, kontakt, om-oss, partners)
- [ ] Navigering fungerar
- [ ] Responsiv design (mobil, tablet, desktop)
- [ ] Bilder och ikoner visas
- [ ] Kontaktformulär skickar (om implementerat)
- [ ] SEO-taggar finns (title, meta description, og:image)
- [ ] 404-sidan fungerar
- [ ] Länkar till externa resurser fungerar

---

### Nivå 2: Lätt automatisering (Vid behov)

Om du vill ha automatiserade tester, **Playwright** är bäst för Astro enligt [officiell dokumentation](https://docs.astro.build/en/guides/testing/).

#### Installation

```bash
npm install -D @playwright/test
npx playwright install
```

#### Konfiguration (`playwright.config.ts`)

```typescript
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  webServer: {
    command: 'npm run preview',
    url: 'http://localhost:4321',
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:4321',
  },
});
```

#### Enkla smoke-tester (`tests/smoke.spec.ts`)

```typescript
import { test, expect } from '@playwright/test';

const pages = [
  { path: '/', title: 'taxiadministration' },
  { path: '/losningar', title: 'Lösningar' },
  { path: '/priser', title: 'Priser' },
  { path: '/kontakt', title: 'Kontakt' },
  { path: '/om-oss', title: 'Om oss' },
  { path: '/partners', title: 'Partners' },
];

// Testa att alla sidor laddar
for (const page of pages) {
  test(`${page.path} laddar korrekt`, async ({ page: browserPage }) => {
    const response = await browserPage.goto(page.path);
    expect(response?.status()).toBe(200);
    await expect(browserPage).toHaveTitle(new RegExp(page.title, 'i'));
  });
}

// Testa navigering
test('navigering fungerar', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Lösningar');
  await expect(page).toHaveURL('/losningar');
});

// Testa responsivitet
test('mobilmeny fungerar', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/');
  // Lägg till test för hamburger-meny om sådan finns
});

// Testa 404
test('404-sida visas för okänd URL', async ({ page }) => {
  await page.goto('/sida-som-inte-finns');
  await expect(page.locator('body')).toContainText('404');
});
```

#### Kör tester

```bash
# Lägg till i package.json scripts:
"test": "playwright test",
"test:ui": "playwright test --ui"
```

```bash
npm run build && npm run test
```

---

### Nivå 3: Komponenttester (Endast vid behov)

Om du har komplex komponentlogik, använd **Vitest** med Astro Container API. Se [Angelikas guide](https://angelika.me/2025/02/01/astro-component-unit-tests/).

**OBS:** Container API är experimentell och kan ändras.

---

## Testpyramiden för denna sida

```
        /\
       /  \   E2E (Playwright) - 5-10 tester
      /----\  Smoke tests för kritiska sidor
     /      \
    /--------\  Integration - EJ BEHÖVS
   /          \ (ingen backend-logik)
  /------------\
 /   Unit Tests \ - EJ BEHÖVS
/________________\ (ingen komplex logik)

     ↑ BUILD ↑
  (Astros validering)
```

---

## CI/CD-integration (Valfritt)

Om du använder GitHub Actions, lägg till `.github/workflows/test.yml`:

```yaml
name: Test

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - run: npm ci
      - run: npm run build
      
      # Endast om Playwright är installerat:
      # - run: npx playwright install --with-deps
      # - run: npm run test
```

---

## Rekommendation

**För denna landningssida rekommenderar jag:**

1. **Nu:** Förlita dig på `npm run build` + manuell checklista
2. **Senare:** Lägg till Playwright smoke-tester om:
   - Du gör frekventa ändringar
   - Du lägger till dynamiska funktioner
   - Du vill ha trygghet vid deploy

**Uppskattad tid för implementation:**
- Nivå 1 (manuell): 0 minuter (redan klart)
- Nivå 2 (Playwright): 30-60 minuter för setup + tester
- Nivå 3 (Vitest): Inte rekommenderat för denna typ av sida

---

## Källor

- [Astro Testing Documentation](https://docs.astro.build/en/guides/testing/)
- [Astro Component Unit Tests Guide](https://angelika.me/2025/02/01/astro-component-unit-tests/)
- [Best Practices for E2E Testing 2025](https://www.bunnyshell.com/blog/best-practices-for-end-to-end-testing-in-2025/)
