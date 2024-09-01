# Main

A branch `main` é a linha do tempo principal do projeto. Ela contém o estado final e estável do software, refletindo as versões que foram aprovadas e liberadas para produção. Nessa branch, encontram-se apenas os commits de [versões semânticas](../semver.md), garantindo que o histórico do projeto seja claro e conciso.

## Propósito
A branch `main` é o ponto de referência para qualquer versão do software que esteja em produção. Isso significa que qualquer atualização na `main` foi revisada e testada antes de ser integrada.

## Estrutura
- **Commits**: Apenas commits de [versões semânticas](../semver.md), vindas da maturação de uma versão de desenvolvimento ([`develop`](./develop.md)) ou diretamente por um hoftix

## Fluxo de Trabalho
O fluxo de trabalho típico para a `main` envolve:
1. **Rebase Squash**: A partir da branch [`develop`](./develop.md), utilizando o [Rebase](https://git-scm.com/docs/git-rebase) para combinar todos os commits em um único commit antes de movê-lo para a `main`.
2. **Revisão e Testes**: Antes de qualquer merge, deve-se garantir que as alterações passaram por todos os testes necessários e foram revisadas.

## Links Relacionados
- [Versões Semânticas](../semver.md)
- [Develop](./develop.md)
- [Git Merge](https://git-scm.com/docs/git-merge)
- [Git Rebase](https://git-scm.com/docs/git-rebase)
