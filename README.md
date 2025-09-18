# Projeto de Testes Automatizados com Playwright
# Aviso sobre dados públicos
**Os dados do arquivo `.env` são públicos e de demonstração, podendo ser versionados junto ao projeto.**

Este projeto foi desenvolvido para um teste técnico, utilizando Playwright para automação de testes end-to-end na aplicação [SauceDemo](https://www.saucedemo.com/v1/index.html).

## Estrutura do Projeto

```
├── pages/                 # Page Objects
├── tests/                 # Testes automatizados
├── support/               # Utilitários e constantes
├── .env                   # Dados sensíveis (usuário/senha)
├── package.json           # Configuração do projeto Node.js
├── playwright.config.js   # Configuração do Playwright
├── allure-results/        # Resultados dos testes para o Allure
├── allure-report/         # Relatório gerado pelo Allure
```

## Pré-requisitos
- Node.js instalado
- Navegadores instalados pelo Playwright (`npx playwright install`)

## Como executar os testes

1. Instale as dependências:
   ```
   npm install
   ```
2. Configure o arquivo `.env` (já criado):
   ```
   PLAYWRIGHT_USER=standard_user
   PLAYWRIGHT_PASS=secret_sauce
   ```
3. Execute os testes:
   ```
   npx playwright test
   ```

## Como gerar e visualizar o relatório Allure

1. Gere o relatório após rodar os testes:
   ```
   npx allure generate ./allure-results --clean -o ./allure-report
   ```
2. Abra o relatório no navegador:
   ```
   npx allure open ./allure-report
   ```

## Observações
- Os dados sensíveis estão centralizados no arquivo `.env`.
- O projeto segue boas práticas de organização, padronização de nomes e comentários.
- Os Page Objects utilizam seletores robustos e claros.

