const { expect } = require('@playwright/test');
const { readExcelData } = require('../Utils/excel');

class FramePage {
    constructor(page) {
        this.page = page;
        this.frameLink=page.locator("//a[@data-testid='nav-frames']");
        this.nameInput = page.locator('iframe').first().contentFrame().getByPlaceholder('Enter your name').first();
        this.messageInput = page.locator('iframe').first().contentFrame().getByPlaceholder('Write a message...').first();
        this.priorityInput= page.locator('iframe').first().contentFrame().locator('#iframePriority').first();
        this.markCheck= page.locator('iframe').first().contentFrame().locator('#iframeUrgent').first();
        this.submit=page.locator('iframe').first().contentFrame().locator('#iframeSubmitBtn').first();
        

    }
     async openFrames() {
        await this.frameLink.click();
        const users = await readExcelData("C:/Users/junyj/OneDrive/Desktop/ENTRI Class/CapProject.xlsx","Sheet1" );
        const data = users[0];
        await this.nameInput.fill(data.Name);
        await this.messageInput.fill(data.Message); 
        await this.priorityInput.selectOption(data.Priority);
        await this.markCheck.check();
        await this.submit.click();
        
    }
}

module.exports = { FramePage };