const Recipe = require('../../controllers/Recipe');
const res = require('../../mock/responseParam');

const expectedResponse = {
  keywords: [
    'milk',
    'egg',
    ' suggar',
  ],
  recipes: [
    {
      title: 'Cocoa pie',
      ingredients: [
        'cocoa',
        'milk',
        'suggar',
      ],
      link: 'http://yourrecipe.com',
      gif: 'http://yourgiphy.com',
    },
    {
      title: 'Cocoa pie',
      ingredients: [
        'cocoa',
        'milk',
        'suggar',
      ],
      link: 'http://yourrecipe.com',
      gif: 'http://yourgiphy.com',
    },
  ],
};

describe('Controller to get recipes', () => {
  test('Expected response from get', async () => {
    const req = {
      query: { i: 'milk, egg, suggar' },
    };

    await Recipe.get(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expectedResponse);
  });
});
