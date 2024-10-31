class AddressDataPage {
    fillAndConfirmAddressData(cep) {
        cy.xpath('//*[@id="signup-address-cep"]').type(cep);        
        cy.xpath('//*[@id="signup-address-country"]').should('exist');
        cy.xpath('//*[@id="signup-address-state"]').should('exist');
        cy.xpath('//*[@id="signup-address-city"]').should('exist');
        cy.xpath('//*[@id="signup-address-neighborhood"]');
        cy.xpath('//*[@id="signup-address-street"]');
        cy.xpath('//*[@id="signup-address-number"]').type('123');
        cy.xpath('//*[@id="signup-address-complement"]');

        this.confirmAndSend();
    }

    confirmAndSend() {
        cy.xpath('//*[@id="signup_submit_button_3"]');
    }
}

export default AddressDataPage;