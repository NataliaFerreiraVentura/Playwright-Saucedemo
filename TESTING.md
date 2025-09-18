
# Casos de Teste Automatizados – Playwright Saucedemo

## Sumário

- [loginPage.spec.js](#loginpagespecjs)
- [inventoryPage.spec.js](#inventorypagespecjs)
- [cartPage.spec.js](#cartpagespecjs)
- [finalizePurchase.spec.js](#finalizepurchasespecjs)
- [Relatórios de Teste](#relatórios-de-teste)

---

## loginPage.spec.js
**Objetivo:** Validar o fluxo de login da aplicação.

### Cenários

| Caso de Teste         | Descrição                                      | Passos                                                                 | Resultado Esperado                                      |
|-----------------------|------------------------------------------------|-----------------------------------------------------------------------|---------------------------------------------------------|
| Login com sucesso     | Login com credenciais válidas                  | 1. Acessar página de login<br>2. Preencher usuário e senha válidos<br>3. Clicar em Login | Usuário é redirecionado para a página de inventário     |
| Login com erro        | Login com credenciais inválidas                | 1. Acessar página de login<br>2. Preencher usuário e senha inválidos<br>3. Clicar em Login | Mensagem de erro exibida na tela                        |

---

## inventoryPage.spec.js
**Objetivo:** Validar a lista de produtos, filtros e adição ao carrinho.

### Cenários

| Caso de Teste                        | Descrição                                         | Passos                                                                                 | Resultado Esperado                                      |
|--------------------------------------|---------------------------------------------------|----------------------------------------------------------------------------------------|---------------------------------------------------------|
| Verifica detalhes do produto         | Verifica nome, descrição e preço do produto        | 1. Acessar página de inventário<br>2. Verificar detalhes do produto Sauce Labs Backpack | Detalhes do produto exibidos corretamente              |
| Verifica inventário                  | Verifica inventário, ordena por preço, adiciona item ao carrinho | 1. Verificar lista de produtos<br>2. Ordenar por preço<br>3. Adicionar produto ao carrinho | Lista exibida corretamente, produto adicionado         |
| Verifica ordem alfabética            | Ordena produtos por nome                           | 1. Selecionar filtro “Name (A to Z)”<br>2. Verificar ordem alfabética da lista         | Produtos aparecem na ordem alfabética correta           |

---

## cartPage.spec.js
**Objetivo:** Validar funcionalidades do carrinho de compras.

### Cenários

| Caso de Teste                        | Descrição                                         | Passos                                                                                 | Resultado Esperado                                      |
|--------------------------------------|---------------------------------------------------|----------------------------------------------------------------------------------------|---------------------------------------------------------|
| Adiciona um produto ao carrinho      | Adiciona um produto e verifica presença           | 1. Adicionar produto ao carrinho<br>2. Acessar o carrinho                              | Produto presente no carrinho, badge com contagem correta|
| Adiciona múltiplos produtos ao carrinho | Adiciona vários produtos e verifica todos         | 1. Adicionar múltiplos produtos ao carrinho<br>2. Acessar o carrinho                   | Todos os produtos presentes, badge correta              |
| Remove um produto do carrinho        | Remove um produto e verifica                      | 1. Remover produto do carrinho<br>2. Verificar itens restantes                         | Produto removido, demais permanecem no carrinho         |

---

## finalizePurchase.spec.js
**Objetivo:** Validar o fluxo completo de finalização de compra.

### Cenários

| Caso de Teste                  | Descrição                                 | Passos                                                                                 | Resultado Esperado                                      |
|-------------------------------|-------------------------------------------|----------------------------------------------------------------------------------------|---------------------------------------------------------|
| Finaliza compra com sucesso   | Adiciona produtos e finaliza compra       | 1. Adicionar produtos ao carrinho<br>2. Ir para checkout<br>3. Preencher informações de pagamento<br>4. Continuar e finalizar | Página de overview visível, mensagem “THANK YOU FOR YOUR ORDER” exibida|

---

## Observações

- Todos os testes utilizam Page Objects para garantir manutenção e clareza.
- Arquivos de referência:
	- `/tests` – testes automatizados
	- `/pages` – Page Objects
	- `/support` – constantes e funções utilitárias

---

## Relatórios de Teste

**Relatório HTML do Playwright:**
- Gerado automaticamente após os testes.
- Para visualizar localmente:
	```bash
	npx playwright test --reporter=html
	npx playwright show-report
	```
- No CI, baixe o artefato `playwright-report` e abra o arquivo `index.html`.
