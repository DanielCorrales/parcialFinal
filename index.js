const express = require('express'),
    engines = require('consolidate');

var app = express(),
    db;

app.engine('hbs', engines.handlebars);

app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

//inicia servidor
app.listen(5000);
console.log("Escuchando servidor");

app.get('/', (req, res) => {
    res.render('index', {});
})

app.get('/paginaDos', (req, res) => {
    res.render('paginaDos', {});
})

app.get('/paginaTres', (req, res) => {
    res.render('paginaTres', {});
})