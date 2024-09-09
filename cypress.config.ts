import { defineConfig } from "cypress"

export default defineConfig({
  e2e: {
    // Configure your E2E tests here
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",

    baseUrl: 'https://id.commeta.uz',
    video: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    retries: {
      runMode: 2,
      openMode: 0,
    },
  },
})