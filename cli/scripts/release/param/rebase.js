const inquirer = require('inquirer');

module.exports = async (args = [], commandLine = "dcb release rebase") => {
    console.clear();
    console.log(`Comando até o momento: ${commandLine}`);

    console.clear();
    console.log(`Executando: ${commandLine}`);

    // Aqui você pode adicionar o código para executar o rebase interativo do release

    // Exemplo: execSync(`git rebase -i origin/develop`, { stdio: 'inherit' });
};
