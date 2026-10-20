class ShoppingPage {
    constructor(page) {
        this.page = page;

        this.shoppingLink = page.getByRole('link', {name: 'Shopping'});

        this.couponInput = page.getByPlaceholder(/coupon|promo/i);
        this.applyCouponButton = page.getByRole('button', {name: /apply/i});
        this.checkoutButton = page.getByRole('button', {name: /checkout/i});
        this.fullNameInput = page.locator('#shopFullName');
        this.addressInput = page.locator('#shopAddress');
        this.cityInput = page.locator('#shopCity');
        this.pincodeInput = page.locator('#shopPincode');
        this.phoneInput = page.locator('#shopPhone');
        this.paymentButton = page.getByRole('button', {name: 'Continue to Payment'});
        this.placeOrderButton = page.getByRole('button', {name: 'Place Order'});
        this.continueShopping = page.getByRole('button', {name: 'Continue Shopping'});
       
    }

    async openShopping() {
        await this.shoppingLink.click();
    }
   
    async addProductToCart(productName) {
        this.productHeading = this.page.getByRole('heading', {name: productName,exact: true});
        this.productCard = this.productHeading.locator('xpath=ancestor::*[.//button[normalize-space()="Add to Cart"]][1]');
        await this.productCard.getByRole('button', {name: 'Add to Cart',exact: true}).click();
    }



    async applyCoupon(coupon) {
        await this.couponInput.fill(coupon);
        await this.applyCouponButton.click();
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }

    async fillCheckoutDetails(details) {
        await this.fullNameInput.fill(details.fullName);
        await this.addressInput.fill(details.address);
        await this.cityInput.fill(details.city);
        await this.pincodeInput.fill(details.postalCode);
        await this.phoneInput.fill(details.phone);
    }

    async continueToPayment() {
        await this.paymentButton.click();
    }

    async placeOrder(paymentMethod) {
        await this.page.getByLabel(paymentMethod).check();
        await this.placeOrderButton.click();
    }

    async continueShoppingAfterOrder() {
        await this.continueShopping.click();
    }
}

module.exports = { ShoppingPage };