const express = require('express');
const OngControle = require('./Controle/OngControle');
const IncidenteControle = require('./Controle/IncidenteControle');
const Controle_Sessao = require('./Controle/Controle_Sessao');
const Controle_perfil = require('./Controle/Controle_perfil');

const routes = express.Router();

routes.post('/sessao', Controle_Sessao.create);


routes.get('/controle_perfil', Controle_perfil.index);

routes.get('/ongs', OngControle.index);
routes.post('/ongs', OngControle.create);
routes.get('/incidente', IncidenteControle.index);
routes.post('/incidente', IncidenteControle.create);
routes.delete('/incidente/:id',IncidenteControle.delete)
module.exports = routes;