const express = require('express');
const routes = express.Router();

const crypto = require('crypto');


routes.post('/ongs', (request, response) => {

const data = request.body;
console.log(data);


//     const { nome, email,whatsapp, cidade, uf} = request.body;

// const id = crypto.randomBytes(4).toString('HEX');


return response.json();
    // evento: "Omnistack",
    // aluno: 'Cleiton'
});

module.exports = routes;