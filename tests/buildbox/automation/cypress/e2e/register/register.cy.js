import personalData from '../../fixtures/personalData'
import addressData from '../../fixtures/addressData';

describe(`Buildbox registration`, () => {
    beforeEach(() => {
        cy.visit('https://qastage.buildbox.one/18/cadastro');
    });

    it('Shoud register with sucess', () => {
        const { firstName, 
            lastName, 
            birthDate, 
            cpf, 
            email, 
            password} = personalData;
        
        const {cep} = addressData;

        cy.get('[data-cy="button-btn-enroll"]').should('be.visible').click();
        cy.xpath('//*[@id="signup-personal-data-firstName"]').should('be.visible').type(firstName);
        cy.get('[data-cy="input-signup-personal-data-lastName"]').should('be.visible').type(lastName);
        cy.get('[data-cy="input-signup-personal-data-birthDate"]').should('be.visible').type(birthDate);
        cy.get('[data-cy="input-signup-personal-data-cpf"]').should('be.visible').type(cpf);
        cy.get('[data-cy="input-signup-personal-data-email"]').should('be.visible').type(email);
        cy.get('[data-cy="input-signup-personal-data-email-confirm"]').should('be.visible').type(email);
        cy.get('[data-cy="input-signup-personal-data-password"]').should('be.visible').type(password);
        cy.get('[data-cy="input-signup-personal-data-password-confirm"]').type(password);
        
        cy.xpath('/html/body/div/div[2]/div[3]/div[1]/form/div[1]/div/div[5]/div[1]/div/div/button').click();
        cy.get('#dropdown-button-1 > .overflow-y-scroll > :nth-child(3)').click();

        cy.get('[data-cy="input-signup-personal-data-lgpd"]').click();
        
        cy.get('[data-cy="button-signup_submit_button_1"]').should('exist').click();

        // Address page
        cy.xpath('//*[@id="signup-address-cep"]').type(cep);        
        cy.xpath('//*[@id="signup-address-country"]').should('exist');
        cy.xpath('//*[@id="signup-address-state"]').should('exist');
        cy.xpath('//*[@id="signup-address-city"]').should('exist');
        cy.xpath('//*[@id="signup-address-neighborhood"]');
        cy.xpath('//*[@id="signup-address-street"]');
        cy.xpath('//*[@id="signup-address-number"]');
        cy.xpath('//*[@id="signup-address-complement"]');
        
        cy.xpath('//*[@id="signup_submit_button_3"]');
        
        // Confirm page
        cy.xpath('/html/body/div/div[2]/div[4]/div/div/div[1]/p').should('contain.text', 'Agora você tem o passe para descobrir como o inglês pode te levar longe');
    });
});