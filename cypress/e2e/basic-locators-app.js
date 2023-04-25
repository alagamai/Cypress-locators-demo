describe("CSS selectors in Cypress Tutorial", () => {
    it("Login with Demo User", () => {
    cy.visit("https://bstackdemo.com/signin");
    
    cy.get('#username').type("demouser{enter}")
    cy.get('#password').type("testingisfun99{enter}")
    cy.get('#login-btn').click();

    //cy.contains('iPhone 12 Pro Max').next().next().click()

    cy.contains('iPhone 12 Pro Max')
    .parent()
  .find('.shelf-item__buy-btn')
  .click();

 });
});