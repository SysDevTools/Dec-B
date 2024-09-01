const inquirer = require('inquirer');

module.exports = async (args = [], commandLine = "dcb release push") => {
    console.clear();
    console.log(`Comando até o momento: ${commandLine}`);

    let commitMessage = args.find(arg => arg.startsWith('-m:'));
    let tag = args.find(arg => arg.startsWith('-t:'));

    if (!commitMessage) {
        const { message } = await inquirer.prompt({
            type: 'input',
            name: 'message',
            message: 'Digite a mensagem de commit (opcional):'
        });

        if (message) {
            commitMessage = `-m:"${message}"`;
            commandLine += ` ${commitMessage}`;
        }
    }

    if (!tag) {
        const { tagName } = await inquirer.prompt({
            type: 'input',
            name: 'tagName',
            message: 'Digite a tag a ser criada (opcional):'
        });

        if (tagName) {
            tag = `-t:${tagName}`;
            commandLine += ` ${tag}`;
        }
    }

    console.clear();
    console.log(`Executando: ${commandLine}`);

    // Aqui você pode adicionar o código para executar o comando push do release
};
