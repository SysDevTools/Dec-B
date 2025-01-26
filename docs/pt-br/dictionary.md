# 📖 Dicionário de termos

## Git

O **Git** é um sistema de controle de versão distribuído amplamente utilizado no desenvolvimento de software. Ele permite rastrear mudanças no código-fonte, colaborar em projetos e gerenciar diferentes versões de um repositório. Foi criado por Linus Torvalds em 2005 e é a base para workflows como Git Flow, Trunk-Based Development e Dec-B.

## Workflow

O **Workflow** é um conjunto de processos e regras que definem como tarefas devem ser executadas dentro de um sistema ou equipe. No contexto de versionamento de código, um workflow estabelece a organização das branches, a sequência de commits e merges, além das práticas para colaboração eficiente entre desenvolvedores. Exemplos comuns incluem **Git Flow**, **Trunk-Based Development** e **Dec-B**.

## Branch  

No contexto de versionamento, uma **Branch** é uma linha independente de desenvolvimento dentro de um repositório Git. Ela permite que desenvolvedores trabalhem em funcionalidades, correções ou experimentos sem afetar diretamente a versão principal do código.  

O **Dec-B** utiliza um conceito de **branches desacopladas**, onde diferentes níveis de granularidade são mantidos separadamente, proporcionando rastreabilidade e controle sobre cada alteração antes da fusão com o código principal.

## Granularidade  

No contexto de versionamento e commits, **granularidade** refere-se ao nível de detalhe e segmentação das alterações feitas no código.  

- **Alta granularidade** significa commits pequenos e específicos, facilitando rastreabilidade, revisão e rollback.  
- **Baixa granularidade** implica em commits grandes e abrangentes, o que pode dificultar a compreensão das mudanças e a resolução de conflitos.  

O **Dec-B** estrutura a granularidade através de branches desacopladas, permitindo que desenvolvedores façam commits livres em níveis inferiores e, posteriormente, organizem e filtrem as alterações antes da fusão com a branch principal.

## Framework  

No contexto de desenvolvimento de software, um **framework** é um conjunto estruturado de ferramentas, bibliotecas e convenções que facilitam a criação, organização e manutenção de projetos.  

No caso do **Dec-B**, ele funciona como um **framework para Git**, pois:  

- Estrutura e padroniza o versionamento.  
- Automatiza processos comuns de Git sem esconder seus fundamentos.  
- Educa os usuários progressivamente, permitindo que aprendam Git enquanto utilizam o fluxo do Dec-B.  

Diferente de um simples workflow, o Dec-B não apenas define regras de versionamento, mas também fornece um conjunto de ferramentas que guiam e padronizam a execução dessas regras.

## Versionamento

O **versionamento** é a prática de gerenciar e registrar diferentes estados de um software ao longo do tempo. Ele permite rastrear mudanças, restaurar versões anteriores e colaborar de forma estruturada no desenvolvimento.  

No contexto do **Dec-B**, o versionamento é estruturado por meio de ciclos e granularidade, garantindo:

- **Histórico organizado**: Cada alteração é registrada de forma rastreável.  
- **Rastreabilidade de commits**: As mudanças podem ser analisadas e revisadas em diferentes níveis de granularidade.  
- **Controle sobre releases**: Permite a separação entre versões estáveis e em desenvolvimento.  

O **Git** é a ferramenta de controle de versionamento mais utilizada, e o **Dec-B** expande suas funcionalidades ao definir um fluxo estruturado e padronizado para o controle de versões.

## Conflitos de Merge  

Os **conflitos de merge** ocorrem quando duas ou mais alterações feitas em um repositório Git afetam a mesma parte de um arquivo, impedindo a fusão automática das mudanças.  

No contexto do **Dec-B**, os conflitos de merge são minimizados por meio de:  

- **Branches desacopladas**: Reduzem a sobreposição direta entre mudanças simultâneas.  
- **Processo de revisão estruturado**: Antes de integrar commits a branches principais, há um controle sobre a granularidade e pertinência das alterações.  
- **Mecanismos de backup automático**: Sempre que um conflito ocorre, o Dec-B armazena versões anteriores do arquivo para evitar perda de dados.  

A resolução de conflitos pode ser feita manualmente pelo desenvolvedor ou utilizando ferramentas gráficas como `git mergetool`, além dos editores que oferecem suporte nativo para resolução de conflitos, como VS Code e IntelliJ IDEA.

## Rastreabilidade  

No contexto de **workflows de versionamento** e **gestão de projetos**, a **rastreabilidade** refere-se à capacidade de acompanhar e documentar todas as alterações feitas no código, garantindo que cada modificação tenha uma justificativa clara e possa ser recuperada ou auditada quando necessário.  

No **Dec-B**, a rastreabilidade é garantida por:  

- **Branches desacopladas**: Cada nível de granularidade no versionamento mantém um histórico específico para controle e auditoria.  
- **Commits estruturados**: A estratégia de commits permite que cada alteração seja revisada e documentada corretamente antes de integrar versões principais.  
- **Uso de tags e releases**: As versões semânticas criadas no Dec-B asseguram que cada release tenha um marco identificável dentro do histórico do projeto.  
- **Automação no CLI**: O Dec-B CLI auxilia na organização das modificações, prevenindo perda de rastreabilidade por erro humano.  

Essa rastreabilidade facilita auditorias, revisões de código e entendimento da evolução do software ao longo do tempo.

## Git-Flow

Modelo tradicional de workflow para Git, baseado no uso de múltiplas branches como `develop`, `release`, `hotfix` e `feature`. Popular em grandes projetos, mas pode se tornar burocrático e rígido dependendo do contexto.

## Desacoplado

Característica de um sistema ou fluxo onde elementos são independentes entre si. No Dec-B, branches são desacopladas para evitar dependências rígidas e permitir maior controle sobre granularidade e versionamento.

## CLI

(Command-Line Interface) Interface de linha de comando que permite a execução de tarefas via terminal. O Dec-B inclui um CLI próprio que auxilia desenvolvedores a seguirem o fluxo correto de versionamento.

## Ciclo

Unidade de desenvolvimento no Dec-B, organizando mudanças de código em estágios bem definidos. Diferente de um simples conjunto de commits, um ciclo estrutura um conjunto de atividades rastreáveis dentro do workflow.

## Gestão de Versionamento

Conjunto de práticas utilizadas para organizar e rastrear alterações no código-fonte de um projeto. O **Dec-B** propõe um modelo baseado em ciclos para equilibrar rastreabilidade e flexibilidade.

## Trunk-Based Development

Modelo de versionamento onde os desenvolvedores fazem commits frequentes diretamente na branch principal (`trunk`). O **Dec-B** adota sua simplicidade, mas evita a falta de estrutura organizando commits em ciclos rastreáveis.

## Cherry-Pick

Comando do **Git** que permite copiar commits específicos de uma branch para outra sem necessidade de um merge completo. O **Dec-B** automatiza esse processo para manter um histórico rastreável sem conflitos desnecessários.
