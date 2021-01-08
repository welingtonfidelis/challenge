const axios = require('axios');

const isTest = process.env.NODE_ENV === 'test';
const mock = [
  {
    title: 'Cocoa pie',
    href: 'http://yourrecipe.com',
    ingredients: 'cocoa, milk, suggar',
    thumbnail: '',
  },
  {
    title: 'Cocoa pie',
    href: 'http://yourrecipe.com',
    ingredients: 'cocoa, milk, suggar',
    thumbnail: '',
  },
];

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
