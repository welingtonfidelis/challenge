const utils = require('../utils');
const getRecipesFromPuppy = require('../services/getRecipesFromPuppy');
const getGiphy = require('../services/getGiphy');

const buildGetReturn = async (ingredientList, recipeList) => {
  const resp = {
    keywords: ingredientList,
    recipes: [],
  };

  await Promise.all(
    recipeList.map(async (recipe) => {
      const {
        title = '', href: link = '', ingredients = '',
      } = recipe;
      const gif = await getGiphy.getLink(title);

      resp.recipes.push({
        title,
        ingredients: ingredients.split(', '),
        link,
        gif,
      });
    }),
  );

  return resp;
};

module.exports = {
  async get(req, res) {
    try {
      const { i, page = 1 } = req.query;
      const ingredientList = (i.split(',')).map((ingredient) => ingredient.trim());

      const recipeList = await getRecipesFromPuppy(i, page);
      const resp = await buildGetReturn(ingredientList, recipeList);

      res.status(200).json(resp);
    } catch (error) {
      utils.errorResponse(res, error);
    }
  },
};
