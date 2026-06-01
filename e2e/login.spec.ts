import { LoginPage } from './support/loginPage';
import { test, expect } from './fixtures/baseData';

test('Valid Login', async ({ page, validUser }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login(
    validUser.username,
    validUser.password
  );

  await expect(page).not.toHaveURL(/login/);
});

test('Invalid Login', async ({ page, invalidUser }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login(
    invalidUser.username,
    invalidUser.password
  );

  await expect(page.locator('body')).toContainText(/invalid|error|incorrect/i);
});