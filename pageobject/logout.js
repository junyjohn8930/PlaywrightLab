const { expect } = require('@playwright/test');

class LogoutPage {
    constructor(page) {
        this.page = page;
        this.logOutButton = page.locator("#navLogoutBtn");
    }
         async signout() {
         await this.logOutButton.click();
    }
}

module.exports = { LogoutPage };
