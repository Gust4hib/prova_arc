## 1. Testes de Sanidade na Página de Login

### Cenário 1.1: Login com Sucesso

* **ID do Cenário:** `LOGIN_001`
* **Nome do Cenário:** Login bem-sucedido utilizando credenciais válidas.
* **Pré-condições:**
    * Navegador acessou a URL `https://www.saucedemo.com/`.
    * A página de login está carregada e visível.
* **Passos de Execução:**
    1.  Acessar a URL `https://www.saucedemo.com/`.
    2.  Preencher o campo de "Username" com `standard_user`.
    3.  Preencher o campo de "Password" com `secret_sauce`.
    4.  Clicar no botão "Login".
* **Resultado Esperado:**
    * O usuário é redirecionado com sucesso para a página de produtos (`/inventory.html`).
    * A URL exibida no navegador deve conter `/inventory.html`.
    * Um elemento na página de produtos (ex: o título "Products") deve estar visível.

### Cenário 1.2: Login com Usuário Inválido

* **ID do Cenário:** `LOGIN_002`
* **Nome do Cenário:** Tentativa de login utilizando um usuário não registrado.
* **Pré-condições:**
    * Navegador acessou a URL `https://www.saucedemo.com/`.
    * A página de login está carregada e visível.
* **Passos de Execução:**
    1.  Acessar a URL `https://www.saucedemo.com/`.
    2.  Preencher o campo de "Username" com `usuario_invalido` (ou qualquer usuário não reconhecido).
    3.  Preencher o campo de "Password" com `secret_sauce`.
    4.  Clicar no botão "Login".
* **Resultado Esperado:**
    * Uma mensagem de erro é exibida na página de login, indicando credenciais inválidas.
    * A mensagem de erro esperada é: `Epic sadface: Username and password do not match any user in this service`.
    * O usuário permanece na página de login.

### Cenário 1.3: Login com Senha Inválida

* **ID do Cenário:** `LOGIN_003`
* **Nome do Cenário:** Tentativa de login utilizando uma senha incorreta para um usuário válido.
* **Pré-condições:**
    * Navegador acessou a URL `https://www.saucedemo.com/`.
    * A página de login está carregada e visível.
* **Passos de Execução:**
    1.  Acessar a URL `https://www.saucedemo.com/`.
    2.  Preencher o campo de "Username" com `standard_user`.
    3.  Preencher o campo de "Password" com `senha_invalida` (ou qualquer senha incorreta).
    4.  Clicar no botão "Login".
* **Resultado Esperado:**
    * Uma mensagem de erro é exibida na página de login, indicando credenciais inválidas.
    * A mensagem de erro esperada é: `Epic sadface: Username and password do not match any user in this service`.
    * O usuário permanece na página de login.

### Cenário 1.4: Login com Usuário Bloqueado

* **ID do Cenário:** `LOGIN_004`
* **Nome do Cenário:** Tentativa de login com um usuário que foi bloqueado.
* **Pré-condições:**
    * Navegador acessou a URL `https://www.saucedemo.com/`.
    * A página de login está carregada e visível.
* **Passos de Execução:**
    1.  Acessar a URL `https://www.saucedemo.com/`.
    2.  Preencher o campo de "Username" com `locked_out_user`.
    3.  Preencher o campo de "Password" com `secret_sauce`.
    4.  Clicar no botão "Login".
* **Resultado Esperado:**
    * Uma mensagem de erro é exibida na página de login, indicando que o usuário está bloqueado.
    * A mensagem de erro esperada é: `Epic sadface: Sorry, this user has been locked out.`.
    * O usuário permanece na página de login.

---

## 2. Automação de Funcionalidade Pós-Login

### Cenário 2.1: Adicionar Item ao Carrinho

* **ID do Cenário:** `COMPRA_001`
* **Nome do Cenário:** Adicionar um item específico à cesta de compras após o login e verificar sua presença no carrinho.
* **Pré-condições:**
    * Login realizado com sucesso na aplicação, utilizando `standard_user`.
    * O usuário está na página de produtos (`/inventory.html`).
* **Passos de Execução:**
    1.  Realizar login com sucesso na aplicação usando `standard_user` e `secret_sauce`.
    2.  Navegar até a página de produtos.
    3.  Localizar o item "Sauce Labs Backpack" na lista de produtos.
    4.  Clicar no botão "Add to cart" (Adicionar ao carrinho) correspondente ao "Sauce Labs Backpack".
    5.  Clicar no ícone do carrinho de compras (canto superior direito da tela).
* **Resultado Esperado:**
    * O contador do carrinho de compras (o número sobre o ícone do carrinho) é atualizado para "1".
    * O usuário é redirecionado para a página do carrinho de compras (`/cart.html`).
    * O item "Sauce Labs Backpack" é listado visivelmente na página do carrinho de compras.