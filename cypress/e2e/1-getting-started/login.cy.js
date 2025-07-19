// cypress/e2e/1-getting-started/compra-saucedemo.cy.js

describe('Testes de Funcionalidade Pós-Login - Sauce Demo', () => {

    // Pré-condição para todos os testes neste arquivo: realizar login com sucesso
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.login('standard_user', 'secret_sauce'); // Realiza o login usando o comando
        cy.url().should('include', '/inventory.html'); // Confirma que está na página de produtos
        cy.get('.title').should('contain', 'Products'); // Confirma o título da página
    });

    it('COMPRA_001: Deve adicionar um item ao carrinho de compras e verificar sua presença', () => {
        const productName = 'Sauce Labs Backpack'; // Item a ser adicionado

        // Usa o comando personalizado 'adicionarItemAoCarrinho'
        cy.adicionarItemAoCarrinho(productName);

        // Asserções para verificar a adição ao carrinho
        cy.get('.shopping_cart_badge').should('contain', '1'); // Verifica o contador do carrinho

        // Navega para o carrinho de compras
        cy.get('.shopping_cart_link').click();

        // Asserções para verificar o item no carrinho
        cy.url().should('include', '/cart.html'); // Verifica se a URL é a do carrinho
        cy.contains('.inventory_item_name', productName).should('be.visible'); // Verifica se o item está visível no carrinho
    });

});