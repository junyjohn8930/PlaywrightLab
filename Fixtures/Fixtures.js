const { test: base, expect } = require('@playwright/test');
const test = base.extend({
    openMenu: async ({ page }, use) => {
        await use(async () => {
            await page.getByRole('link', { name: 'menu' }).click();
        });
    }
});

module.exports = { test, expect };

