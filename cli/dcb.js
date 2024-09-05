#!/usr/bin/env node

const path = require('path');
const inquirer = require('inquirer');
const initCommand = require('./scripts/init/init');
const releaseCommand = require('./scripts/release/release');
const helpCommand = require('./utils/help');

// Coleta os argumentos da linha de comando e chama o menu principal
const args = process.argv.slice(2);  // Inicializa aqui

// Função para exibir o conteúdo do arquivo de ajuda com base no comando
const showHelp = (command) => {
    const basePath = path.resolve(__dirname); // Resolvido para o diretório onde está o dcb
    console.log(`DEBUG: Caminho capturado no dcb.js: ${basePath}`);
    helpCommand(basePath, command); // Passa o caminho base e o comando para o help.js
};

// Verificação do comando --version
if (args.includes('--version') || args.includes('-v')) {
    const packageInfo = require('./package.json'); // Pega a versão do package.json
    console.log(`Dec-B CLI versão: ${packageInfo.version}`);
    return;
}

// Função principal que gerencia os parâmetros passados
const mainMenu = async (args) => {
    if (args.includes('--help') || args.includes('-h')) {
        const command = args.find(arg => arg === 'init' || arg === 'release') || 'dcb';
        showHelp(command);  // Chama a função de ajuda com base no comando
        return;
    }

    const mainChoices = [
        { name: 'Init - Inicializa um novo repositório', value: 'init' },
        { name: 'Release - Gerencia um ciclo de release', value: 'release' },
        { name: 'Sair', value: 'exit' }
    ];

    if (args.includes('init')) {
        initCommand(args);
    } else if (args.includes('release')) {
        releaseCommand(args);
    } else {
        const { mainCommand } = await inquirer.prompt({
            type: 'list',
            name: 'mainCommand',
            message: 'Escolha uma opção:',
            choices: mainChoices
        });

        switch (mainCommand) {
            case 'init':
                initCommand(args);
                break;
            case 'release':
                releaseCommand(args);
                break;
            case 'exit':
                console.log('Saindo...');
                process.exit();
                break;
        }
    }
};

// Chama o menu principal com os argumentos da linha de comando
mainMenu(args);
