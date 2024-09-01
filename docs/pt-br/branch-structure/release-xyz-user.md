# Release/x.y.z_user

A branch `release/x.y.z_user` é a branch individual de um desenvolvedor, usada para realizar alterações granulares, testes, e experimentações antes que as mudanças sejam revisadas e integradas na branch [`release/x.y.z`](./release-xyz.md).

## Propósito
A branch `release/x.y.z_user` permite que desenvolvedores trabalhem em funcionalidades específicas ou correções de bugs de forma isolada. Isso facilita a experimentação e iteração sem comprometer o ciclo principal de desenvolvimento.

## Estrutura
- **Commits**: Inclui todos os commits do desenvolvedor, incluindo tentativas, testes, e experimentações.
- **Histórico**: Reflete todas as atividades do desenvolvedor antes de uma possível integração.

## Fluxo de Trabalho
1. **Criação da Branch**: Um desenvolvedor cria sua própria branch `release/x.y.z_user` a partir da branch [`release/x.y.z`](./release-xyz.md).
2. **Desenvolvimento e Testes**: O desenvolvedor trabalha em suas alterações de forma isolada.
3. **Integração**: Quando as alterações estão prontas, elas são revisadas e podem ser integradas na branch `release/x.y.z`.

## Links Relacionados
- [Release/x.y.z](./release-xyz.md)
- [Develop](./develop.md)
- [Git Cherry-Pick](https://git-scm.com/docs/git-cherry-pick)
- [Git Rebase](https://git-scm.com/docs/git-rebase)
