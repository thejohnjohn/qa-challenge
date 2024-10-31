import superFaker from "./super-faker"

const personalData = {
    ...superFaker.newAdultPerson(), 
    email: `test_${superFaker.cpf(false)}@tester.com`,
    password: '@Teste1'
};

export default personalData;
