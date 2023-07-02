const { log } = require("console");
const path = require ("path")

//apenas o nome do arquivo atual
console.log(path.basename(__filename));

//diretorio atual
console.log(path.dirname(__filename));

//extensão do arquivo
console.log(path.extname(__filename));

// criar objeto path
console.log(path.parse(__filename));

// Juntar caminhos de arquivos
console.log(path.join(__dirname, "test"));