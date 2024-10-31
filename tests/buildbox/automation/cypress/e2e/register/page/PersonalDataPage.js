class PersonalDataPage {
    fillPersonalData(firstName, lastName, birthDate, cpf, email, password) {
        cy.get('[data-cy="button-btn-enroll"]').should('be.visible').click();
        cy.xpath('//*[@id="signup-personal-data-firstName"]').should('be.visible').type(firstName);
        cy.get('[data-cy="input-signup-personal-data-lastName"]').should('be.visible').type(lastName);
        cy.get('[data-cy="input-signup-personal-data-birthDate"]').should('be.visible').type(birthDate);
        cy.get('[data-cy="input-signup-personal-data-cpf"]').should('be.visible').type(cpf);
        cy.get('[data-cy="input-signup-personal-data-email"]').should('be.visible').type(email);
        cy.get('[data-cy="input-signup-personal-data-email-confirm"]').should('be.visible').type(email);
        cy.get('[data-cy="input-signup-personal-data-password"]').should('be.visible').type(password);
        cy.get('[data-cy="input-signup-personal-data-password-confirm"]').type(password);

        this.selectEnglishLevel();

        this.agreeWithTermsAndConditions();

        this.confirmDataAndGoToTheNextStep();
    }

    selectEnglishLevel() {
        cy.xpath('/html/body/div/div[2]/div[3]/div[1]/form/div[1]/div/div[5]/div[1]/div/div/button').click();
        cy.get('#dropdown-button-1 > .overflow-y-scroll > :nth-child(3)').click();
    }

    agreeWithTermsAndConditions() {
        cy.get('[data-cy="input-signup-personal-data-lgpd"]').click();
    }

    confirmDataAndGoToTheNextStep() {
        cy.get('[data-cy="button-signup_submit_button_1"]').should('exist').click();
    }
}

export default PersonalDataPage;