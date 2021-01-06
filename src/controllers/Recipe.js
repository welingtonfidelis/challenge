const axios = require('axios');
const utils = require('../utils');

module.exports = {
    async get(req, res) {
        try {
            const { i, page = 1 } = req.query;
            const ingredients = (i.replace(', ', ',')).split(',');

            const recipes = await getRecipes(i, page);
            console.log('===>', i, ingredients, recipes);

            res.json({ ok: true, data: 'Hello World!' });

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