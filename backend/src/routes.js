const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');


const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);


module.exports = routes;

//Metodos HTTP GET, POST, PUT, DELETE

//TIPOS DE PARAMENTROS
// Query PARAMS: request.query (Filtros, ordenacao, paginacao, ...)
// Route PARAMS: request.params (Identificar um recurso na alteracao ou remocao )
// Body: request.body (Dados para criancao ou alteracao de um registro)


//MongoDB (não-relacional)