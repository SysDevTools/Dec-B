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

![Status](https://img.shields.io/badge/Status-Prot%C3%B3tipo-orange?style=for-the-badge)
![GitHub contributors](https://img.shields.io/github/contributors/SysDevTools/Dec-B?label=Contribuidores&style=for-the-badge)
![CLI Disponível](https://img.shields.io/badge/CLI%20Disponível-NPM%20%7C%20Bash-blue?style=for-the-badge)
![Tipo](https://img.shields.io/badge/Tipo-Workflow%20%7C%20Framework%20Git-purple?style=for-the-badge)
![Licença](https://img.shields.io/badge/Licen%C3%A7a-MIT-green?style=for-the-badge)

O **Dec-B** (_Decoupled [Branches](./docs/pt-br/dictionary.md#branch)_) é um [workflow](./docs/pt-br/dictionary.md#workflow) e [framework](./docs/pt-br/dictionary.md#framework) para [Git](./docs/pt-br/dictionary.md#git) que organiza o histórico de desenvolvimento de forma estruturada e rastreável.  

Diferente de abordagens que centralizam a organização do código em hierarquias fixas de [branches](./docs/pt-br/dictionary.md#branch), o **Dec-B** prioriza um fluxo baseado em [ciclos](./docs/pt-br/dictionary.md#ciclo), permitindo um controle mais flexível sobre a [granularidade](./docs/pt-br/dictionary.md#granularidade) do histórico e a estruturação progressiva do [versionamento](./docs/pt-br/dictionary.md#versionamento).  

Ao separar o fluxo de desenvolvimento em camadas de abstração, o **Dec-B** melhora a [rastreabilidade](./docs/pt-br/dictionary.md#rastreabilidade), reduzindo a complexidade na gestão de [conflitos de merge](./docs/pt-br/dictionary.md#conflitos-de-merge) e no acompanhamento das mudanças ao longo do tempo.  

💡 > **"_O Dec-B estrutura o histórico do código sem comprometer a flexibilidade do fluxo de trabalho._"**

🔎 Para mais detalhes, acesse **[Filosofia do Dec-B](./docs/pt-br/philosophy/philosophy.md)**

## Motivação

A complexidade do versionamento frequentemente cria um impasse: ou se adota um fluxo rígido e estruturado, sacrificando agilidade, ou se mantém um histórico livre e descentralizado, dificultando a [rastreabilidade](./docs/pt-br/dictionary.md#rastreabilidade) e a organização do código.  

Desenvolvedores precisam de liberdade para iterar rapidamente, realizar commits constantes e ajustar seu fluxo de trabalho sem restrições excessivas. Ao mesmo tempo, equipes e projetos exigem um histórico confiável, onde cada alteração possa ser compreendida e reproduzida sem esforço adicional.  

Encontrar esse equilíbrio significa estruturar o [versionamento](./docs/pt-br/dictionary.md#versionamento) sem impor burocracia, garantindo flexibilidade sem comprometer o controle. A solução deve permitir commits livres durante o desenvolvimento, mas sem perder a previsibilidade do histórico.  

💡 > **"_Versionamento eficiente: estruturar o fluxo sem interromper o desenvolvimento._"**

### 📌 Motivações para um workflow eficiente e transparente no uso  

🧩 **Liberdade no desenvolvimento sem comprometer a organização** → O versionamento deve permitir que desenvolvedores **façam commits quando necessário**, sem precisar se preocupar com granularidade imediata. No entanto, esses commits precisam ser **revisáveis e organizados antes de serem integrados ao histórico principal**.  

🧩 **Resolução de conflitos no momento e no contexto certo** → Conflitos de merge são inevitáveis, mas a **forma como ocorrem** impacta diretamente a produtividade. Quando são resolvidos apenas no final de um ciclo, o contexto original pode estar perdido, exigindo tempo extra para análise. **Conflitos devem ser resolvidos o mais próximo possível de sua origem**, por quem tem conhecimento direto do que foi alterado.  

🧩 **Menos tempo gerenciando branches, mais tempo focado no código** → O workflow deve **trabalhar para o desenvolvedor, não o contrário**. Manipular branches manualmente adiciona complexidade desnecessária e aumenta a chance de erros operacionais. Um fluxo eficiente **minimiza a necessidade de interações manuais diretas**, garantindo que o foco esteja no desenvolvimento e não na estrutura do versionamento.  

🧩 **Ciclo contínuo de melhoria e rastreabilidade** → O versionamento precisa ser um reflexo **claro e acessível** da evolução do projeto. Um bom workflow não apenas armazena mudanças, mas também **documenta o progresso de forma estruturada**, garantindo que qualquer alteração possa ser rastreada e compreendida sem esforço adicional.  

💡 > **"_Versionamento deve ser um facilitador do desenvolvimento, não uma barreira. O fluxo ideal equilibra liberdade e rastreabilidade sem burocracia._"**  

🔎 Para mais detalhes sobre as motivações do Dec-B, acesse **[Motivação do Dec-B](./docs/pt-br/philosophy/motivation.md)**

## Referências e Influências do Dec-B  

O **Dec-B** não é um conceito isolado, mas parte da evolução dos **[workflows de versionamento](./docs/pt-br/dictionary.md#workflow)**. Ele combina elementos de abordagens existentes para atender às suas motivações Dentre suas referências (de inspiração e de crítica), algumas são mais relevantes.

### 📌 Workflows Baseados em Branches Estruturadas  

🔹 **[Git-Flow](https://nvie.com/posts/a-successful-git-branching-model/)** → Adota múltiplas branches com papéis definidos para cada fase do desenvolvimento. O **Dec-B** mantém o princípio da rastreabilidade do **Git-Flow**, mas se diferencia ao eliminar merges diretos e tornar o fluxo mais descentralizado.  

🔹 **[GitLab Flow](https://docs.gitlab.com/ee/topics/gitlab_flow.html)** → Introduz um modelo híbrido que combina Git-Flow com Trunk-Based Development, priorizando releases baseadas em ambiente. O **Dec-B** compartilha a estrutura por ciclos, mas mantém as contribuições desacopladas entre branches.  

### 📌 Workflows Baseados em Desenvolvimento Contínuo  

🔹 **[Trunk-Based Development](https://trunkbaseddevelopment.com/)** → Trabalha com commits contínuos na branch principal, favorecendo integração rápida, mas sacrificando rastreabilidade. O **Dec-B** incorpora a ideia de granularidade livre, mas mantém controle histórico por meio de ciclos.  

🔹 **[Feature Branching](https://martinfowler.com/bliki/FeatureBranch.html)** → Cada funcionalidade é desenvolvida em uma branch separada e depois integrada ao fluxo principal. O **Dec-B** evita o acúmulo de branches long-lived ao permitir sincronização seletiva.  

### 📌 Workflows de Branches Desacopladas  

O **Dec-B** se encaixa nesta categoria, pois sua estrutura não depende de uma relação hierárquica fixa entre branches. Ele permite que cada ciclo do desenvolvimento tenha um fluxo independente, enquanto mantém rastreabilidade entre os níveis de granularidade.  

Diferente dos workflows tradicionais, ele não exige merges diretos para sincronizar mudanças. Em vez disso, sua abordagem desacoplada permite que cada contribuição seja transferida entre branches de forma seletiva e organizada.  

💡 > **"_O Dec-B não impõe regras fixas, mas organiza o histórico de forma rastreável sem limitar o fluxo de desenvolvimento._"**  

🔎 Para mais detalhes sobre a abordagem do projeto, acesse **[o Dec-B comparado](./docs/pt-br/philosophy/comparison.md)**  

## Filosofia do Dec-B  

O **Dec-B** foi projetado para resolver problemas comuns do [versionamento](./docs/pt-br/dictionary.md#versionamento), oferecendo um equilíbrio entre [rastreabilidade](./docs/pt-br/dictionary.md#rastreabilidade), [granularidade](./docs/pt-br/dictionary.md#granularidade) e flexibilidade. Ele não apenas organiza commits e branches, mas também estrutura um fluxo que reduz conflitos e facilita a colaboração, impondo a menor burocracia possível.  

### 📌 Princípios Fundamentais do Dec-B

🔹 **Branches desacopladas** → Em vez de manter dependências rígidas entre branches, o Dec-B propõe um histórico desacoplado, permitindo granularidade livre no desenvolvimento.  
🔹 **Histórico como um "zoom" progressivo** → Cada [branch](./docs/pt-br/dictionary.md#branch) representa um nível de detalhamento do desenvolvimento. A sincronização entre branches ocorre via _cherry pick_, não _merge_, garantindo flexibilidade nos commits sem perda de rastreabilidade.  
🔹 **Resolução descentralizada de conflitos de merge** → Os conflitos são atraidos para o desenvolvimento local, evitando interrupções na branch remota. Isso facilita a resolução pelos próprios desenvolvedores envolvidos.  
🔹 **Foco no ciclo de desenvolvimento** → O Dec-B elimina a preocupação com manipulação manual de branches, automatizando esse processo para que o desenvolvedor possa focar no código e no fluxo do projeto.  
🔹 **Automação inteligente** → O CLI do **Dec-B** não apenas executa comandos Git, mas analisa o contexto e automatiza fluxos de versionamento inclusive no contexto de repositórios remotos, utilizando CLIs nativos de servidores Git para integração.  

💡 > **"Foco no ciclo, manipulação transparente e automatizada de branches. Histórico separado do desenvolvimento: um para cada propósito."**  

🔎 Para mais detalhes sobre a filosofia do Dec-B, acesse **[Filosofia do Dec-B](./docs/pt-br/philosophy/philosophy.md)**.  

## Como Funciona  

O **Dec-B** organiza o [versionamento](./docs/pt-br/dictionary.md#versionamento) de código em **ciclos estruturados**, garantindo um fluxo previsível e rastreável.  
Em vez de apenas organizar branches por responsabilidade, o Dec-B estrutura o histórico do código em **ciclos de versionamento**, encapsulando processos recorrentes e reduzindo a complexidade manual.  

### 📌 Como o Dec-B organiza o versionamento

🔹 **Ciclos de versionamento** → O código evolui através de ciclos estruturados, garantindo que cada etapa do desenvolvimento seja documentada e rastreável.  
🔹 **Branches desacopladas** → A história do código é separada em diferentes níveis de granularidade, com algumas branches transitórias e outras permanentes, dependendo do escopo.  
🔹 **Automação de fluxos** → O CLI do Dec-B gerencia operações automaticamente, garantindo que cada etapa seja executada o mais corretmente possível. mas não impede que comandos Git sejam executados diretamente.  

🔎 Para mais detalhes, consulte **[Estrutura de Versionamento](./docs/pt-br/philosophy/versioning_structure.md)**.  

---

📍 **Estrutura do Dec-B: Branches, Ciclos e Iterações**

A estrutura do **Dec-B** é composta por branches organizadas de forma transparente ao usuário, que se concentra apenas nos ciclos.
Os **ciclos de versionamento** do Dec-B estruturam o fluxo de trabalho, permitindo um controle preciso das mudanças no código sem a necessidade de merges diretos.  
Cada ciclo encapsula uma etapa do desenvolvimento, garantindo que processos recorrentes sejam rastreáveis e previsíveis.
A interação com as branches ocorre de forma transparente na forma de comandos específicos, que encapsulam os processos nos ciclos e a manipulação das branches

💡 > **Cada um desses ciclos é automatizado pelo **Dec-B CLI**, que executa as etapas necessárias de forma padronizada e interativa**.

---

### 📌 Branches do Dec-B  

🔹 **Main** → Conta a história do software, contendo apenas versões semânticas.  
🔹 **Develop** → Conta a história do desenvolvimento, integrando releases revisadas.  
🔹 **Release/x.y.z** → Contém a história de cada sprint, sendo uma branch temporária e desacoplada.  
🔹 **Release/x.y.z_user** → Versão local da release, registrando o trabalho individual dos desenvolvedores.  

💡 > **"Branches desacopladas garantem rastreabilidade sem poluir o histórico do projeto. O CLI do Dec-B gerencia essas estruturas automaticamente."**  

🔎 Para mais detalhes, consulte **[Estrutura de Branches do Dec-B](./docs/pt-br/philosophy/branches.md)**.  

---

### 📌 Ciclos do Dec-B  

🔹 **Ciclo REPO** → Ciclo de vida do projeto. Comandos neste ciclo criam, clonam, relacionam repositórios locais e remotos e dão manutenção a ele.  
🔹 **Ciclo RELEASE** → Gerenciamento de versões, organizando o fluxo de releases e garantindo um histórico estruturado.  

💡 > **"No Dec-B, o fluxo de desenvolvimento não é definido por branches, mas por ciclos. Cada etapa do versionamento é rastreável e organizada, sem comprometer a flexibilidade do time."**  

🔎 Para mais detalhes, consulte **[Ciclos do Dec-B](./docs/pt-br/philosophy/cycles.md)**.  

### 📌 Comandos do Dec-B  

🔹 **Iterações do tipo INIT/CLONE/FINISH** → Manipulam ciclos.  
🔹 **Iterações do tipo PULL/PUSH** → Sincronização entre branches locais e remotas.  
🔹 **Iterações do tipo REBASE/TAG** → Reorganização e marcação de commits.  

💡 > **"No Dec-B, o fluxo de desenvolvimento não é definido por branches, mas por ciclos. Cada etapa do versionamento é rastreável e organizada, sem comprometer a flexibilidade do time."**  

🔎 Para mais detalhes, consulte **[Iterações do Dec-B](./docs/pt-br/philosophy/iteractions.md)**.  

---

### 📌 O Dec-B CLI (`dcb`) – Automação e Padronização  

O **Dec-B CLI (`dcb`)** é um [framework](./docs/pt-br/dictionary.md#framework) que **automatiza, padroniza e instrui** o usuário no uso do Git, garantindo que **todas as operações sigam um fluxo controlado e rastreável**.  

---

📍 **Principais funcionalidades do CLI**  

🔹 **Análise antes da execução** → O Dec-B verifica pré-requisitos e os executa ao aplicar um comando, permitindo a continuidade.
🔹 **Automação inteligente** → O CLI **não impõe menus**, perguntando apenas informações que não foram fornecidas, permitindo que com o tempo, cada ação seja realizada com **uma única linha de comando**.  
🔹 **Padronização de fluxo** → Todos os desenvolvedores seguem **o mesmo padrão de [versionamento](./docs/pt-br/dictionary.md#versionamento)**, reduzindo erros e divergências.  

---

💡 > **"Se você sabe o fluxo, pode rodar tudo em uma linha. Se não sabe, o CLI pergunta apenas o necessário e te ensina durante o uso. Se esqueceu de um pré-requisito, o CLI o aplica na execução do comando."**  

🔎 Para detalhes técnicos sobre o CLI do Dec-B, acesse **[Documentação do Dec-B CLI](./cli/README.md)**.  

## Por Onde Começar  

O **Dec-B** pode ser adotado de duas formas, dependendo do nível de automação e controle desejado para o versionamento do seu projeto.  

### ▶️ Uso do Dec-B Apenas como Workflow  

Se você deseja apenas seguir o **workflow do Dec-B** sem automação, pode aplicá-lo manualmente, utilizando as diretrizes e estrutura recomendada para **branches e ciclos de versionamento**.  

🔹 **Guia de Uso do Workflow Dec-B** → [Acesse a documentação](./docs/pt-br/adoption/workflow_guide.md)  

💡 > **"_O workflow do Dec-B pode ser seguido manualmente, garantindo organização e rastreabilidade sem necessidade de ferramentas externas._"**  

---

### ▶️ Automação do Workflow com o Dec-B CLI  

Se desejar **automatizar o controle de branches e ciclos de versionamento**, o **Dec-B CLI (`dcb`)** fornece comandos padronizados e assistentes interativos, garantindo **execução consistente e rastreável** das práticas do Dec-B. O CLI pode ser instalado via NPM e aplicado diretamente no fluxo de desenvolvimento.  

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

## Contato

Apesar de ser um projeto independente, o esforço de desenvolvimento deste projeto faz parte do Ecossistea do FlowED. Assim, para dúvidas ou sugestões, entre em contato através do email de contato do FlowED: <contato@flowed.info>

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais detalhes.
