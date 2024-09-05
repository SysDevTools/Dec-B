const fs = require('fs');
const path = require('path');
const formatter = require('./formatter');

module.exports = (basePath, command) => {
    try {
        // Verifica se o comando está no caminho correto e adiciona o nome correto do arquivo
        const helpFile = path.join(basePath, `${command}Help.txt`);
        //console.log(`DEBUG: Tentando carregar o arquivo de ajuda em: ${helpFile}`);
        
        // Lê o conteúdo do arquivo de ajuda
        const helpContent = fs.readFileSync(helpFile, 'utf8');
        
        // Usa o formatter para aplicar a formatação ANSI
        const formattedHelp = formatter.format(helpContent);
        console.log(formattedHelp);
    } catch (err) {
        console.error(`Erro ao carregar o arquivo de ajuda para o comando ${command}:`, err);
    }
};
