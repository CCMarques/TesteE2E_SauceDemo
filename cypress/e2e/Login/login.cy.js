/// <reference types ="cypress"/>

describe('teste Funcional de Lngin', () => {
    
    it('Deve realizar o login com sucesso', () => {     
       cy.login_teste('standard_user','secret_sauce')  
        cy.get('.app_logo').should('contain','Swag Labs')
        cy.screenshot();

    });
});

it('Validar Login Incorreto', () => {
    cy.login_teste('standard_user1','secret_sauce')  
    cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')
    cy.screenshot();
    
});

it('Validar Senha Incorreta', () => {
    cy.login_teste('standard_user','secret_sauce2')  
    cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')
    cy.screenshot();   
    
});