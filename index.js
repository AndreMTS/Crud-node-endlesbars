const express = require("express");
const app = express();
const handlebars  = require('express-handlebars');
const bodyParser = require('body-parser');

const Post = require('./models/Post');


//Config

    //Template Engine    
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    //BodyParser
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(bodyParser.json());
    
  

//rotas
    app.get('/', function(req, res){
        Post.findAll({order: [['id','Desc']]}).then(function(posts){
        res.render('home',{posts: posts})  
        })
        
    })
    app.get('/cadastro', function(req, res){
        res.render('formulario')
    })

    app.post('/adicionar', function(req, res){
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send('Aconteceu um erro ao tentar enviar o formulario' + erro)
        });
    })

    app.get('/deletar/:id', function(req, res){
        Post.destroy({where:({'id':req.params.id})}).then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send('Aconteceu um erro ao tentar deletar')
        })
    })

app.listen(8081, function(){
    console.log("Servidor rodando na porta 8081");
});