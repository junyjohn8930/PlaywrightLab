
class DatePicker {
    constructor(page) {
        this.page = page;
        this.datePickerLink = page.locator("//a[@data-testid='nav-datepicker']");
        this.calanderPicker= page.locator("//input[@id='datePickerInput']");
        this.prevMonthButton = page.locator('#dpPrevMonth');
        this.monthYear = page.locator('#dpMonthYear');
        this.typeCalender=page.locator('#typedDateInput');
        
    }

    async openDatePicker() {
        await this.datePickerLink.click();
    }

   async selectCalanderPicker(date) {
    await this.calanderPicker.click();
    const targetMonthYear = `${date.mm} ${date.year}`;
    while ((await this.monthYear.textContent()).trim() !== targetMonthYear) {
        await this.prevMonthButton.click();
    }
     await this.page.getByTestId(`dp-day-${Number(date.dd)}`).click();
         }

    async selectTypableDate(date){
        await this.typeCalender.fill(date.typable);
    }

}

module.exports = { DatePicker};
