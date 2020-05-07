const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Testando conexão com a base
// Pessoa.create({ nome: 'André', cpf: '437.500.558-07', tipousuario: 'Administrador', senha: '1234', endereco: 'Rua 10', numero: 222, complemento: 'Bl 13', cep: '13-310-610', celular: '11942956514', email: 'andre@gmail.com.br'});

app.use(routes);
app.listen(8080);