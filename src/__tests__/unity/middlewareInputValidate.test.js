const inputValidate = require('../../middlewares/inputValidate');
const schema = require('../../services/schemas/recipe/get');
const res = require('../../mock/responseParam');
const next = require('../../mock/nextParam');

describe('Middleware to validate input', () => {
  test('Expected response from get', async () => {
    const req = {
      query: { i: 'milk, egg, suggar' },
    };

    await inputValidate(req, res, next, schema);

    expect(next).toHaveBeenCalledWith();
  });
});
