## Aplicação Testada

Os testes são executados na seguinte aplicação web:

[Sauce Demo](https://www.saucedemo.com/)

## Cenários de Teste Automatizados

Para uma descrição detalhada de todos os cenários de teste que foram automatizados neste projeto, incluindo IDs, nomes, pré-condições, passos de execução e resultados esperados, consulte o arquivo:

[CenariosDeTeste.md](CenariosDeTeste.md)

## Pré-requisitos

Para configurar e executar este projeto de testes em sua máquina local, você precisará ter o seguinte software instalado:

* **Node.js**: Recomenda-se a versão LTS (Long Term Support). Você pode baixá-lo no site oficial do Node.js: [https://nodejs.org/](https://nodejs.org/)
* **npm**: O gerenciador de pacotes npm geralmente é instalado junto com o Node.js.
* **Git**: Para clonar o repositório do projeto.

## Instalação de Dependências

Siga os passos abaixo para baixar o código do projeto e instalar todas as dependências necessárias:

1.  **Clone o repositório do GitHub:**
    ```bash
    git clone [https://github.com/Gust4hib/prova_arc.git](https://github.com/Gust4hib/prova_arc.git)
    ```
    *(**Importante:** Substitua `https://github.com/Gust4hib/prova_arc.git` pelo URL **real** do seu repositório no GitHub, caso seja diferente).*

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd prova_arc
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```
    Este comando lerá o arquivo `package.json` e instalará o Cypress e todas as outras bibliotecas necessárias na pasta `node_modules`.

## Como Rodar os Testes

Uma vez que as dependências estejam instaladas, você pode executar os testes de duas maneiras:

### 1. No Modo Interativo (Cypress Test Runner)

Este modo abre a interface gráfica do Cypress, permitindo que você visualize e execute os testes um por um, depure-os e veja as interações em tempo real no navegador.

```bash
npm run cypress:open