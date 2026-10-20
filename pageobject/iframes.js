
const path = require('path');
const { readExcelData } = require('../Utils/excel');

class FramePage {
    constructor(page) {
        this.page = page;

        this.frameLink = page.locator("//a[@data-testid='nav-frames']");

        this.frame = page.locator('iframe').first().contentFrame();

        this.nameInput = this.frame.getByPlaceholder('Enter your name').first();
        this.messageInput = this.frame.getByPlaceholder('Write a message...').first();
        this.priorityInput = this.frame.locator('#iframePriority');
        this.markCheck = this.frame.locator('#iframeUrgent');
        this.submit = this.frame.locator('#iframeSubmitBtn');
    }

    async openFrames() {
        await this.frameLink.click();

        const filePath = path.join(__dirname, '../CapProject.xlsx');

        const users = await readExcelData(filePath, 'Sheet1');
        const data = users[0];

        await this.nameInput.fill(String(data.Name ?? ''));
        await this.messageInput.fill(String(data.Message ?? ''));
        await this.priorityInput.selectOption(String(data.Priority));
        await this.markCheck.check();
        await this.submit.click();
    }
}

module.exports = { FramePage };
