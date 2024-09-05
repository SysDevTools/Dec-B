const inquirer = require('inquirer');

module.exports = async (arg = null, commandLine) => {
    let url = arg ? arg.split(':')[1] : null;

    if (!url) {
        const answer = await inquirer.prompt({
            type: 'input',
            name: 'url',
            message: 'Informe a URL do repositório remoto (ou deixe em branco para pular):',
        });
        url = answer.url || 'Nenhuma';
    }

    if (url !== 'Nenhuma') {
        commandLine += ` -u:${url}`;
    }

    return commandLine;
};
