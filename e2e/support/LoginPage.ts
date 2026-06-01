import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://stagingcis.lendingwise.com/login/backoffice');
  }

  async login(username: string, password: string) {
    await this.page.locator('#userName').fill(username);
    await this.page.locator('input[type="password"]').fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }
}