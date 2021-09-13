const express = require('express');

const app = express();

const {config} = require('./config/index');

app.get('/', function(req,res){
    res.send('hola mundo');
})
app.get('/json', function(req,res){
    res.json({hello: 'wotld'});
})

app.listen(config.port, function(){
    console.log(`Listening http://localhost:${config.port}`);
})