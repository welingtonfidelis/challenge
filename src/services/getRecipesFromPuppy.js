const axios = require('axios');

module.exports = async (ingredients, page) => {
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
