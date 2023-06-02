import BasePage from "./base.page";

class formPage extends BasePage {

    static get url(){
        return "/automation-practice-form";
    }
    static get firstName() {
        return cy.get("#firstName");
    }
    static get lastName() {
        return cy.get("#lastName");
    }
    static get userEmail() {
        return cy.get("#userEmail");
    }
    static get genderInput() {
        return cy.get('label[for="gender-radio-1"]');
    }
    static get userNumber() {
        return cy.get("#userNumber");
    }
    static get inputBirth() {
        return cy.get('#dateOfBirthInput');
    }
    static get selectMonth() {
        return cy.get('.react-datepicker__month-select');
    }
    static get selectYear() {
        return cy.get('.react-datepicker__year-select');
    }
    static get selectDay() {
        return cy.get('.react-datepicker__day').contains('28');
    }
    static get selectSubject() {
        return cy.get("#subjectsContainer");
    }
    static get selectMusic() {
        return cy.get(".custom-control-label").contains("Music");
    }
    static get uploadPicture() {
        return cy.get("#uploadPicture");
    }
    static get currentAddress() {
        return cy.get("#currentAddress");
    }
    static get buttonSubmit() {
        return cy.get("#submit");
    }
    
    
    
    


}
export default formPage;