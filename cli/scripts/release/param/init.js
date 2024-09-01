const inquirer = require('inquirer');

module.exports = async (args = [], commandLine = "dcb release init") => {
    console.clear();
    console.log(`Comando até o momento: ${commandLine}`);

    let releaseName = args.find(arg => arg.startsWith('-n:'));
    let localFlag = args.includes('--local');
    let remoteFlag = args.includes('--remote');

    if (!releaseName) {
        const { name } = await inquirer.prompt({
            type: 'input',
            name: 'name',
            message: 'Digite o nome da release (ex: 1.0.0):'
        });
        releaseName = `-n:${name}`;
        commandLine += ` ${releaseName}`;
    }

    if (!localFlag && !remoteFlag) {
        const { location } = await inquirer.prompt({
            type: 'list',
            name: 'location',
            message: 'Escolha uma opção para o ciclo de release:',
            choices: [
                { name: 'Clone a release do origin para local', value: '--local' },
                { name: 'Crie uma nova release no origin e faça push', value: '--remote' }
            ]
        });

        if (location === '--local') {
            localFlag = true;
        } else {
            remoteFlag = true;
        }
        commandLine += ` ${location}`;
    }

    console.clear();
    console.log(`Executando: ${commandLine}`);

    // Aqui você pode adicionar o código para executar o comando init de release
};
