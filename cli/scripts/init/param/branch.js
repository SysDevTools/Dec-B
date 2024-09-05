const inquirer = require('inquirer');

module.exports = async (arg = null, commandLine) => {
    let branch = arg ? arg.split(':')[1] : null;

    if (!branch) {
        const answer = await inquirer.prompt({
            type: 'input',
            name: 'branch',
            message: 'Informe a branch padrão (default: develop):',
            default: 'develop',
        });
        branch = answer.branch || 'develop';
    }

    if (branch !== 'develop') {
        commandLine += ` -b:${branch}`;
    }

    return commandLine;
};
