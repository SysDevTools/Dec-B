# Develop

A branch [`develop`](./develop.md) é onde ocorre o desenvolvimento contínuo. Ela serve como uma linha do tempo intermediária entre as branches de release e a branch [main](./main.md). Nesta branch, são integradas todas as mudanças preparadas para a próxima versão estável.

## Propósito
A branch `develop` é o local onde todas as novas funcionalidades, correções de bugs e melhorias são integradas antes de serem movidas para a branch [main](./main.md). Ela fornece um ambiente para testes e revisões antes que o software seja considerado estável.

## Estrutura
- **Commits**: Contém todos os commits que foram revisados e aprovados para serem incluídos na próxima versão estável.
- **Histórico**: Deve ser completo, incluindo todos os detalhes do desenvolvimento.

## Fluxo de Trabalho
1. **Integração Contínua**: Mudanças de todas as branches de [`release`](./release-xyz.md) são integradas na `develop`.
2. **Revisão e Testes**: A cada alteração significativa, a branch `develop` é testada para garantir a estabilidade.
3. **Rebase**: Após a aprovação, a branch `develop` é utilizada para criar a branch `main` através de um [Rebase Squash](https://git-scm.com/docs/merge-options#Documentation/merge-options.txt---squash).

## Links Relacionados
- [Main](./main.md)
- [Release/x.y.z](./release-xyz.md)
- [Git Merge](https://git-scm.com/docs/git-merge)
- [Git Rebase](https://git-scm.com/docs/git-rebase)
