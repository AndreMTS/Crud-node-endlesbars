const express = require("express");
const app = express();
const handlebars = require("express-handlebars");


//Config

    //Template Engine
    app.engine('handlebars',handlebars({defaultLayout:"main"}))
    app.set('view engine', 'handlebars');
    
    //Conexão com banco de dados
    const Sequelize = require('sequelize');
    const sequelize = new Sequelize('teste','root','',{
        host: 'localhost',
        dialect: 'mysql'
    });

//rotas
    app.get('/cadastro', function(req, res){
        res.send('ROTA DE CADASTRO DE POSTS')
    })

app.listen(8081, function(){
    console.log("Servidor rodando na porta 8081");
});