<p align="center">
  <img src="./assets/dec-b.svg" alt="dec-b Logo" width="30%"/>
</p>

> 🚧 **Dec-B ainda está em fase de protótipo!**
>
> Esta versão está focada na **definição conceitual e estruturação inicial**. Algumas seções podem estar **incompletas ou em revisão**.  
> Funcionalidades, documentação detalhada e exemplos práticos ainda estão sendo desenvolvidos.  
>
>📌 Nesta fase, estamos estruturando:
>
> - 🏗 Conceitos e fundamentos globais
> - 📄 Documentação progressiva vinculada a este README
> - 🖥️ Documentação conceitual de CLI específico

# Dec-B (Decoupled Branches) - _[Workflow](./docs/pt-br/dictionary.md#workflow) [Git](./docs/pt-br/dictionary.md#git) de [Branches](./docs/pt-br/dictionary.md#branch) Desacopladas_

## intro

![Status](https://img.shields.io/badge/Status-Prot%C3%B3tipo-orange?style=for-the-badge)
![GitHub contributors](https://img.shields.io/github/contributors/SysDevTools/Dec-B?label=Contribuidores&style=for-the-badge)
![CLI Disponível](https://img.shields.io/badge/CLI%20Disponível-NPM%20%7C%20Bash-blue?style=for-the-badge)
![Tipo](https://img.shields.io/badge/Tipo-Workflow%20%7C%20Framework%20Git-purple?style=for-the-badge)
![Licença](https://img.shields.io/badge/Licen%C3%A7a-MIT-green?style=for-the-badge)

O **Dec-B** (_Decoupled [Branches](./docs/pt-br/dictionary.md#branch)_) é um [workflow](./docs/pt-br/dictionary.md#workflow) e [framework](./docs/pt-br/dictionary.md#framework) para [Git](./docs/pt-br/dictionary.md#git) que organiza o histórico de desenvolvimento de forma modular e rastreável.  
Diferente de fluxos tradicionais como [Git-Flow](./docs/pt-br/dictionary.md#git-flow), ele prioriza ciclos [desacoplados](./docs/pt-br/dictionary.md#desacoplado), granularidade controlada e automação inteligente via [CLI](./docs/pt-br/dictionary.md#cli).  

O **Dec-B** resolve problemas comuns do [versionamento](./docs/pt-br/dictionary.md#versionamento), como [conflitos de merge](./docs/pt-br/dictionary.md#conflitos-de-merge) e granularidade excessiva de commits, oferecendo um modelo estruturado baseado em [ciclos](./docs/pt-br/dictionary.md#ciclo). Seu fluxo permite que desenvolvedores foquem no código sem comprometer a [rastreabilidade](./docs/pt-br/dictionary.md#rastreabilidade) do projeto.

> 💡 "**Histórico limpo, rastreabilidade total, menos conflitos.**"

🔎 Para mais detalhes, acesse **[Filosofia do Dec-B](./docs/pt-br/philosophy/philosophy.md)**

## Motivação

Workflows tradicionais como **[Git-Flow](./docs/pt-br/dictionary.md#git-flow)** oferecem estrutura, mas criam barreiras desnecessárias quando aplicados fora de seu contexto ideal. Outras abordagens como **[Trunk-Based Development](./docs/pt-br/dictionary.md#trunk-based-development)** priorizam agilidade, mas sacrificam [rastreabilidade](./docs/pt-br/dictionary.md#rastreabilidade).  

O **Dec-B** foi criado para equilibrar esses dois extremos. Ele não força um fluxo rígido, mas também não deixa o versionamento solto. Em vez de basear a estrutura do código apenas nas **branches**, o **Dec-B** organiza o [versionamento](./docs/pt-br/dictionary.md#versionamento) em **ciclos**, garantindo um histórico mais limpo e rastreável sem adicionar burocracia.  

### 📌 Problemas que o Dec-B aborda  

🧩 **Granularidade excessiva ou desorganizada** → Commits pequenos demais geram ruído no histórico. Já commits grandes demais dificultam reverts e auditoria. O **Dec-B** usa um fluxo desacoplado para evitar ambos os problemas.  

🧩 **Conflitos de merge desnecessários** → Workflows tradicionais forçam merges diretos entre branches, aumentando conflitos. O **Dec-B** resolve isso com [cherry-pick](./docs/pt-br/dictionary.md#cherry-pick) automatizado e sincronização entre ciclos.  

🧩 **Divergência entre repositórios locais e remotos** → Em fluxos tradicionais, branches temporárias e commits desorganizados poluem o histórico remoto. O **Dec-B** desacopla as contribuições, mantendo um histórico local limpo sem perder rastreabilidade.  

O **Dec-B** permite que times de desenvolvimento **fiquem focados no código** sem precisar gerenciar versionamento manualmente. Ele mantém o histórico organizado, sem exigir um workflow rígido como o **Git-Flow** ou uma abordagem solta como o **Trunk-Based Development**.  

💡 > **"Histórico limpo, rastreabilidade total, menos conflitos. O versionamento deve servir ao desenvolvedor, não o contrário."**  

🔎 Para mais detalhes sobre as motivações do Dec-B, acesse **[Motivação do Dec-B](./docs/pt-br/philosophy/motivation.md)**

## Referências e Influências do Dec-B

O **Dec-B** não é um conceito exclusivo, mas uma resposta às limitações de workflows já existentes. Ele combina as vantagens de diversas abordagens de **[versionamento](./docs/pt-br/dictionary.md#versionamento)** e ajusta suas limitações para criar um fluxo mais adaptável e rastreável.

🔹 **[Git-Flow](https://nvie.com/posts/a-successful-git-branching-model/)** → Workflows estruturados baseados em múltiplas branches. O **Dec-B** se **alinha** com a proposta de rastreabilidade do **Git-Flow**, mas se **desalinha** ao eliminar merges diretos e granularidade forçada.  

🔹 **[Trunk-Based Development](https://trunkbaseddevelopment.com/)** → Desenvolvimento contínuo com commits frequentes na branch principal. O **Dec-B** adota a simplicidade do **Trunk-Based Development**, mas evita sua falta de estrutura ao organizar commits em ciclos rastreáveis.  

🔹 **[GitLab Flow](https://docs.gitlab.com/ee/topics/gitlab_flow.html)** → Combina **Git-Flow** com **Trunk-Based**, priorizando releases baseadas em ambiente. O **Dec-B** compartilha a ideia de ciclos bem definidos, mas mantém as contribuições desacopladas entre branches.  

🔹 **[Feature Branching](https://martinfowler.com/bliki/FeatureBranch.html)** → Cada funcionalidade desenvolvida em uma branch separada antes de ser integrada. O **Dec-B** incorpora essa ideia, mas evita o acúmulo de branches long-lived ao permitir sincronização seletiva.  

🔹 **[Cherry-Pick](https://git-scm.com/docs/git-cherry-pick)** → Comando Git baseado na seleção manual de commits para outras branches. O **Dec-B** usa **cherry-pick automatizado**, garantindo que o histórico permaneça rastreável sem dependência de merges diretos.  

Dessa forma, o **Dec-B** não impõe um fluxo único. Ele permite que equipes **organizem o histórico de código de forma natural**, sem a rigidez do **Git-Flow** e sem a falta de rastreabilidade do **Trunk-Based Development**.  

> 💡**O Dec-B tem forte inspiração e alinhamento com o Git-Flow mas com abordagem de uso diferente, baseado em ciclos e não exclusivamente baseado em brnches**

🔎 Para mais detalhes sobre a abordagem do projeto, acesse **[o Dec-B comparado](./docs/pt-br/philosophy/comparison.md)**

## Filosofia do Dec-B  

O **Dec-B** foi projetado para resolver problemas comuns do [versionamento](./docs/pt-br/dictionary.md#versionamento), oferecendo um equilíbrio entre [rastreabilidade](./docs/pt-br/dictionary.md#rastreabilidade), [granularidade](./docs/pt-br/dictionary.md#granularidade) e flexibilidade. Ele não apenas organiza commits e branches, mas também estrutura um fluxo que reduz conflitos e facilita a colaboração, impondo a menor burocracia possível.  

📌 **Princípios Fundamentais do Dec-B**  

🔹 **Branches desacopladas** → Em vez de manter dependências rígidas entre branches, o Dec-B propõe um histórico desacoplado, permitindo granularidade livre no desenvolvimento.  
🔹 **Histórico como um "zoom" progressivo** → Cada [branch](./docs/pt-br/dictionary.md#branch) representa um nível de detalhamento do desenvolvimento. A sincronização entre branches ocorre via _cherry pick_, não _merge_, garantindo flexibilidade nos commits sem perda de rastreabilidade.  
🔹 **Resolução descentralizada de conflitos de merge** → Os conflitos ocorrem no desenvolvimento local, evitando interrupções na branch remota. Isso facilita a resolução pelos próprios desenvolvedores envolvidos.  
🔹 **Foco no ciclo de desenvolvimento** → O Dec-B elimina a preocupação com manipulação manual de branches, automatizando esse processo para que o desenvolvedor possa focar no código e no fluxo do projeto.  
🔹 **Automação inteligente** → O CLI do **Dec-B** não apenas executa comandos Git, mas analisa o contexto e automatiza fluxos de versionamento, utilizando CLIs nativos de servidores Git para integração remota e local.  

💡 > **"Foco no ciclo, manipulação transparente e automatizada de branches. Histórico separado do desenvolvimento: um para cada propósito."**  

🔎 Para mais detalhes sobre a filosofia do Dec-B, acesse **[Filosofia do Dec-B](./docs/pt-br/philosophy/philosophy.md)**.  

## Como Funciona  

O **Dec-B** organiza o [versionamento](./docs/pt-br/dictionary.md#versionamento) de código em **ciclos estruturados**, garantindo um fluxo previsível e rastreável.  
Em vez de apenas organizar branches por responsabilidade, o Dec-B estrutura o histórico do código em **ciclos de versionamento**, encapsulando processos recorrentes e reduzindo a complexidade manual.  

📌 **Como o Dec-B organiza o versionamento?**  

🔹 **Ciclos de versionamento** → O código evolui através de ciclos estruturados, garantindo que cada etapa do desenvolvimento seja documentada e rastreável.  
🔹 **Branches desacopladas** → A história do código é separada em diferentes níveis de granularidade, com branches transitórias e permanentes.  
🔹 **Automação de fluxos** → O CLI do Dec-B gerencia operações automaticamente, garantindo que cada etapa seja executada corretamente.  

🔎 Para mais detalhes, consulte **[Estrutura de Versionamento](./docs/pt-br/adoption/versioning_structure.md)**.  

---

### 📌 Estrutura do Dec-B: Branches e Ciclos  

A estrutura do **Dec-B** é composta por branches organizadas de forma transparente ao usuário, que se concentra apenas nos ciclos.  

🔹 **Main** → Conta a história do software, contendo apenas versões semânticas.  
🔹 **Develop** → Conta a história do desenvolvimento, integrando releases revisadas.  
🔹 **Release/x.y.z** → Contém a história de cada sprint, sendo uma branch temporária e desacoplada.  
🔹 **Release/x.y.z_user** → Versão local da release, registrando o trabalho individual dos desenvolvedores.  

💡 > **"Branches desacopladas garantem rastreabilidade sem poluir o histórico do projeto. O CLI do Dec-B gerencia essas estruturas automaticamente."**  

🔎 Para mais detalhes, consulte **[Estrutura de Branches do Dec-B](./docs/pt-br/adoption/branches.md)**.  

---

### 📌 Ciclos do Dec-B  

Os **ciclos de versionamento** do Dec-B estruturam o fluxo de trabalho, permitindo um controle preciso das mudanças no código sem a necessidade de merges diretos.  
Cada ciclo encapsula uma etapa do desenvolvimento, garantindo que processos recorrentes sejam rastreáveis e previsíveis.  

🔹 **Ciclo INIT** → Inicialização do repositório, configurando branches e integração com servidores Git.  
🔹 **Ciclo RELEASE** → Gerenciamento de versões, organizando o fluxo de releases e garantindo um histórico estruturado.  
🔹 **Ciclo PULL/PUSH** → Sincronização entre branches locais e remotas, minimizando conflitos e garantindo a consistência do histórico.  
🔹 **Ciclo REBASE/TAG** → Reorganização e marcação de commits, facilitando auditoria e rastreamento de mudanças.  

Cada um desses ciclos é automatizado pelo **Dec-B CLI**, que executa as etapas necessárias de forma padronizada e interativa.  

💡 > **"No Dec-B, o fluxo de desenvolvimento não é definido por branches, mas por ciclos. Cada etapa do versionamento é rastreável e organizada, sem comprometer a flexibilidade do time."**  

🔎 Para mais detalhes, consulte **[Ciclos do Dec-B](./docs/pt-br/adoption/cycles.md)**.  

---

### 📌 O Dec-B CLI (`dcb`) – Automação e Padronização  

O **Dec-B CLI (`dcb`)** é um [framework](./docs/pt-br/dictionary.md#framework) que **automatiza, padroniza e instrui** o usuário no uso do Git, garantindo que **todas as operações sigam um fluxo controlado e rastreável**.  

📌 **Principais funcionalidades do CLI**  

🔹 **Análise antes da execução** → O Dec-B verifica pré-requisitos antes de aplicar qualquer comando, reduzindo erros comuns.  
🔹 **Aprendizado progressivo** → Ele não esconde o [Git](./docs/pt-br/dictionary.md#git), mas guia o usuário ao exibir e montar a linha de comando antes da execução.  
🔹 **Automação inteligente** → O CLI **não impõe menus**, perguntando apenas informações que não foram fornecidas, permitindo que com o tempo, cada ação seja realizada com **uma única linha de comando**.  
🔹 **Padronização de fluxo** → Todos os desenvolvedores seguem **o mesmo padrão de [versionamento](./docs/pt-br/dictionary.md#versionamento)**, reduzindo erros e divergências.  

💡 > **"Se você sabe o fluxo, pode rodar tudo em uma linha. Se não sabe, o CLI pergunta apenas o necessário e te ensina durante o uso."**  

🔎 Para detalhes técnicos sobre o CLI do Dec-B, acesse **[Documentação do Dec-B CLI](./cli/README.md)**.  

## Por Onde Começar  

O **Dec-B** pode ser adotado de duas formas, dependendo do nível de automação e controle desejado para o versionamento do seu projeto.  

### ▶️ Uso do Dec-B Apenas como Workflow  

Se você deseja apenas seguir o **workflow do Dec-B** sem automação, pode aplicá-lo manualmente, utilizando as diretrizes e estrutura recomendada para **branches e ciclos de versionamento**.  

🔹 **Guia de Uso do Workflow Dec-B** → [Acesse a documentação](./docs/pt-br/adoption/workflow_guide.md)  

💡 > **"_O workflow do Dec-B pode ser seguido manualmente, garantindo organização e rastreabilidade sem necessidade de ferramentas externas._"**  

---

### ▶️ Automação do Workflow com o Dec-B CLI  

Para equipes que desejam **automatizar o controle de branches e ciclos de versionamento**, o **Dec-B CLI (`dcb`)** fornece comandos padronizados e assistentes interativos, garantindo **execução consistente e rastreável** das práticas do Dec-B. O CLI pode ser instalado via NPM e aplicado diretamente no fluxo de desenvolvimento.  

🔹 **Guia de Implantação com Dec-B CLI** → [Acesse a documentação](./docs/pt-br/adoption/cli_usage.md)  
🔹 **Instalação do Dec-B CLI** → Disponível via [NPM](https://www.npmjs.com/package/@sysdevtools/dec-b-cli)  

💡 > **"_Com o Dec-B CLI, o workflow se torna automatizado, garantindo versionamento previsível e rastreável._"**  

## Integração com _FlowED_

O Dec-B faz parte de um ecossistema maior de ferramentas de desenvolvimento e gestão de projetos. Ele se integra perfeitamente ao [`FlowED`](https://github.com/SysDevTools/FlowED), um sistema de gestão de projetos com base na autoeducação. 
Neste cenário, enquanto o `FlowED` gerencia o fluxo do projeto, o Dec-B assegura que o [Versionamento](./docs/pt-br/dictionary.md#versionamento)  de código siga um fluxo alinhado a ele.

A documentação para o uso do Dec-B com o FlowED pode ser obtida diretamente no repositório do FlowED, onde é mantida.

🔎 Para mais detalhes sobre essa integração, consulte **[FlowED <-> Dec-B](https://github.com/SysDevTools/FlowED/blob/main/docs/pt-br/philosophy/dec-b-alignment.md)** (link externo)

## Contribuição

Para contribuir com o projeto `Dec-B`, siga estas etapas:

1. Crie um fork do repositório.
2. Clone o seu fork para sua máquina local.
3. Crie uma [Branch](./docs/pt-br/dictionary.md#branch) para a sua contribuição.
4. Faça as alterações necessárias e commit.
5. Envie suas alterações para o seu fork.
6. Crie um Pull Request descrevendo suas alterações.

Para mais detalhes sobre como contribuir, consulte o [Guia de Contribuição](./docs/pt-br/guide.md).

---

## Contato

Apesar de ser um projeto independente, o esforço de desenvolvimento deste projeto faz parte do Ecossistea do FlowED. Assim, para dúvidas ou sugestões, entre em contato através do email de contato do FlowED: <contato@flowed.info>

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais detalhes.
