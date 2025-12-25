import { test, expect } from '@playwright/test';

test.describe('Mobilmeny och Språkväljare', () => {
  test.beforeEach(async ({ page }) => {
    // Sätt mobil viewport
    await page.setViewportSize({ width: 375, height: 667 });
  });

  test('Hamburgermeny öppnas och stängs korrekt', async ({ page }) => {
    await page.goto('/');

    const menuButton = page.locator('#menu-toggle');
    const mobileMenu = page.locator('#mobile-menu');

    // Kontrollera att menyn är stängd initialt
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    await expect(mobileMenu).not.toBeVisible();

    // Öppna menyn
    await menuButton.click();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    await expect(mobileMenu).toBeVisible();

    // Stäng menyn
    await menuButton.click();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    await expect(mobileMenu).not.toBeVisible();
  });

  test('Meny stängs med Escape-tangent', async ({ page }) => {
    await page.goto('/');

    const menuButton = page.locator('#menu-toggle');
    const mobileMenu = page.locator('#mobile-menu');

    // Öppna menyn
    await menuButton.click();
    await expect(mobileMenu).toBeVisible();

    // Tryck Escape
    await page.keyboard.press('Escape');
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    await expect(mobileMenu).not.toBeVisible();
  });

  test('Språkväljare i mobil expanderar och kollapsar', async ({ page }) => {
    await page.goto('/');

    const menuButton = page.locator('#menu-toggle');
    const mobileMenu = page.locator('#mobile-menu');

    // Öppna mobilmenyn
    await menuButton.click();
    await expect(mobileMenu).toBeVisible();

    // Hitta språkväljare-details
    const languageDetails = mobileMenu.locator('details');
    const languageSummary = languageDetails.locator('summary');

    // Verifiera att språkväljaren finns
    await expect(languageSummary).toBeVisible();

    // Expandera språkväljaren
    await languageSummary.click();
    await expect(languageDetails).toHaveAttribute('open', '');

    // Kontrollera att språkalternativ visas
    const englishLink = languageDetails.locator('a:has-text("English")');
    await expect(englishLink).toBeVisible();

    // Kollaps språkväljaren
    await languageSummary.click();
    await expect(languageDetails).not.toHaveAttribute('open', '');
  });

  test('Språkval navigerar till rätt språkversion', async ({ page }) => {
    await page.goto('/');

    const menuButton = page.locator('#menu-toggle');
    const mobileMenu = page.locator('#mobile-menu');

    // Öppna mobilmenyn
    await menuButton.click();

    // Expandera språkväljaren
    const languageDetails = mobileMenu.locator('details');
    await languageDetails.locator('summary').click();

    // Klicka på engelska
    const englishLink = languageDetails.locator('a:has-text("English")');
    await englishLink.click();

    // Verifiera navigering till engelsk version
    await expect(page).toHaveURL(/\/en\/?/);
  });

  test('Meny stängs efter språkval', async ({ page }) => {
    await page.goto('/');

    const menuButton = page.locator('#menu-toggle');
    const mobileMenu = page.locator('#mobile-menu');

    // Öppna mobilmenyn
    await menuButton.click();
    await expect(mobileMenu).toBeVisible();

    // Expandera språkväljaren och välj språk
    const languageDetails = mobileMenu.locator('details');
    await languageDetails.locator('summary').click();
    await languageDetails.locator('a:has-text("English")').click();

    // Vänta på navigering
    await page.waitForURL(/\/en\/?/);

    // Verifiera att menyn är stängd efter sidladdning
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });

  test('Meny-state återställs mellan sidnavigeringar', async ({ page }) => {
    await page.goto('/');

    const menuButton = page.locator('#menu-toggle');
    const mobileMenu = page.locator('#mobile-menu');

    // Öppna menyn och klicka på en länk
    await menuButton.click();
    await expect(mobileMenu).toBeVisible();

    // Klicka på en navlänk
    await mobileMenu.locator('a:has-text("Lösningar")').click();

    // Vänta på navigering
    await expect(page).toHaveURL(/losningar/);

    // Kontrollera att menyn är stängd på ny sida
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });

  test('Hamburger-ikon är synlig på mobil, dold på desktop', async ({ page }) => {
    const menuButton = page.locator('#menu-toggle');

    // Mobil: hamburger ska vara synlig
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await expect(menuButton).toBeVisible();

    // Desktop: hamburger ska vara dold
    await page.setViewportSize({ width: 1200, height: 800 });
    await expect(menuButton).not.toBeVisible();
  });

  test('Alla språkalternativ visas i mobilmenyn', async ({ page }) => {
    await page.goto('/');

    const menuButton = page.locator('#menu-toggle');
    await menuButton.click();

    const languageDetails = page.locator('#mobile-menu details');
    await languageDetails.locator('summary').click();

    // Kontrollera att alla språk finns
    const expectedLanguages = ['Svenska', 'English', 'العربية', 'Soomaali', 'فارسی'];
    for (const lang of expectedLanguages) {
      await expect(languageDetails.locator(`a:has-text("${lang}")`)).toBeVisible();
    }
  });

  test('Aktivt språk markeras i språkväljaren', async ({ page }) => {
    // Gå till engelsk version
    await page.goto('/en');

    const menuButton = page.locator('#menu-toggle');
    await menuButton.click();

    const languageDetails = page.locator('#mobile-menu details');
    await languageDetails.locator('summary').click();

    // Verifiera att engelska har aktiv-markering
    const englishLink = languageDetails.locator('a:has-text("English")');
    await expect(englishLink).toHaveAttribute('aria-current', 'true');
    await expect(englishLink).toHaveClass(/bg-blue-50/);
  });
});
