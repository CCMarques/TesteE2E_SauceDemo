/// <reference types ="cypress"/>

describe('Teste E2E - Realizando a compra de produtos com sucesso', () => {
    it('Fluxo de compras de produtos', () => {
       cy.login_teste('standard_user','secret_sauce')          
       
       //Ordenando os valores dos produtos do menor para maior valor:
       cy.get('[data-test="product_sort_container"]').select('Price (low to high)')

       //Validação da ordenação desses produtos:
       cy.OrdenacaoDeProdutos()
      
       //Adicionando produtos no carrinho:
       cy.Produto1()
       cy.Produto2()
       cy.Produto3()
       
       //checagem da quantidade de produtos add no carrinho:
       cy.get('.shopping_cart_badge').should('have.text','3')

       //check no carrinho:
       cy.get('.shopping_cart_badge').click()
       cy.VerificaProdutos()

       //Checkout:
       cy.Checkout()

       // Verificando prdutos no checkout:
       cy.VerificaProdutos()

       //Checagem do valor total:                         
       cy.get('.summary_total_label').should('have.text','Total: $66.93')
 
       // Finalizando a compra
       cy.get('[data-test="finish"]').click()

       //Validando a compra
       cy.get('.complete-header').should('have.text','Thank you for your order!')
       cy.screenshot();

    });
});