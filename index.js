const express = require('express')
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

//get:recuperar algo , app:chamada da função  

const lista2 = require('./Routes/lista2')
const lista1 = require('./Routes/lista1');

app.use('/lista1', lista1)
app.use('/lista2', lista2)

app.get('/', function (req, res) {
    res.send('Rota Principal')
})
app.get('/hello', function (req, res) {
    res.send('Chegou a resposta')
})
app.get('/nome', function (req, res) {
    res.send('Lucas Fernandes')
})

app.listen(3000, function () {
    console.log('servidor aberto na porta 3000')
})

