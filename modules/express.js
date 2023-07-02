const express = require("express")
const app = express();

app.get("/home", (req, res) => {
        res.status(200).send('Hello node')

});

const port = 8080;
app.listen(port, () => console.log(`rodando com express na porta ${port}`))