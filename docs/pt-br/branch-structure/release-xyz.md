# Release/x.y.z

A branch `release/x.y.z` é usada para preparar uma nova versão do software. Ela captura as mudanças específicas que serão integradas na branch [`develop`](./develop.md), mas de forma isolada, permitindo uma gestão mais controlada e detalhada do ciclo de desenvolvimento de uma versão específica.

## Propósito
A branch `release/x.y.z` é onde as versões intermediárias são refinadas e estabilizadas antes de serem integradas na branch [`develop`](./develop.md). Isso inclui a aplicação de ajustes finais, correções de bugs, e revisões de última hora.

## Estrutura
- **Commits**: Contém todos os commits relevantes para o ciclo de desenvolvimento de uma versão específica.
- **Histórico**: Reflete todas as mudanças feitas para preparar uma versão antes de seu merge na [`develop`](./develop.md).

## Fluxo de Trabalho
1. **Criação da Branch**: Uma nova branch `release/x.y.z` é criada a partir da branch [`develop`](./develop.md).
2. **Testes e Ajustes**: Modificações são aplicadas até que a versão esteja pronta para ser integrada.
3. **Integração**: Quando a versão está pronta, a branch `release/x.y.z` é integrada na branch `develop`.

## Links Relacionados
- [Develop](./develop.md)
- [Tags](https://git-scm.com/docs/git-tag)
- [Git Merge](https://git-scm.com/docs/git-merge)
