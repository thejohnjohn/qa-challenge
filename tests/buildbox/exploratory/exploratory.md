**Objective**: Test the Buildbox registration flow
**Page**: [Buildbox's registration screen](https://qastage.buildbox.one/18/cadastro)
**Session time**: 30 minutes

**Execution**:

• Enter the registration page.

• Check if all fields are correct and register.

• Check the response when submitting the form.

**Discoveries**:

1st page (personal data):

    • When testing the form, it was noticed that the first and last name inputs trigger an error message when they only have two letters, which can make it difficult to enter foreign names, such as names of asian origin. For example, Jack Ma, Jet Li, etc.

    • When entering data in the date of birth input, the date 02/30/1994 was accepted.

    • When clicking on terms of use, you are taken to the terms of use page, but the terms of use do not appear.

    • When clicking on privacy policy, the privacy policies are not displayed in any way and the checkbox for accepting the terms of use and privacy policy is triggered.

    • When you click on the Leveling button, you are redirected to the leveling page, but there is only a button to send answers and no questionnaire to level the consumer's English proficiency.

2nd page (address screen):

    • When entering the zip code, the same happens as when entering the CPF, where the input is only accepted when the user presses the Enter key. When pressing Enter, all addresses are loaded.

    • In the residential number field, it is mandatory to enter a residential number, which can generate inconsistencies because the student's address may not have a number.
