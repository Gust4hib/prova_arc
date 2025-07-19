// cypress/e2e/1-getting-started/compra-saucedemo.cy.js

describe('Testes de Funcionalidade Pós-Login - Sauce Demo', () => {

    // Pré-condição para todos os testes neste arquivo: realizar login com sucesso
    beforeEach(() => {
        // PASSO 1: Visita a página de login
        cy.visit('https://www.saucedemo.com/');

        // PASSO 2: Realiza o login usando o comando personalizado
        cy.login('standard_user', 'secret_sauce');

        // PASSO 3: Confirma que o login foi bem-sucedido e estamos na página de produtos
        cy.url().should('include', '/inventory.html');
        cy.get('.title').should('contain', 'Products');
    });

    it('COMPRA_001: Deve adicionar um item ao carrinho de compras e verificar sua presença', () => {
        const productName = 'Sauce Labs Backpack'; // Item a ser adicionado

        cy.adicionarItemAoCarrinho(productName);

        cy.get('.shopping_cart_badge').should('contain', '1');

        cy.get('.shopping_cart_link').click();

        cy.url().should('include', '/cart.html');
        cy.contains('.inventory_item_name', productName).should('be.visible');
    });

});