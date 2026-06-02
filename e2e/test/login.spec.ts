
import { test, expect } from '../fixtures/baseData';
import { LoginPage } from '../page/LoginPage';
import testData from '../fixtures/testData.json';

test.describe('Login Tests', () => {

  test("check input types", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();

    await expect(loginPage.useremailInput()).toHaveAttribute('type', 'email');
    await expect(loginPage.passwordInput()).toHaveAttribute('type', 'password');
  });


  test('Invalid Login', async ({ page, invalidUser }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.fillUseremail(invalidUser.useremail);
    await loginPage.fillPassword(invalidUser.password);
    await loginPage.clickLogin();

    const toast = page.locator('.toast-message');

    await expect(toast).toHaveText(
      'Account Not Found / Invalid Password'
    );
    await expect(page).not.toHaveURL(/dashboard/i);
  })

  test("invalid email format", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.fillUseremail(testData.invalidEmail.useremail);
    await loginPage.fillPassword(testData.invalidEmail.password);
    const useremailError = page.locator('#userName-error');

    await expect(useremailError).toHaveText('Please Enter Valid Email');
  })

  test('Valid Login', async ({ page, validUser }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.fillUseremail(validUser.useremail);
    await loginPage.fillPassword(validUser.password);
    await loginPage.clickLogin();
    await expect(page).toHaveURL(/dashboard/i);
  });

})