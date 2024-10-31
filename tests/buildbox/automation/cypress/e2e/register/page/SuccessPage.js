class SuccessPage {
    confirmRegister() {
        cy.xpath('/html/body/div/div[2]/div[4]/div/div/div[1]/p')
            .should('contain.text', 'Agora você tem o passe para descobrir como o inglês pode te levar longe');
    }
}

export default SuccessPage;