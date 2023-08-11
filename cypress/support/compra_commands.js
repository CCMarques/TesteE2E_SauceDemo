/// <reference types ="cypress"/>

Cypress.Commands.add('VerificaProdutos',()=>{
    cy.get('.cart_list > :nth-child(3)').should('contain', 'Sauce Labs Bolt T-Shirt')
    cy.get('.cart_list > :nth-child(4)').should('contain', 'Test.allTheThings() T-Shirt (Red)')
    cy.get('.cart_list > :nth-child(5)').should('contain', 'Sauce Labs Backpack')
})

Cypress.Commands.add('OrdenacaoDeProdutos',()=>{
    cy.get(':nth-child(3) > .inventory_item_description').should('contain','Sauce Labs Bolt T-Shirt')
    cy.get(':nth-child(4) > .inventory_item_description').should('contain','Test.allTheThings() T-Shirt (Red)')
    cy.get(':nth-child(5) > .inventory_item_description').should('contain','Sauce Labs Backpack')
})

Cypress.Commands.add('Checkout',()=>{
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('Teste Primeiro Nome')
    cy.get('[data-test="lastName"]').type('Ultimo Nome')
    cy.get('[data-test="postalCode"]').type('11082023')
    cy.get('[data-test="continue"]').click()
})

Cypress.Commands.add('Produto1',()=>{
    cy.contains('Sauce Labs Bolt T-Shirt').click()
    cy.get('.btn_primary').click()
    cy.get('[data-test="back-to-products"]').click()
})

Cypress.Commands.add('Produto2',()=>{
    cy.contains('Test.allTheThings() T-Shirt (Red)').click()
    cy.get('.btn_primary').click()
    cy.get('[data-test="back-to-products"]').click()
})

Cypress.Commands.add('Produto3',()=>{
    cy.contains('Sauce Labs Backpack').click()
    cy.get('.btn_primary').click()
    cy.get('[data-test="back-to-products"]').click()
})
