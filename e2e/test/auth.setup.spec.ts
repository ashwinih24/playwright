// import { test as setup, expect } from '@playwright/test';

// setup('Login UserOne', async ({ page }) => {
//     await page.goto('/login');

//     await page.locator('#email').fill('user@email.com');
//     await page.locator('#password').fill('password');

//     await page.locator('#submitbutton').click();

//     await expect(page).not.toHaveURL(/login/);

//     await page.context().storageState({
//         path: 'fixture/.auth/userOne.json',
//     });
// });