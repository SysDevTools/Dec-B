# Dec-B CLI

O Dec-B CLI (`dcb`) é uma ferramenta de linha de comando projetada para executar os processos do fluxo de versionamento (workflow) do [Dec-B](https://github.com/SysDevTools/Dec-B).

## Estrutura de pastas do projeto

A estrutura de documentação do `dcb` e de todo o projeto [Dec-B](https://github.com/SysDevTools/Dec-B) é intencionalmente super-modularizada para atender ao cenário acadêmico em que será utilizada. Essa abordagem permite que cada comando, função e parâmetro seja documentado de forma independente, facilitando a atribuição de tarefas específicas para os alunos. Cada pequeno documento pode ser alvo de estudos e exercícios, permitindo uma evolução gradual e detalhada do conhecimento, incentivando a colaboração e o aprendizado profundo em um ambiente educacional.

<pre style="font-weight: normal; line-height: 1.4; font-size: 14px;">
📦 <a href="./README.md">Dec-B/</a>
└── 📂 <a href="./cli/README.md">cli/</a>  
    ├── 📂 <a href="./scripts/init/README.md">init/</a>  
    │   └── 📜 <a href="./scripts/init/README.md">README.md</a>  
    ├── 📂 <a href="./scripts/release/README.md">release/</a>  
    │   ├── 📂 <a href="./scripts/release/init/README.md">init/</a>  
    │   │   └── 📜 <a href="./scripts/release/init/README.md">README.md</a>  
    │   ├── 📂 <a href="./scripts/release/pull/README.md">pull/</a>  
    │   │   └── 📜 <a href="./scripts/release/pull/README.md">README.md</a>  
    │   ├── 📂 <a href="./scripts/release/push/README.md">push/</a>  
    │   │   └── 📜 <a href="./scripts/release/push/README.md">README.md</a>  
    │   ├── 📂 <a href="./scripts/release/rebase/README.md">rebase/</a>  
    │   │   └── 📜 <a href="./scripts/release/rebase/README.md">README.md</a>  
    │   ├── 📂 <a href="./scripts/release/tag/README.md">tag/</a>  
    │   │   └── 📜 <a href="./scripts/release/tag/README.md">README.md</a>  
    │   └── 📜 <a href="./scripts/release/README.md">README.md</a>  
    ├── 📜 <a href="./scripts/README.md">README.md</a>  
    ├── 📂 <a href="./utils/README.md">utils/</a>  
    │   ├── 📂 <a href="./utils/showMenu/README.md">showMenu/</a>  
    │   │   └── 📜 <a href="./utils/showMenu/README.md">README.md</a>  
    │   └── 📜 <a href="./utils/README.md">README.md</a>  
    └── 📜 <a href="./README.md">README.md</a>  
</pre>


## Lista de Funções e Parâmetros

### [dcb init](./scripts/init/pt-br/README.md)

O comando `dcb init` inicializa um novo repositório com a estrutura do Dec-B. 

#### Exemplo
```bash
dcb init -u:<URL> -b:<branch>
```

#### Sintaxe
```bash
dcb init [-u:<URL>] [-b:<branch>]
```

##### Parâmetros
- **`-u:<URL>`**: Define a URL do repositório remoto.
- **`-b:<branch>`**: Especifica a branch padrão a ser usada (default: `develop`).

#### Saída Esperada
- Criação de um repositório local com a estrutura do Dec-B.
- Configuração da branch `develop` como padrão.

#### Erros Comuns
- **`remote repository not found`**: URL remota inválida.
- **`branch not specified`**: Branch padrão não definida corretamente.

---

### [dcb release](./scripts/release/pt-br/README.md)

O comando `dcb release` cria e/ou gerencia um ciclo de release no Dec-B.

#### Exemplo
```bash
dcb release
```

#### Sintaxe
```bash
dcb release [-n:<nome-da-release>] [init | pull | push | rebase | tag ]
```

##### Parâmetros do `dcb release`
Se os parâmetros forem omitidos, um log de commits do release remoto e local serão exibidos e, logo após, um menu ajudará o fornecimento de parâmetros possíveis.

- **`-n:<nome-da-release>`**: Especifica o nome da release. Exemplo: `dcb release -n:1.0.0`.

- **`init`**: Inicia um novo ciclo de release.
  - **Opções:**
    - **`--local`**: Verifica se a release já existe no origin e faz o clone local. Exemplo: `dcb release -n:1.0.0 init --local`.
    - **`--remote`**: Cria a release no origin e realiza o push. Exemplo: `dcb release -n:1.0.0 init --remote`.

- **`pull`**: Realiza um pull da branch de release.
  - **Opções:**
    - **`-m:<mensagem>`**: Mensagem de commit para o branch local. Exemplo: `dcb release -n:1.0.0 pull -m:"Integrando tags de desenvolvedor 01"`.

- **`push`**: Realiza um push da branch de release.
  - **Opções:**
    - **`-m [<mensagem>]`**: Mensagem de commit para o push. Exemplo: `dcb release -n:1.0.0 push -m:"Finalizando alterações"`.
    - **`-t:<TAG>`**: Define uma tag a ser criada para o envio. Exemplo: `dcb release -n:1.0.0 push -t:0.1.1A`.

- **`rebase`**: Faz o rebase interativo do release para a develop, copiando as branches `develop` e `release` de origin, realizando rebase interativo e então publicando na develop origin. Exemplo: `dcb release -n:1.0.0 rebase`.
    
- **`tag`**: Cria uma tag com as alterações atuais. Exemplo: `dcb release -n:1.0.0 tag`.

#### Comportamento
- **Sem Parâmetros ou incompleto**: Se o comando for digitado sem parâmetros ou com parâmetros faltantes, será exibido um menu interativo com as opções disponíveis.

#### Erros Comuns
- **`invalid command`**: O parâmetro especificado não é reconhecido.

---

### Utilitários

1. [showMenu](./utils/showMenu/README.md): Função para exibir menus interativos na linha de comando.

---

## Licença
Este projeto é licenciado sob a [MIT License](LICENSE).
