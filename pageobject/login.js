const { expect } = require('@playwright/test');

class LoginPage {
    constructor(page) {
        this.page = page;
        this.loginButton=page.locator("#navLoginBtn");
        this.emailInput = page.getByPlaceholder('you@example.com');
        this.passwordInput = page.getByPlaceholder('Enter your password');
        this.signInButton = page.getByRole('button', { name: 'Sign In'});
        this.homeBack= page.getByRole('link', { name: 'Back to Home' });
           }

    async navigate() {
       await this.page.goto('/');
       await this.loginButton.click();
        
    }
    async login(email, password) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.signInButton.click();
    }
    async verifySuccessfulLogin() {
        await expect(this.homeBack).toBeVisible();
        await this.homeBack.click();
    }
}

module.exports = { LoginPage };
