#!/usr/bin/env node

const inquirer = require('inquirer');
const initCommand = require('./scripts/init/init');
const releaseCommand = require('./scripts/release/release');

const mainMenu = async (args = [], commandLine = "dcb") => {
    // Verifica se os comandos principais foram fornecidos como argumentos
    if (args.length > 0) {
        switch (args[0]) {
            case 'init':
                commandLine += ` init`;
                await initCommand(args.slice(1), commandLine);
                return;
            case 'release':
                commandLine += ` release`;
                await releaseCommand(args.slice(1), commandLine);
                return;
            case 'exit':
                console.log('Saindo...');
                process.exit();
                return;
        }
    }

    // Exibe o menu principal se nenhum comando foi fornecido
    const mainChoices = [
        { name: 'Init - Inicializa um novo repositório', value: 'init' },
        { name: 'Release - Gerencia um ciclo de release', value: 'release' },
        { name: 'Sair', value: 'exit' }
    ];

    const { mainCommand } = await inquirer.prompt({
        type: 'list',
        name: 'mainCommand',
        message: 'Escolha uma opção:',
        choices: mainChoices
    });

    // Atualiza a linha de comando com o comando principal selecionado
    switch (mainCommand) {
        case 'init':
            commandLine += ` init`;
            await initCommand([], commandLine);
            break;
        case 'release':
            commandLine += ` release`;
            await releaseCommand([], commandLine);
            break;
        case 'exit':
            console.log('Saindo...');
            process.exit();
            break;
    }
};

mainMenu(process.argv.slice(2));

