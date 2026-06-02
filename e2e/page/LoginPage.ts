import { Page } from '@playwright/test';
import env from '../../config/env'; // 
export class LoginPage {
  constructor(private page: Page) { }

  async navigate() {
    await this.page.goto(env.BASE_URL);
    await this.page.waitForSelector('#userName', { state: 'visible', timeout: 30000 });
  }

  useremailInput() {
    return this.page.locator('#userName');
  }

  passwordInput() {
    return this.page.locator('input[type="password"]');
  }

  submitButton() {
    return this.page.locator('#submitbutton');
  }

  async fillUseremail(useremail: string) {
    await this.useremailInput().fill(useremail);
  }

  async fillPassword(password: string) {
    await this.passwordInput().fill(password);
  }

  async clickLogin() {
    await this.submitButton().click();
  }

  async login(useremail: string, password: string) {
    await this.fillUseremail(useremail);
    await this.fillPassword(password);
    await this.clickLogin();
  }
}