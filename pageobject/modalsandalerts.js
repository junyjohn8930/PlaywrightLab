class AlertsPage {
    constructor(page) {
        this.page = page;
        this.AlertsLink = page.locator("//a[normalize-space()='Modals & Alerts']");
        this.openModal=page.locator("#openModalBtn");
        this.modalMessage=page.getByPlaceholder('Type something...');
        this.modalConfirm=page.locator("#modalConfirm");
        this.openConfirm=page.locator("#openConfirmBtn");
        this.openPrompt=page.locator("#openPromptBtn");
        this.promtMessage=page.locator("#promptInput");
        this.openNested=page.locator("#openNestedBtn");
        this.nestedInner=page.locator("#openNestedInner");
        this.closeNestedModal=page.locator("#closeNestedModal");
        this.modalClose=page.locator("#modalClose");
    }
    async openAlerts() {
        await this.AlertsLink.click();

    }
    async openModals(modalMessage) {
        await this.openModal.click();
        await this.modalMessage.fill(modalMessage);
        await this.modalConfirm.click();
    } 

     async Confirmbutton() {
        await this.openConfirm.click();
        await this.modalConfirm.click();
         
    }
    
     async openPrompts(promptMessage) {
        await this.openPrompt.click();
        await this.promtMessage.fill(promptMessage);
        await this.modalConfirm.click();
    }
    
     async Nested() {
        await this.openNested.click();
        await this.nestedInner.click();
        await this.closeNestedModal.click();
        await this.modalClose.click();
    }
}

module.exports = { AlertsPage };