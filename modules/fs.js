const { log } = require('console')
const fs = require('fs')
const path = require('path')

// Criando uma pasta
/*fs.mkdir(path.join(__dirname, '/test'), (error) => {
    if (error) {
        return console.log("Error: ", error);
    } else {
        console.log("Pasta criada com sucesso");
    }
})*/

//criar um arquivo
/*fs.writeFile(path.join(__dirname, "/test", "test.txt"), "Hello word", (error) => {
    if (error) {
        return console.log('error: ', error);
    } else {
        console.log('arquivo criado com sucesso');
    }
}
)*/

//  Adicionar a um arquivo
fs.appendFile(path.join(__dirname, 'test', 'test.txt'), 'Hello word!',(error) => {

    if (error) {
        return console.log('error', error);
    } else {
        console.log('Arquivo modificado com sucesso');
    }
})

//Lendo arquivo
fs.readFile
        (path.join(__dirname, '/test', 'text.txt'),
         'utf-8', (error, data) => {
        if(error){
            return console.log('error', error);
        } else {
            console.log(data);
        }
})