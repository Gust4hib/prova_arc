// cypress/support/commands.js

// Comando para realizar login na Sauce Demo
Cypress.Commands.add('login', (username, password) => {
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
});

// Comando para adicionar um item ao carrinho pelo nome do produto
Cypress.Commands.add('adicionarItemAoCarrinho', (productName) => {
    cy.contains('.inventory_item_name', productName)
      .parents('.inventory_item')
      .find('[data-test^="add-to-cart-"]')
      .click();
});