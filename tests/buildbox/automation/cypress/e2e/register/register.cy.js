import PersonalDataPage from './page/PersonalDataPage';
import AddressDataPage from './page/AddressDataPage';
import SuccessPage from './page/SuccessPage';

import personalData from '../../fixtures/personalData'
import addressData from '../../fixtures/addressData';

describe(`Buildbox registration`, () => {
    beforeEach(() => {
        cy.visit('https://qastage.buildbox.one/18/cadastro');
    });

    it('Shoud register with sucess', () => {
        const { firstName, lastName, birthDate, cpf, email, password } = personalData;
        const { cep } = addressData;

        const personalDataPage = new PersonalDataPage();
        const addressDataPage = new AddressDataPage();
        const successPage = new SuccessPage();

        personalDataPage.fillPersonalData(firstName, lastName, birthDate, cpf, email, password);

        addressDataPage.fillAndConfirmAddressData(cep);
        
        successPage.confirmRegister();
    });
});