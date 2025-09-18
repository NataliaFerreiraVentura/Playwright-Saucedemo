# Projeto de Testes Automatizados com Playwright
# Aviso sobre dados públicos
**Os dados do arquivo `.env` são públicos e de demonstração, podendo ser versionados junto ao projeto.**


# Desafio Auvo – Automação de Testes Web

## Objetivo

Automação do fluxo de cadastro e pesquisa de produtos no site público de e-commerce fictício [SauceDemo](https://www.saucedemo.com/), utilizando Playwright e arquitetura Page Object Model (POM).

## Fluxo Automatizado


1. **Login:** Autenticação com credenciais padrão.
2. **Navegação e Pesquisa:** Acesso à seção de produtos e pesquisa.
3. **Validação do Produto:** Seleção de produto, validação de título, preço e descrição.
4. **Carrinho e Checkout:** Adição ao carrinho, navegação e preenchimento dos dados de checkout.
5. **Finalização do Pedido:** Conclusão do pedido e validação do fluxo.

## Casos de Teste Automatizados


- **loginPage.spec.js**
   - Login com sucesso
   - Login com erro
- **inventoryPage.spec.js**
   - Valida título, preço e descrição do produto (Sauce Labs Backpack)
   - Verifica inventário, ordena por preço, adiciona item ao carrinho
   - Verifica lista de produtos em ordem alfabética
- **cartPage.spec.js**
   - Adiciona um produto ao carrinho
   - Adiciona dois produtos ao carrinho
   - Remove um produto do carrinho
- **finalizePurchase.spec.js**
   - Finaliza compra com sucesso (adiciona dois produtos, preenche checkout e valida mensagem de sucesso)

Para detalhes completos dos cenários e validações, consulte o arquivo [TESTING.md](./TESTING.md).

## Tecnologias Utilizadas

- Playwright
- Node.js
- Allure Report
- Page Object Model (POM)
- GitHub Actions (CI)
- dotenv

## Estrutura do Projeto

```
Playwright-Saucedemo/
├── pages/           # Page Objects (loginPage.js, inventoryPage.js, cartPage.js, checkoutPage.js)
├── tests/           # Testes automatizados
├── .env             # Variáveis sensíveis (exemplo em .env.example)
├── .github/workflows/ci.yml # Pipeline CI
├── README.md        # Documentação do projeto
```

## Configuração do Ambiente

1. **Instale as dependências:**
   ```bash
   npm install
   ```
2. **Configure as variáveis de ambiente:**
   - Copie `.env.example` para `.env` e preencha as credenciais.
3. **Execute os testes:**
   ```bash
   npx playwright test
   ```


## Relatório HTML do Playwright

1. **Gere o relatório HTML:**
   ```bash
   npx playwright test --reporter=html
   ```
2. **Visualize o relatório:**
   ```bash
   npx playwright show-report
   ```
   Ou abra manualmente o arquivo `playwright-report/index.html` após baixar o artefato do CI.

## Relatório HTML do Playwright

1. **Gere o relatório HTML:**
   ```bash
   npx playwright test --reporter=html
   ```
2. **Visualize o relatório:**
   ```bash
   npx playwright show-report
   ```
   Ou abra manualmente o arquivo `playwright-report/index.html` após baixar o artefato do CI.

## Integração Contínua (CI)

- Os testes são executados automaticamente a cada commit via GitHub Actions.
- O relatório HTML do Playwright é salvo como artefato (`playwright-report`) e pode ser aberto localmente.

- O relatório HTML do Playwright também é salvo como artefato (`playwright-report`) e pode ser aberto localmente.

## Decisões e Suposições

- Utilização de POM para facilitar manutenção e expansão dos testes.
- Seletores robustos para evitar flakiness.
- Dados sensíveis centralizados em `.env`.
- Comentários e regiões padronizados para facilitar leitura e manutenção.
- O projeto segue boas práticas de organização, padronização de nomes e comentários.
- Os Page Objects utilizam seletores robustos e claros.

