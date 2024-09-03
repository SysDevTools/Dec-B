# Dec-B (Decoupled Branches)  

**Dec-B** (Decoupled Branches - Branches Desacopladas) é um sistema de versionamento e um padrão de workflow para gerenciamento de código com comandos próprios baseados em node.js e comandos para [Git](https://git-scm.com/)  , sendo assim, também, um framework para ele. 

Através destes procedimentos (e scripts)  , ele simplifica e padroniza ações comuns de versionamento como:
- Inicialização de repositórios.
- Início e término de releases.
- Gerenciamento de ações comuns durante o desenvolvimento, incluindo cenários de código compartilhado.

## Logo

<div style="text-align: center;padding-top: 30px">

   ![logo](./docs/dec-b.svg)  

</div>

## Estrutura de pastas do projeto

A estrutura de documentação de todo o projeto `Dec-B` é intencionalmente super-modularizada para atender ao cenário acadêmico em que será utilizada. Essa abordagem permite que cada função, filosofia, regra e procedimento seja documentado de forma independente, facilitando a atribuição de tarefas específicas para os alunos. Cada pequeno documento pode ser alvo de estudos e exercícios, permitindo uma evolução gradual e detalhada do conhecimento.

<pre style="line-height: 1.2; font-size: 12px;">
📦 <a href="./README.md">Dec-B/</a>
├── 📂 <a href="./cli/README.md">cli/</a>
│   ├── (...)
│   └── 📜 <a href="./cli/README.md">README.md</a>
├── 📂 <a href="./docs/pt-br/README.md">docs/</a>
│   └── 📂 <a href="./docs/pt-br/README.md">pt-br/</a>
│       ├── 📂 <a href="./docs/pt-br/branch-structure/">branch-structure/</a>
│       │   ├── 📜 <a href="./docs/pt-br/branch-structure/main.md">main.md</a>
│       │   ├── 📜 <a href="./docs/pt-br/branch-structure/develop.md">develop.md</a>
│       │   ├── 📜 <a href="./docs/pt-br/branch-structure/release-xyz.md">release-xyz.md</a>
│       │   └── 📜 <a href="./docs/pt-br/branch-structure/release-xyz-user.md">release-xyz-user.md</a>
│       ├── 📂 <a href="./docs/pt-br/cycles/">cycles/</a>
│       │   ├── 📜 <a href="./docs/pt-br/cycles/init.md">init.md</a>
│       │   ├── 📂 <a href="./docs/pt-br/cycles/release/">release/</a>
│       │   │   ├── 📂 <a href="./docs/pt-br/cycles/release/init/">init/</a>
│       │   │   │   └── 📜 <a href="./docs/pt-br/cycles/release/init/README.md">README.md</a>
│       │   │   ├── 📂 <a href="./docs/pt-br/cycles/release/pull/">pull/</a>
│       │   │   │   └── 📜 <a href="./docs/pt-br/cycles/release/pull/README.md">README.md</a>
│       │   │   ├── 📂 <a href="./docs/pt-br/cycles/release/push/">push/</a>
│       │   │   │   └── 📜 <a href="./docs/pt-br/cycles/release/push/README.md">README.md</a>
│       │   │   ├── 📂 <a href="./docs/pt-br/cycles/release/rebase/">rebase/</a>
│       │   │   │   └── 📜 <a href="./docs/pt-br/cycles/release/rebase/README.md">README.md</a>
│       │   │   ├── 📂 <a href="./docs/pt-br/cycles/release/tag/">tag/</a>
│       │   │   │   └── 📜 <a href="./docs/pt-br/cycles/release/tag/README.md">README.md</a>
│       │   │   └── 📜 <a href="./docs/pt-br/cycles/release/README.md">README.md</a>
│       ├── 📜 <a href="./docs/pt-br/commit-strategy.md">commit-strategy.md</a>
│       ├── 📜 <a href="./docs/pt-br/guide.md">guide.md</a>
│       └── 📜 <a href="./docs/pt-br/semver.md">semver.md</a>
├── 📜 <a href="./.gitignore">.gitignore</a>
├── 📜 <a href="./LICENCE">LICENCE</a>
├── 📜 <a href="./package.json">package.json</a>
├── 📜 <a href="./package-lock.json">package-lock.json</a>
└── 📜 <a href="./README.md">README.md</a>
</pre>


## Cenário

Em ambientes acadêmicos e pequenas equipes de desenvolvimento, o versionamento de código enfrenta desafios frequentes. Desenvolvedores que participam de forma esporádica em um sistema muitas vezes têm dificuldade em manter um padrão de versionamento e fluxo de trabalho, resultando em um histórico de versões confuso e difícil de auditar. As integrações (merges)   podem causar conflitos, comprometendo a produtividade e a padronização.

A ausência de um workflow rígido pode levar a um desenvolvimento desorganizado, com linhas do tempo (branches)   não estruturadas e sem controle adequado de versões. Isso dificulta a rastreabilidade das alterações e a auditoria do código, afetando a qualidade do software.

Muitos workflows de versionamento tentam resolver esse problema, adotando a filtragem de alterações, mas isso pode resultar na perda de detalhes importantes para a compreensão completa de um sistema. Este problema é agravado em cenários onde a auditoria ou acompanhamento didático é essencial, como no exemplo de ambientes acadêmicos.

O desafio é adotar um padrão de versionamento que padronize o workflow, promova a granularidade das alterações, facilite a revisão e correção de erros, minimize conflitos de integração e organize o fluxo de desenvolvimento de forma clara e estruturada. Que ainda mantenha um histórico limpo, padronizado e detalhado, incluindo tentativas, testes e erros de desenvolvimento e as ações subsequentes.

### Os Níveis de Granularidade

O Dec-B promove níveis de granularidade (detalhamento)   nas alterações (commits)   e organiza o desenvolvimento em linhas do tempo (branches)   desacopladas. Isso é feito com históricos de versão separados, cada um com um nível de detalhamento próprio para um propósito específico.

Os diferentes níveis de granularidade funcionam como um "zoom" no histórico do desenvolvimento:

- [Main](./docs/pt-br/branch-structure/main.md)  : A história das versões do software, focada na evolução e nas versões estáveis do software. Contém apenas as [versões semânticas](./docs/pt-br/semver.md)  , oferecendo uma visão geral do desenvolvimento.
- [Develop](./docs/pt-br/branch-structure/develop.md)  : A história revisada e resumida dos "keyframes" da construção do sistema, servindo como a principal referência de desenvolvimento. Inclui tags importantes entre as [versões semânticas](./docs/pt-br/semver.md)  , oferecendo uma visão intermediária do desenvolvimento.
- [Release/x.y.z](./docs/pt-br/branch-structure/release-xyz.md)  : A história completa e específica da construção de cada release, permitindo um rastreamento detalhado do processo de desenvolvimento. Inclui os commits chave (tags)   para um ciclo de desenvolvimento específico, oferecendo uma visão detalhada do desenvolvimento de cada versão, com as mensagens originais dos desenvolvedores (ao serem copiadas para a linha do tempo (branch)   develop, estas são revisadas)  .
- [Release/x.y.z_user](./docs/pt-br/branch-structure/release-xyz-user.md)  : A branch de cada desenvolvedor. É local e não obedece a nenhum padrão específico. É onde toda e qualquer alteração e teste são feitos, sem controle ou forma. Contém as alterações granulares de cada desenvolvedor (entre as `tags`)  , permitindo uma visão detalhada das modificações individuais, incluindo tentativas, testes e até erros cometidos.

Desta forma, o Dec-B também mantém todas as alterações (commits)  , permitindo a avaliação detalhada de cada feature, alteração ou exclusão. Além disso, os conflitos de integração (merge)   são resolvidos individualmente pelos desenvolvedores antes de subir uma versão, centralizando a resolução de conflitos em quem os causou. No final, há um momento de revisão para padronizar mensagens de commits e outras ações, garantindo que a linha do tempo (branch)   develop seja uma versão revisada e limpa da linha do tempo (branch)   release.

## As Branches Locais e Remotas
Branches (linhas do tempo)   armazenadas no repositório local são utilizadas para desenvolvimento granular e despadronizado por cada desenvolvedor. As branches remotas (origin)   representam a documentação oficial do sistema. 

## Estratégia de Commits
- [Estratégia de Commits](./docs/pt-br/commit-strategy.md)  

## Ciclos do Dec-B

- [INIT](./docs/pt-br/cycles/INIT/README.md)   - Inicializa um novo repositório com a estrutura do `Dec-B`.
- [RELEASE](./docs/pt-br/cycles/release/README.md)   - Cria e/ou gerencia um ciclo de `release`.
  - [INIT](./docs/pt-br/cycles/release/README.md#INIT)   - Inicia um novo ciclo de `release`.
  - [PULL](./docs/pt-br/cycles/release/README.md#PULL)   - Realiza um pull da branch de `release`.
  - [PUSH](./docs/pt-br/cycles/release/README.md#PUSH)   - Realiza um push da branch de `release`.
  - [REBASE](./docs/pt-br/cycles/release/README.md#REBASE)   - Faz o rebase interativo de `release` para `develop`.
  - [TAG](./docs/pt-br/cycles/release/README.md#TAG)   - Define uma tag a ser criada para o envio.

## Dec-B CLI (dcb)  

O `Dec-B` oferece uma série de comandos para gerenciar o fluxo de trabalho de versionamento. 
Todas as opções e parâmetros podem ser executados diretamente na linha ou por meio de menús. Os menús são apresentados automaticamente sempre que um parâmetro estiver ausente. Desta forma se aprende enquanto se usa.

### Instalação do CLI
A instalação do CLI do Dec-B é feito via NPM:

```bash
npm install -g @dec-b/cli
```

### Mais informações
Para mais informações, acesse a documentação do CLI em:

- [Dec-B CLI Readme)  ](./cli/README.md)  

## Abordagem Baseada em Testes (TDD)  

O Dec-B é desenvolvido seguindo a abordagem TDD (Test Driven Development)  . Todos os componentes do sistema são testados exaustivamente antes de serem implementados. Isso garante a qualidade do código e facilita a manutenção e a evolução do sistema.

### Estrutura de Testes

Os testes são organizados na pasta `/tests`, e cada função possui seu próprio arquivo de teste. Utilizamos o [BATS (Bash Automated Testing System)  ](https://github.com/bats-core/bats-core)   para escrever e executar os testes automatizados.

Para detalhes sobre como instalar e executar os testes, veja [Instruções de Testes](./docs/pt-br/testing-instructions.md)  .

## Alguns termos utilizados aqui

### [Tags](https://git-scm.com/docs/git-tag)  
### [Push](https://git-scm.com/docs/git-push)  
### [Squash](https://git-scm.com/docs/merge-options#Documentation/merge-options.txt---squash)  
### [Versões Semânticas](./docs/pt-br/semantic-versions.md)  
Versões semânticas seguem o padrão Major.Minor.Patch (e.g., 1.0.0).

## Contribuição

Para contribuir com o projeto `Dec-B`, siga estas etapas:

1. Crie um fork do repositório.
2. Clone o seu fork para sua máquina local.
3. Crie uma branch para a sua contribuição.
4. Faça as alterações necessárias e commit.
5. Envie suas alterações para o seu fork.
6. Crie um Pull Request descrevendo suas alterações.

Para mais detalhes sobre como contribuir, consulte o [Guia de Contribuição](./docs/pt-br/guide.md).

---

## Contato

Para dúvidas ou sugestões, entre em contato através do email: contato@dec-b.org

---

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais detalhes.


