
import { test, expect } from '@playwright/test';

test.describe('Al Imran Enterprises Visual Verification', () => {
  test('Mobile Menu and Navigation', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('http://localhost:3000');

    // Check for hamburger button
    const hamburger = page.locator('button:has(svg.lucide-menu)');
    await expect(hamburger).toBeVisible();

    // Open menu
    await hamburger.click();
    await page.screenshot({ path: 'mobile_menu_open.png' });

    // Open Brands accordion
    const brandsAccordion = page.locator('button:has-text("Brands")');
    await brandsAccordion.click();
    await page.screenshot({ path: 'mobile_menu_accordion.png' });
  });

  test('Blog Post with Quote Form', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('http://localhost:3000/blog/sugar-mill-centrifugal-machine-parts');

    // Scroll to bottom
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'blog_post_with_form.png' });

    const quoteForm = page.locator('form');
    await expect(quoteForm).toBeVisible();
  });

  test('Updated Quote Form Fields', async ({ page }) => {
    await page.goto('http://localhost:3000/quote');
    await page.screenshot({ path: 'updated_quote_form.png' });

    await expect(page.locator('label:has-text("Company Name")')).toBeVisible();
    await expect(page.locator('label:has-text("Company Address")')).toBeVisible();
  });
});
