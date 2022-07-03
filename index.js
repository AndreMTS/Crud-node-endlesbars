const express = require("express");

const app = express();




app.get("/", function(req, res) {
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/sobre", function(req, res) {
    res.sendFile(__dirname + "/html/sobre.html")
});

app.get("/contato", function(req, res){
    res.send("Pagina contato");
});
app.get("/blog", function(req,res){
    res.send("Pagina blog");
});

app.get("/:nome/:cargo", function(req, res){
    res.send("<h1>Ola "+ req.params.nome + "</h1><br><h2> Você ja e um " + req.params.cargo);
})


app.listen(8081, function(){
    console.log("Servidor rodando na porta 8081");
});