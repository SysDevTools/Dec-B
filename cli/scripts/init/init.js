const inquirer = require('inquirer');
const path = require('path');

module.exports = async (args = [], commandLine = "dcb init") => {
    console.clear();
    console.log(`Comando até o momento: ${commandLine}`);

    // Analisando os parâmetros passados na linha de comando
    let projectStart = false;

    args.forEach(arg => {
        if (arg.startsWith('-u:')) {
            const urlCommand = require(path.join(__dirname, 'param', 'url'));
            commandLine = urlCommand(arg, commandLine);
        } else if (arg.startsWith('-b:')) {
            const branchCommand = require(path.join(__dirname, 'param', 'branch'));
            commandLine = branchCommand(arg, commandLine);
        } else if (arg === '--project-start') {
            projectStart = true;
        }
    });

    // Caso algum parâmetro não tenha sido fornecido
    if (!args.find(arg => arg.startsWith('-u:'))) {
        const urlCommand = require(path.join(__dirname, 'param', 'url'));
        commandLine = await urlCommand(null, commandLine);
    }

    if (!args.find(arg => arg.startsWith('-b:')) && !projectStart) {
        const branchCommand = require(path.join(__dirname, 'param', 'branch'));
        commandLine = await branchCommand(null, commandLine);
    }

    // Lidando com `--project-start`
    if (projectStart) {
        const projectStartCommand = require(path.join(__dirname, 'param', 'project-start'));
        commandLine = projectStartCommand(commandLine);
    }

    // Exibindo a linha de comando atualizada
    console.clear();
    console.log(`Comando até o momento: ${commandLine}`);

    // Finalizando e exibindo o comando completo
    console.log(`Comando final: ${commandLine}`);

    // Aqui você pode adicionar o código para inicializar o repositório usando as variáveis `url`, `branch`, etc.
};
