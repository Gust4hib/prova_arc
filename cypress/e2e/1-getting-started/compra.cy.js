describe('Testes de Funcionalidade Pós-Login - Sauce Demo', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.login('standard_user', 'secret_sauce');
        cy.url().should('include', '/inventory.html');
        cy.get('.title').should('contain', 'Products');
    });

    it('COMPRA_001: Deve adicionar um item ao carrinho de compras e verificar sua presença', () => {
        const productName = 'Sauce Labs Backpack';

        cy.adicionarItemAoCarrinho(productName);

        cy.get('.shopping_cart_badge').should('contain', '1');

        cy.get('.shopping_cart_link').click();

        cy.url().should('include', '/cart.html');
        
        cy.contains('.inventory_item_name', productName).should('be.visible');
    });

});