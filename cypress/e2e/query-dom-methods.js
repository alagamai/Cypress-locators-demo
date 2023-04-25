/// <reference types="cypress" />
//https://example.cypress.io/commands/querying


describe('Query for DOM elements', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/querying')
    })


    it('get - query method', () => {
        cy.get('#query-btn').should('contain.text', 'Button')
    })

    it('contains - query method', () => {
        cy.contains('apples').should('be.visible')
        cy.get('.query-list').contains('oranges').should('have.class', 'second')
    })


    it('within - query method', () => {
        cy.get('.query-form').within(() => {
            cy.get('input:first').should('have.id', 'inputEmail')
        })
        cy.get('.query-ul').within(() => {
            // In this within, the root is now the ul DOM element
            cy.root().should('have.class', 'query-ul')
        })
    })

    it('root - query method', () => {
        cy.get('.query-ul').within(() => {
            // In this within, the root is now the ul DOM element
            cy.root().should('have.class', 'query-ul')
        })
    })

 



})