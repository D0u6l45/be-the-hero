

/*
* Tipos de parâmetros 
* 
* Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
* Route Params: Parâmetros utilizados para identificar resursos
* Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/




const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3456);