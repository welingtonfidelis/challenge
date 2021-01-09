const axios = require('axios');

const mock = require('../mock/serviceGetRecipesPuppyReturn');

const isTest = process.env.NODE_ENV === 'test';

module.exports = async (ingredients, page) => {
  if (isTest) return mock;

  const { data } = await axios.get(
    process.env.RECIPE_PUPPY_BASE_URL,
    {
      params: {
        i: ingredients,
        p: page,
      },
    },
  );

  const { results } = data;

  return results || [];
};
