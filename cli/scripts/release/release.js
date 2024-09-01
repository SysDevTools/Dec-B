const inquirer = require('inquirer');
const path = require('path');

module.exports = async (args = [], commandLine = "dcb release") => {
    console.clear();
    console.log(`Comando até o momento: ${commandLine}`);

    const releaseChoices = [
        { name: 'Init - Inicia um novo ciclo de release', value: 'init' },
        { name: 'Pull - Realiza um pull da branch de release', value: 'pull' },
        { name: 'Push - Realiza um push da branch de release', value: 'push' },
        { name: 'Rebase - Faz o rebase interativo da release para a develop', value: 'rebase' },
        { name: 'Tag - Cria uma tag com as alterações atuais', value: 'tag' },
        { name: 'Voltar', value: 'back' }
    ];

    // Se o comando já foi especificado na linha de comando, executa diretamente
    if (args.length > 0) {
        const commandPath = path.join(__dirname, 'param', args[0]);
        const commandFunction = require(commandPath);
        await commandFunction(args.slice(1), `${commandLine} ${args[0]}`);
        return;
    }

    // Exibe o menu se nenhum comando foi especificado
    const { releaseCommand } = await inquirer.prompt({
        type: 'list',
        name: 'releaseCommand',
        message: 'Escolha uma opção:',
        choices: releaseChoices
    });

    if (releaseCommand === 'back') {
        require(path.join(__dirname, '../../dcb.js'))();
    } else {
        const commandPath = path.join(__dirname, 'param', releaseCommand);
        const commandFunction = require(commandPath);
        await commandFunction([], `${commandLine} ${releaseCommand}`);
    }
};
