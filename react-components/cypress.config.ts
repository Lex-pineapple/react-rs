import { defineConfig } from 'cypress';
import codeCoverage from '@cypress/code-coverage/task';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      codeCoverage(on, config);
      return config;
    },
  },
});
