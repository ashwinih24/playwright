import { test as base, expect } from '@playwright/test';
import testData from '../fixtures/testData.json';
import env from '../../config/env';
// import stage from '../../config/stage.json';
// import qa from '../../config/qa.json';
// import pre-prod from '../../config/pre-prod.json';

const { invalidUser } = testData;

type TestFixtures = {
  validUser: typeof env;
  invalidUser: typeof invalidUser;
};

export const test = base.extend<TestFixtures>({
  validUser: async ({ }, use) => {
    await use(env);
  },

  invalidUser: async ({ }, use) => {
    await use(invalidUser);
  },
});

export { expect };