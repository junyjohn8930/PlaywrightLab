
const { test, expect } = require('../Fixtures/fixtures');
const loginData = require('../Utils/logindata.json');
const { LoginPage } = require('../pageobject/login');
const { FormPage } = require('../pageobject/forms');
const { ShoppingPage } = require('../pageobject/shopping');
const { DatePicker } = require('../pageobject/datepicker');
const { AlertsPage } = require('../pageobject/modalsandalerts');
const { LogoutPage } = require('../pageobject/logout');
const { FramePage } = require('../pageobject/iframes');


test('Verify complete capstone workflow using POM, JSON and fixtures',
    async ({ page, openMenu }) => {

        const loginPage = new LoginPage(page);
        const formPage = new FormPage(page);
        const shoppingPage = new ShoppingPage(page);
        const datepickerPage = new DatePicker(page);
        const alertsPage = new AlertsPage(page);
        const logoutPage = new LogoutPage(page);
        const framesPage = new FramePage(page);
        

       //1. Login
        await loginPage.navigate();
        await loginPage.login(loginData.validUser.email,loginData.validUser.password);
        await loginPage.verifySuccessfulLogin();

        // 2. Registration form
        await openMenu();
        await formPage.openForms();
        await formPage.fillRegistrationForm(loginData.registration);
        
        // 3. Slider, range and color
       await formPage.setSlidersAndRange(loginData.sliders);
        
        // 4. File upload
        await formPage.Upload(loginData.path);

        // 5. Auto-suggest
        await formPage.Suggest(loginData.autosuggest);
        // 6. Multiple framework selection
        await formPage.SelectFrameworks(loginData.multi);
        // 7. Shopping workflow
        await openMenu();
        await shoppingPage.openShopping();
        await shoppingPage.addProductToCart(loginData.shopping.productName);
        await shoppingPage.applyCoupon(loginData.shopping.coupon);
        await shoppingPage.proceedToCheckout();
        await shoppingPage.fillCheckoutDetails(loginData.validCheckout);
        await shoppingPage.continueToPayment();
        await shoppingPage.placeOrder(loginData.validCheckout.paymentMethod);
        // Verify the expected order confirmation here.
        await shoppingPage.continueShoppingAfterOrder();

        //frames
        await openMenu();
        await framesPage.openFrames();

        // Alerts
        await openMenu();
        await alertsPage.openAlerts();
        await alertsPage.openModals(loginData.alerts.modalMessage);
        await alertsPage.Confirmbutton();
        await alertsPage.openPrompts(loginData.alerts.promptMessage);
        await alertsPage.Nested();

        //  Date picker
        await openMenu();
        await datepickerPage.openDatePicker();
        await datepickerPage.selectCalanderPicker(loginData.date);
        await datepickerPage.selectTypableDate(loginData.date);
        
        //logout
       await logoutPage.signout();
    
    }
);
