const inquirer = require('inquirer');

module.exports = async (args = [], commandLine = "dcb release pull") => {
    console.clear();
    console.log(`Comando até o momento: ${commandLine}`);

    let commitMessage = args.find(arg => arg.startsWith('-m:'));

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

    console.clear();
    console.log(`Executando: ${commandLine}`);

    // Aqui você pode adicionar o código para executar o comando pull do release
};
