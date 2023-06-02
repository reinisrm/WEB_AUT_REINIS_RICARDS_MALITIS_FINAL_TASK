import formPage from "../../pageObjects/formPage.page";

describe("Elements", () => {

    context("Text box scenarios", () => {
        beforeEach(() => {     
            formPage.visit();
        });

        it("Automation Practice form", () => {
            //Name input
            formPage.firstName.type("Name");
            //Surname input
            formPage.lastName.type("Surname");
            //Email input
            formPage.userEmail.type("email@email.com");
            //Gender input
            formPage.genderInput.click();
            //Number input
            formPage.userNumber.type("2123456789");
            //Select date "28 Feb 1930"
            formPage.inputBirth.click();
            formPage.selectMonth.select('2');
            formPage.selectYear.select('1930');
            formPage.selectDay.click();
            //Set Subjects to Economics
            formPage.selectSubject.type("Economics{enter}");
            //Set hobbies to music
            formPage.selectMusic.click();
            //Upload picture
            formPage.uploadPicture.selectFile('files/music.jpg');
            //Current Address
            formPage.currentAddress.type("Imaginary Address 49");
            //Select state
            cy.get('#state').should('be.visible').click({ force: true });
            cy.get('#state input[type="text"]').type('NCR', { force: true }); 
            cy.get('.css-11unzgr').contains('NCR').click({ force: true });
            //Select city
            cy.get('#city').should('be.visible').click({ force: true });
            cy.get('#city input[type="text"]').type('Delhi', { force: true });
            cy.get('.css-11unzgr').contains('Delhi').click({ force: true });
            //Submit button click
            formPage.buttonSubmit.click({ force: true });

            //Validation 1
            //Validate Student name, surname
            cy.get('table tbody tr:nth-child(1) td:nth-child(2)').should('contain', 'Name Surname');
            //Validate Student Email
            cy.get('table tbody tr:nth-child(2) td:nth-child(2)').should('contain', 'email@email.com');
            //Validate Gender
            cy.get('table tbody tr:nth-child(3) td:nth-child(2)').should('contain', 'Male');
            //Validate Mobile
            cy.get('table tbody tr:nth-child(4) td:nth-child(2)').should('contain', '2123456789');
            //Validate Date of Birth
            cy.get('table tbody tr:nth-child(5) td:nth-child(2)').should('contain', '28 February,1930');
            //Validate Subjects
            cy.get('table tbody tr:nth-child(6) td:nth-child(2)').should('contain', 'Economics');
            //Validate Hobbies
            cy.get('table tbody tr:nth-child(7) td:nth-child(2)').should('contain', 'Music');
            //Validate Picture
            cy.get('table tbody tr:nth-child(8) td:nth-child(2)').should('contain', 'music.jpg');
            //Validate Address
            cy.get('table tbody tr:nth-child(9) td:nth-child(2)').should('contain', 'Imaginary Address 49');
            //Validate State and City
            cy.get('table tbody tr:nth-child(10) td:nth-child(2)').should('contain', 'NCR Delhi');
            
            

        });
    });



});
  