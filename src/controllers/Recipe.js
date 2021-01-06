const axios = require('axios');
const utils = require('../utils');

module.exports = {
    async get(req, res) {
        try {
            const { i, page = 1 } = req.query;
            const ingredientList = (i.replace(', ', ',')).split(',');

            const recipeList = await getRecipes(i, page);
            const resp = buildReturn(ingredientList, recipeList);

            res.json(resp);

        } catch (error) {
            utils.errorResponse(res, error);
        }
    }
}

const getRecipes = async (ingredients, page) => {
    const { data } = await axios.get(
        process.env.RECIPE_PUPPY_BASE_URL,
        {
            params: {
                i: ingredients,
                p: page
            }
        }
    );

    const { results } = data;

    return results || []
}

const buildReturn = (ingredientList, recipeList) => {
    const resp = {
        keywords: ingredientList,
        recipes: []
    }

    for (const recipe of recipeList) {
        const {
            title = '', href: link = '',
            ingredients = '', gif = ''
        } = recipe;

        resp.recipes.push({
            title,
            ingredients: ingredients.split(', '),
            link,
            gif
        });
    }

    return resp;
}