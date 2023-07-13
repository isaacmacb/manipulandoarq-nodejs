# Diversas formas de como manipular arquivos no node.js
Em Node.js, você pode manipular arquivos usando o módulo fs (filesystem). 
O módulo fs fornece várias funções e métodos para interagir com o sistema de arquivos do seu sistema operacional

O método writeFile grava dados em um arquivo. 
Você precisa fornecer o caminho do arquivo como o primeiro parâmetro e o conteúdo que será gravado como o segundo parâmetro. 
Após a gravação, ele chama um callback para indicar se a operação foi concluída com sucesso ou se ocorreu algum erro.

O método readFile lê um arquivo e retorna seu conteúdo. Você precisa fornecer o caminho do arquivo como o primeiro parâmetro e, 
opcionalmente, pode especificar a codificação (como 'utf8') para obter o conteúdo como uma string legível.

O método mkdir é usado para criar um diretório. Você precisa fornecer o caminho do diretório como o primeiro parâmetro

__dirname é uma variável global disponível no Node.js que retorna o diretório do arquivo atualmente em execução. 
Ela representa o caminho absoluto do diretório que contém o arquivo em que __dirname é utilizado.
