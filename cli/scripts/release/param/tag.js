const inquirer = require('inquirer');

module.exports = async (args = [], commandLine = "dcb release tag") => {
    console.clear();
    console.log(`Comando até o momento: ${commandLine}`);

    let mensagem = args.find(arg => arg.startsWith('-m:'));
    let nomeTag = args.find(arg => arg.startsWith('-n:'));

    if (!mensagem) {
        const { tagMensagem } = await inquirer.prompt({
            type: 'input',
            name: 'tagMensagem',
            message: 'Informe a mensagem para a tag:',
        });

        mensagem = `-m:${tagMensagem}`;
        commandLine += ` ${mensagem}`;
    }

    if (!nomeTag) {
        const { tagNome } = await inquirer.prompt({
            type: 'input',
            name: 'tagNome',
            message: 'Informe o nome da tag:',
        });

        nomeTag = `-n:${tagNome}`;
        commandLine += ` ${nomeTag}`;
    }

    console.clear();
    console.log(`Executando: ${commandLine}`);

    // Aqui você pode adicionar o código para executar o comando tag do release
};
