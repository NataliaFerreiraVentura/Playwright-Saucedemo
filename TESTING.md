
# Casos de Teste Automatizados – Playwright-Saucedemo

## 1. loginPage.spec.js

**Objetivo:** Validar o fluxo de login da aplicação.

| Caso de Teste      | Descrição                              | Passos                                                                 | Resultado Esperado                                      |
|--------------------|----------------------------------------|-----------------------------------------------------------------------|---------------------------------------------------------|
| Login com sucesso  | Realiza login com credenciais válidas  | 1. Acessar a página de login<br>2. Preencher usuário e senha válidos<br>3. Clicar em Login | Usuário é redirecionado para a página de inventário     |
| Login com erro     | Tenta login com credenciais inválidas  | 1. Acessar a página de login<br>2. Preencher usuário e senha inválidos<br>3. Clicar em Login | Mensagem de erro é exibida na tela                     |

## 2. inventoryPage.spec.js

**Objetivo:** Validar a lista de produtos, filtros e adição ao carrinho.

| Caso de Teste                      | Descrição                                         | Passos                                                                                 | Resultado Esperado                                      |
|------------------------------------|---------------------------------------------------|----------------------------------------------------------------------------------------|---------------------------------------------------------|
| Verifica inventário                | Verifica inventário, ordena produtos por preço e adiciona item ao carrinho | 1. Acessar página de inventário<br>2. Verificar lista de produtos visível<br>3. Ordenar por preço (low to high)<br>4. Adicionar produto ao carrinho | Lista de produtos exibida corretamente, produto adicionado com sucesso |
| Verifica produtos em ordem alfabética | Ordena produtos por nome                          | 1. Selecionar filtro “Name (A to Z)”<br>2. Verificar ordem alfabética da lista         | Produtos aparecem na ordem alfabética correta           |

## 3. cartPage.spec.js

**Objetivo:** Validar funcionalidades do carrinho de compras.

| Caso de Teste                      | Descrição                                         | Passos                                                                                 | Resultado Esperado                                      |
|------------------------------------|---------------------------------------------------|----------------------------------------------------------------------------------------|---------------------------------------------------------|
| Adiciona um produto ao carrinho    | Adiciona um produto e verifica presença           | 1. Adicionar produto ao carrinho<br>2. Acessar o carrinho                              | Produto presente no carrinho, badge com contagem correta|
| Adiciona múltiplos produtos ao carrinho | Adiciona vários produtos e verifica todos         | 1. Adicionar múltiplos produtos ao carrinho<br>2. Acessar o carrinho                   | Todos os produtos presentes no carrinho, badge com contagem correta|
| Remove um produto do carrinho      | Remove um produto do carrinho e verifica          | 1. Acessar o carrinho com produtos adicionados<br>2. Remover um produto                | Produto removido, os demais permanecem no carrinho, badge atualizada|

## 4. finalizePurchase.spec.js

**Objetivo:** Validar o fluxo completo de finalização de compra.

| Caso de Teste                  | Descrição                                 | Passos                                                                                 | Resultado Esperado                                      |
|-------------------------------|-------------------------------------------|----------------------------------------------------------------------------------------|---------------------------------------------------------|
| Finaliza compra com sucesso   | Adiciona produtos e finaliza compra       | 1. Adicionar produtos ao carrinho<br>2. Ir para checkout<br>3. Preencher informações de pagamento<br>4. Continuar e finalizar | Página de overview visível, mensagem “THANK YOU FOR YOUR ORDER” exibida|

---

**Observações**

Todos os testes utilizam Page Objects para garantir manutenção e clareza.

Arquivos de referência:

- `/tests` – testes automatizados
- `/pages` – Page Objects
- `/support` – constantes e funções utilitárias
