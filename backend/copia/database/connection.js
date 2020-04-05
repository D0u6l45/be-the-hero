const express = require('express');
const routes = express.Router();

const connection = require('./database/connection');



routes.post('/ongs', (request, response) => {

const { nome, email,whatsapp, cidade, uf} = request.body;

const id = crypto.randomBytes(4).toString('HEX');


return response.json();
    // evento: "Omnistack",
    // aluno: 'Cleiton'
});

module.exports = routes;