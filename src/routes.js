const express = require('express');

const routes = express.Router();

const TestController = require('./controllers/Test');
const RecipeController = require('./controllers/Recipe');

const inputValidate = require('./middlewares/inputValidate');

const schemaRecipesGet = require('./services/schemas/recipe/get');

routes.get('/test', TestController.get);

routes.get(
  '/recipes',
  (req, res, next) => inputValidate(req, res, next, schemaRecipesGet),
  RecipeController.get,
);

module.exports = routes;
