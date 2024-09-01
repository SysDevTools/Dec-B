const inquirer = require('inquirer');

module.exports = async (args = [], commandLine = "dcb init") => {
    console.clear();
    console.log(`Comando até o momento: ${commandLine}`);

    // Analisando os parâmetros passados na linha de comando
    const parsedArgs = {};
    args.forEach(arg => {
        if (arg.startsWith('-u:')) {
            parsedArgs.url = arg.split(':')[1];
        } else if (arg.startsWith('-b:')) {
            parsedArgs.branch = arg.split(':')[1];
        }
    });

    // Definindo as perguntas para os parâmetros que faltam
    const questions = [];

    if (!parsedArgs.url) {
        questions.push({
            type: 'input',
            name: 'url',
            message: 'Informe a URL do repositório remoto (ou deixe em branco para pular):',
        });
    }

    if (!parsedArgs.branch) {
        questions.push({
            type: 'input',
            name: 'branch',
            message: 'Informe a branch padrão (default: develop):',
            default: 'develop',
        });
    }

    // Coletando as respostas do usuário
    const answers = await inquirer.prompt(questions);

    const url = parsedArgs.url || answers.url || 'Nenhuma';
    const branch = parsedArgs.branch || answers.branch || 'develop';

    // Atualizando a linha de comando com os parâmetros fornecidos
    if (url !== 'Nenhuma') commandLine += ` -u:${url}`;
    if (branch !== 'develop') commandLine += ` -b:${branch}`;

    // Exibindo a linha de comando atualizada
    console.clear();
    console.log(`Comando até o momento: ${commandLine}`);

    // Finalizando e exibindo o comando completo
    console.log(`Comando final: ${commandLine}`);

    // Aqui você pode adicionar o código para inicializar o repositório usando as variáveis `url` e `branch`
};
