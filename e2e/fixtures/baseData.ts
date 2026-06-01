import { test as base } from '@playwright/test';
import { validUser, invalidUser } from './testData';

export const test = base.extend({
  validUser: async ({}, use) => {
    await use(validUser);
  },

  invalidUser: async ({}, use) => {
    await use(invalidUser);
  }
});

export { expect } from '@playwright/test';