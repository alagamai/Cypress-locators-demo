/// <reference types="cypress" />
// Tree-structural pseudo-classes
// These pseudo-classes relate to the location of an element within the document tree.
// ref: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#structural_pseudo-classes
// https://glebbahmutov.com/cypress-examples/recipes/nth-child.html#individual-elements


describe('basic locators test', () => {
    beforeEach(() => {
    })


    it.only('pseudo classes css selector', () => {
        cy.visit('https://demo.nopcommerce.com/')
        cy.get('.ico-login').click()
        cy.get('#Email').type('idOnly@yopmail.com')
        cy.get('#Password').type("Pass123")
        cy.get('[type="Submit"]:first-child').should('contain', 'Log in')
        cy.get('[type="Submit"]:last-child').should('contain', 'Search')
        cy.get('[type="Submit"]:nth-child(2)').should('contain', 'Search')
        cy.get('[type="Submit"]:nth-child(even)').should('contain', 'Search')
        cy.get('[type="Submit"]:nth-child(odd)').should('contain', 'Log in')
        cy.get('[type="Submit"]:only-child').should('contain', 'Log in')

        cy.get('[type="Submit"]:only-child')
        .then(t => { cy.log(t.text())})
    })

    it('pseudo classes - first child css selectors', () => {
        cy.visit('cypress/html/nth-child-selector.html')
        cy.contains(':first-child', 'Bill Russell').should('be.visible')
        // using :first selector
        cy.contains(':first', 'Bill Russell').should('be.visible')
        // using :nth-child 1 index
        cy.contains(':nth-child(1)', 'Bill Russell').should('be.visible')


        //using :first-child selector
        cy.get(':first-child').should('contain','Bill Russell')
        // using :first selector
        cy.get(':first').should('contain','Bill Russell')
        // using :nth-child 1 index
        cy.get(':nth-child(1)').should('contain','Bill Russell')
        //  cy.get('li:nth-child(even)')

    })
 
    it.only('pseudo classes - last child css selectors', () => {
        cy.visit('cypress/html/nth-child-selector.html')
        cy.contains(':last-child', 'Robert Horry').should('be.visible')
        // using :first selector
        cy.contains(':last', 'Robert Horry').should('be.visible')
        // using :nth-child 1 index
        cy.contains(':nth-child(n-1)', 'Robert Horry').should('be.visible')


        //using :first-child selector
        cy.get(':last-child').should('contain','Robert Horry')
        // using :first selector
        cy.get(':last').should('contain','Robert Horry')
        // select the first element from the end
        cy.get(':nth-child(n - 1)').should('contain','Robert Horry')
        //  cy.get('li:nth-child(even)')

        cy.get('li:last-child')
        .then(ele => {
            cy.log(ele.text())
        })


    })


    it('pseudo classes - nth child from the end css selectors', () => {
        cy.visit('cypress/html/nth-child-selector.html')
        cy.contains('li:nth-child(n - 3)', 'Jim Loscutoff')
        cy.contains('li:nth-last-child(3)', 'Jim Loscutoff')
    })


    it('pseudo classes - selects every 3rd element', () => {
         cy.visit('cypress/html/nth-child-selector.html')
           cy.get('li:nth-last-child(-n + 2)')
           .then((ele) => {
            const t = ele.toArray().map(li =>  li.textContent)
            expect(t).to.deep.equal( ['Frank Ramsey', 'Robert Horry'])
       })
    })


    it('pseudo classes - selects every even element from 4th', () => {
        cy.visit('cypress/html/nth-child-selector.html')
        cy.get('li:nth-child(2n + 4)')
        .then(ele => {
            cy.log(ele.text())
            const list = ele.toArray().map(li => li.textContent)
            cy.log(list)
            expect(list).to.deep.equal( ['K. C. Jones', 'John Havlicek', 'Frank Ramsey'])
        })
    })

    it('select 3rd element from the end', () => {
        cy.visit('cypress/html/nth-child-selector.html')
        cy.contains('li:nth-last-child(3)', 'Jim Loscutoff')

        cy.get('li:nth-last-child(3)')
        .then(el => {
            cy.log(el.text())
        })

    })



})