
class FormPage {
    constructor(page) {
        this.page = page;
        this.formsLink = page.locator("//a[@data-testid='nav-forms']");
        this.nameInput = page.getByTestId('input-fullname');
        this.emailInput = page.getByLabel('Email Address');
        this.passInput = page.locator("//input[@id='password']");
        this.phoneInput = page.getByLabel('Phone Number');
        this.dobselector= page.locator("//input[@id='dob']");
        this.countryDropdown = page.locator('#country');
        this.maleRadio = page.locator('#labelMale');
        this.femaleRadio = page.locator('#labelFemale');
        this.javascriptCheckbox = page.locator('#labelJs');
        this.bioInput = page.locator('#bio');
        this.termsCheckbox = page.getByLabel('I agree to the Terms & Conditions');
        this.registerButton = page.getByRole('button', {name: 'Register'});
        this.volumeSlider = page.locator('#volumeSlider');
        this.priceRange = page.locator('#priceRange');
        this.colorPicker = page.locator('#colorPicker');
        this.fileUpload = page.locator('input[type="file"]').first();
        this.autoSuggestInput = page.locator("//input[@id='searchInput']");
        this.frameworkDropdown=page.locator("#multiSelect");
    }

    async openForms() {
        await this.formsLink.click();
    }

    async fillRegistrationForm(details) {
    await this.nameInput.fill(details.name);
    await this.emailInput.fill(details.mail);
    await this.passInput.fill(details.pass);
    await this.phoneInput.fill(details.phone1);
    await this.dobselector.fill(details.dob);
    await this.countryDropdown.selectOption({label: details.country});
     if (details.gender === 'Male') {
        await this.maleRadio.click();
    } else if (details.gender === 'Female') {
        await this.femaleRadio.click();
    }

    if (details.javascript) {
        await this.javascriptCheckbox.check();
    }
    
    await this.bioInput.fill(details.bio);
    if (details.agreeToTerms) {
        await this.termsCheckbox.check();
    }

    await this.registerButton.click();
}
    
   async setSlidersAndRange(details) {
    await this.volumeSlider.fill(details.volume);
    await this.priceRange.fill(details.price);
}

    async selectColor(color) {
    await this.colorPicker.fill(color);
}

    async Upload(path){
        await this.fileUpload.setInputFiles(path.filepath);
    }

    async Suggest(details){
        await this.autoSuggestInput.fill(details.type);
        await this.page.getByRole('option', { name: details.option, exact: true }).click();
    }

    async SelectFrameworks(details) {
    await this.frameworkDropdown.selectOption([
        { label: details.opt1 },
        { label: details.opt2 }
    ]);
}
}

module.exports = { FormPage };
