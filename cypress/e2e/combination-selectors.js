function login() {
    cy.visit("cypress/html/combine-selector.html");
    // cy.get('#username').type("demouser{enter}")

    // cy.get('#password').type("testingisfun99{enter}")
    // cy.get('#login-btn').click();
}


//The descendant combinator matches a child, grandchild, and so on. 
//The child combinator selects elements that are direct children of another element.

describe("Combinatrion selectors", () => {

    beforeEach(() => {
        login()
        cy.wait(2000)
    })
    //Cypress test case using CSS child selector:

    it("should select direct child element using CSS child selector", () => {
        cy.get(".parent > .child").debug()
        cy.get(".parent > .child").should("contain", "This is a direct child");
        cy.get(".parent > .child").should("not.contain", "This is not a direct child");
      });

//      Cypress test case using CSS descendant selector:


it("should select descendant element using CSS descendant selector", () => {
    cy.get(".parent .child")

  cy.get(".parent .child").should("contain", "This is a direct child").debug();
  cy.get(".parent .child").should("contain", "This is not a direct child");
});

it("should select descendant element using CSS descendant selector", () => {
    cy.get(".parent ~ .child").should("contain", "This is a direct child");
    cy.get(".parent + .child").should("contain", "This is not a direct child");
  });


})