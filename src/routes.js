const express = require('express');
const routes = express.Router();

const TestController = require('./controllers/Test');
const RecipeController = require('./controllers/Recipe');

routes.get('/test', TestController.get);

routes.get('/recipes', RecipeController.get);

module.exports = routes;