require('dotenv').config();
const { defineConfig } = require("@playwright/test");

const config = defineConfig({
  testDir: "./tests",

  timeout: 40 * 1000,

  expect: {
    timeout: 5000,
  },
  retries: 1,
    workers: 3,

    outputDir: 'test-results',


  reporter: [
    ["html"],
    ["allure-playwright"]
  ],

  use: {
    baseURL: process.env.BASE_URL,
    browserName: "chromium",
    headless: false,
         screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure'
  },
});

module.exports = config;