

import { test as base, expect } from '@playwright/test';
import testData from '../testData/testData.json';
import user from '../../config/user.json';

const { invalidUser } = testData;

type TestFixtures = {
  validUser: typeof user;
  invalidUser: typeof invalidUser;
};

export const test = base.extend<TestFixtures>({
  validUser: async ({ }, use) => {
    await use(user);
  },

  invalidUser: async ({ }, use) => {
    await use(invalidUser);
  },
});

export { expect };