import { test, expect } from '@playwright/test';

test('Back Office Login', async ({ page }) => {
  await page.goto('https://stagingcis.lendingwise.com/login/backoffice');

  await page.locator('#userName').fill('vaibhavp@testrig.co.in');
  await page.locator('input[type="password"]').fill('vsp212303');

  await page.getByRole('button').click();

  await page.waitForLoadState('networkidle');

  await expect(page).not.toHaveURL(/login/);

});