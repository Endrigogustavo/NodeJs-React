const express = require('express');
const app = express();

app.get('/', function(req,res) {
    res.send("Funcionou")
});

app.get('/teste', function(req,res) {
    res.sendFile(__dirname +  "/html/index.html")
});
    
app.get('/teste2/:nome', function(req,res) {
    res.send("ola "+ req.params.nome);
});
    

app.listen(1600, function(){
    console.log("Servidor funcionando")
})

