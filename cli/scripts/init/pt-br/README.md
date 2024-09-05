# INIT - Ciclo de Início de Versionamento

O comando `dcb init` é responsável por verificar e preparar o repositório local e remoto, identificando ou criando as branches necessárias e configurando o ambiente inicial de versionamento.

## Parâmetros

### `-u:<URL>`
- **Descrição**: Define a URL do repositório remoto a ser utilizado.
- **Uso**: `dcb init -u:https://github.com/user/repo.git`
- **Comportamento**: Caso a URL não seja fornecida, o sistema solicitará que o usuário insira a URL manualmente. Se a URL for deixada em branco, o comando prosseguirá sem configurar o repositório remoto.

### `-b:<branch>`
- **Descrição**: Especifica a branch padrão a ser utilizada. O valor padrão é `develop`.
- **Uso**: `dcb init -b:main`
- **Comportamento**: Se a branch não for especificada, o sistema assumirá `develop` como padrão, mas permitirá ao usuário definir uma branch diferente durante a execução.

### `--project-start`
- **Descrição**: Inicializa o repositório para um projeto mais estruturado, criando e publicando as branches `main` e `develop`.
- **Uso**: `dcb init --project-start`
- **Comportamento**: Ao usar este parâmetro, o sistema automaticamente cria as branches `main` e `develop` e as publica no repositório remoto, configurando o projeto para iniciar o desenvolvimento.

## Atividades

### Identificação do Repositório
- **Verificar a existência do repositório local e remoto**: Se o repositório não existir localmente, ele será clonado a partir do repositório remoto fornecido via `-u:<URL>`.
- **Clonagem**: Caso o repositório não exista localmente e a URL remota seja fornecida, o repositório será clonado.

### Criação das Branches Principais
- **Verificação das Branches**: O comando verifica se as branches principais ([main](../branch-structure/main.md), [develop](../branch-structure/develop.md)) já existem.
- **Criação de Branches**: Se as branches principais não existirem, elas serão criadas. Se o parâmetro `--project-start` for utilizado, as branches serão criadas e publicadas automaticamente.

### Configuração Inicial de Versionamento
- **Versionamento Semântico**: O sistema configura o versionamento semântico por padrão, garantindo que as versões sigam um padrão consistente.
- **Ajustes no Git**: Verificações e ajustes nas configurações do Git podem ser feitos para garantir a conformidade com o fluxo de trabalho do Dec-B.

### Verificação de Tags Existentes
- **Identificação de Tags**: O sistema verifica a existência de [tags](../README.md#tags) no repositório.
- **Adaptação do Histórico**: As tags existentes são verificadas, e o histórico do repositório é adaptado conforme necessário.

## Resultados Esperados
- **Verificação e Preparação do Repositório**: O repositório local e remoto são verificados e preparados conforme necessário.
- **Branches Criadas/Confirmadas**: As branches principais são criadas ou confirmadas.
- **Ambiente Configurado**: O ambiente inicial de versionamento é configurado com base nas melhores práticas do Dec-B.
- **Histórico Adaptado**: As tags existentes são verificadas e o histórico do repositório é adaptado para compatibilidade com o fluxo de trabalho.

## Exemplos de Uso

1. Inicializando um repositório com URL e branch específicos:
    ```bash
    dcb init -u:https://github.com/user/repo.git -b:main
    ```
2. Inicializando um repositório para um novo projeto estruturado:
    ```bash
    dcb init --project-start
    ```
3. Inicializando o repositório com as opções padrão:
    ```bash
    dcb init
    ```

## Erros Comuns
- **`remote repository not found`**: A URL remota fornecida é inválida ou inacessível.
- **`branch not specified`**: A branch padrão não foi definida corretamente e não foi possível criar as branches principais.
- **`project setup failed`**: Ocorreu um erro durante a configuração inicial do projeto ao usar o parâmetro `--project-start`.

## Considerações Finais
O ciclo `INIT` é a base para o fluxo de versionamento do Dec-B, garantindo que o ambiente esteja devidamente configurado antes do início do desenvolvimento. A adição do parâmetro `--project-start` permite uma configuração mais robusta para novos projetos, economizando tempo e evitando erros comuns na criação das branches principais.

