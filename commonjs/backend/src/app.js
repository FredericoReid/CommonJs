const express = require("express");
const app = express();
const mysql = require('mysql');
const cors = require('cors');
// const conn = require("./conn/conn");
// // const handlebars = require("express-handlebars");
const bodyParser = require('body-parser');

const funcoes2 = require('./funcoes2');
const app = require('./app');


// //Config
// //Template Engine
//     // app.engine('handlebars', handlebars({defaultLayout: 'main'}))
//     // app.set('view engine', 'handlebars')

//Body Parser
app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json)
app.use(cors())

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "fseletro"
})

//Rotas
app.post("/processamento_conta", function(req, res){

    const numero1 = req.body.numero1
    const numero2 = req.body.numero2
    const operacao = req.body.contas

    if(operacao == 'adicao'){
        const add = funcoes2.adicao(numero1,numero2);
        res.json(sub)
    }
    else if(operacao == 'subtracao'){
        const sub = funcoes2.subtracao(numero1,numero2);
        res.json(sub)
    }
    
});


app.listen(5333);


