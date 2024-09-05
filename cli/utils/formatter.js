// formatter.js
module.exports = {
    format: (content) => {
        return content
            .replace(/\*([^\*]+)\*/g, '\x1b[1m$1\x1b[0m')  // Negrito
            .replace(/\#([^\#]+)\#/g, '\x1b[34m$1\x1b[0m')  // Azul
            .replace(/\!([^\!]+)\!/g, '\x1b[31m$1\x1b[0m'); // Vermelho
    }
};
