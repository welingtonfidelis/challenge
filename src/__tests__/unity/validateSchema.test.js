const validateSchema = require('../../services/validateSchema');
const schema = require('../../services/schemas/tests/get');

describe('Service validate inputs', () => {
  test('Expected recipes list', async () => {
    const ingredientList = ['milk', 'egg', 'suggar'];
    const page = 1;

    const isValid = validateSchema(schema, { page, ingredientList });

    expect(isValid).toEqual(true);
  });
});
