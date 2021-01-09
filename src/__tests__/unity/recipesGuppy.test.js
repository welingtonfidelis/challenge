const getRecipesFromPuppy = require('../../services/getRecipesFromPuppy');

describe('Service to get recipes list from recipes puppy api', () => {
  test('Expected recipes list', async () => {
    const ingredients = 'milk, egg';
    const page = 1;

    const recipeList = await getRecipesFromPuppy(ingredients, page);

    expect(recipeList).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: 'Cocoa pie',
          href: 'http://yourrecipe.com',
          ingredients: 'cocoa, milk, suggar',
          thumbnail: '',
        }),
      ]),
    );
  });
});
