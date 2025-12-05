import { test, expect } from '@playwright/test';

// Alla sidor som ska testas
const pages = [
  { path: '/', name: 'Startsida' },
  { path: '/losningar', name: 'Lösningar' },
  { path: '/priser', name: 'Priser' },
  { path: '/kontakt', name: 'Kontakt' },
  { path: '/om-oss', name: 'Om oss' },
  { path: '/partners', name: 'Partners' },
  { path: '/integritetspolicy', name: 'Integritetspolicy' },
  { path: '/anvandarvillkor', name: 'Användarvillkor' },
];

test.describe('Smoke-tester', () => {
  // Testa att alla sidor laddar med status 200
  for (const page of pages) {
    test(`${page.name} (${page.path}) laddar korrekt`, async ({ page: browserPage }) => {
      const response = await browserPage.goto(page.path);
      expect(response?.status()).toBe(200);
    });
  }
});

test.describe('Navigering', () => {
  test('Header-navigering fungerar', async ({ page }) => {
    await page.goto('/');

    // Klicka på Lösningar i navigeringen
    await page.click('nav >> text=Lösningar');
    await expect(page).toHaveURL(/losningar/);

    // Klicka på Priser
    await page.click('nav >> text=Priser');
    await expect(page).toHaveURL(/priser/);

    // Klicka på Om oss
    await page.click('nav >> text=Om oss');
    await expect(page).toHaveURL(/om-oss/);
  });

  test('Logo-länk går till startsidan', async ({ page }) => {
    await page.goto('/priser');
    await page.click('header a >> nth=0');
    await expect(page).toHaveURL('/');
  });
});

test.describe('404-sida', () => {
  test('404-sida visas för okänd URL', async ({ page }) => {
    const response = await page.goto('/denna-sida-finns-inte-alls');
    // Astro returnerar 404 för okända sidor
    expect(response?.status()).toBe(404);
  });
});

test.describe('SEO', () => {
  test('Startsidan har title-tagg', async ({ page }) => {
    await page.goto('/');
    const title = await page.title();
    expect(title.length).toBeGreaterThan(0);
  });

  test('Startsidan har meta description', async ({ page }) => {
    await page.goto('/');
    const metaDescription = await page.getAttribute('meta[name="description"]', 'content');
    expect(metaDescription).toBeTruthy();
    expect(metaDescription!.length).toBeGreaterThan(50);
  });
});

test.describe('Responsivitet', () => {
  test('Sidan renderas korrekt på mobil', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Kontrollera att header är synlig
    await expect(page.locator('header')).toBeVisible();
    
    // Kontrollera att hero-sektionen är synlig
    await expect(page.locator('h1')).toBeVisible();
  });

  test('Sidan renderas korrekt på desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');
    
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('h1')).toBeVisible();
  });
});

test.describe('Footer', () => {
  test('Footer innehåller viktiga länkar', async ({ page }) => {
    await page.goto('/');
    
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    
    // Kontrollera att policy-länkar finns
    await expect(footer.locator('text=Integritetspolicy')).toBeVisible();
    await expect(footer.locator('text=Användarvillkor')).toBeVisible();
  });
});
