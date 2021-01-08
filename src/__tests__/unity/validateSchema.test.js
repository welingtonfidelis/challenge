const validateSchema = require('../../services/validateSchema');
const schema = require('../../mock/schemaTest');

describe('Service validate inputs', () => {
  test('Expected true from validate', async () => {
    const ingredientList = ['milk', 'egg', 'suggar'];
    const page = 1;

    const isValid = validateSchema(schema, { page, ingredientList });

    expect(isValid).toEqual(true);
  });
});
