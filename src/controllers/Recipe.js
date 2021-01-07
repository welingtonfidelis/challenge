const axios = require('axios');
const utils = require('../utils');
const validateSchema = require('../services/validateSchema');
const schemaGet = require('../services/schemas/recipe/get');

module.exports = {
    async get(req, res) {
        try {
            const { i, page = 1 } = req.query;
            const ingredientList = (i.replace(', ', ',')).split(',');

            validateSchema(schemaGet, { ingredientList, page });
            
            const recipeList = await getRecipes(i, page);
            const resp = await buildReturn(ingredientList, recipeList);

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

    return results || [];
}

const buildReturn = async (ingredientList, recipeList) => {
    const resp = {
        keywords: ingredientList,
        recipes: []
    }

    for (const recipe of recipeList) {
        const {
            title = '', href: link = '', ingredients = ''
        } = recipe;

        const gif = await getGiphy(title);

        resp.recipes.push({
            title,
            ingredients: ingredients.split(', '),
            link,
            gif
        });
    }

    return resp;
}

const getGiphy = async (keyword, limit = 1) => {
    let resp = '';

    const response = await axios.get(
        `${process.env.GIPHY_API_BASE_URL}/gifs/search`,
        {
            params: {
                api_key: process.env.GIPHY_API_KEY,
                q: keyword,
                limit
            }
        }
    );

    const { data } = response.data;

    if(data && data.length) {
        const { images } = data[0];
        const { original_still } = images;
        resp = original_still.url || '';
    }  

    return resp;
}