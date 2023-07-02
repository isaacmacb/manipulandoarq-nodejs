const http = require ("http");
const { join } = require("path");

const port = 3030;

const server = http.createServer((req, res) => {
    if(req.url === '/home'){
        res.writeHead(200, {'Content-Type' : "text-html"})
        res.end('<h1> Home page </h1>')
    }
    if(req.url === '/users') {
        const users = [
            {
                name: 'Isaac',
                email: 'Isaacb@gmail.com'
            },

            {
                name: 'Ana Liz',
                email: 'analiz@gmail.com'
            }
        ]
    };
    res.writeHead(200, {"Content-Type" : "application/json" })
    res.end(JSON.stringify(users))
})
server.listen(port, () => console.log(`rodando na porta ${port}`))