import  {   faker  } from '@faker-js/faker'

function login() {
    cy.visit("https://bstackdemo.com/signin");
    cy.get('#username').type("demouser{enter}")

    cy.get('#password').type("testingisfun99{enter}")
    cy.get('#login-btn').click();
}

describe("CSS selectors in Cypress Tutorial", () => {

    beforeEach(() => {
         login()

    })
    it("Login with Demo User", () => {
    //login()
    //cy.contains('iPhone 12 Pro Max').next().next().click()

    cy.contains('iPhone 12 Pro Max')
    .parent()
  .find('.shelf-item__buy-btn')
  .click();

  cy.get('.buy-btn').click()
  cy.url().should('contain', 'checkout')
  cy.get('#firstNameInput').type(faker.name.firstName())
  cy.get('#lastNameInput').type(faker.name.lastName())
  cy.get('#addressLine1Input').type(faker.address.streetAddress())
  cy.get('#provinceInput').type(faker.address.state())
  cy.get('#postCodeInput').type(faker.address.zipCode())
  cy.get('#checkout-shipping-continue').click()
  cy.get('.button').contains('Continue Shopping').click()
 });


 it.only("favourite it ", () => {


//  class="MuiButtonBase-root MuiIconButton-root Button "
    // cy.contains('iPhone XR').parent().find('.MuiButtonBase-root')
    // .click()
//    cy.contains('iPhone XR').closest('.shelf-item').find('.MuiButtonBase-root')
//     .click()

    cy.contains('iPhone XR').siblings('.shelf-stopper').find('.MuiButtonBase-root')
   .click()


});

});