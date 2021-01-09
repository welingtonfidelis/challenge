const validateSchema = require('../../services/validateSchema');
const schema = require('../../mock/schemaTest');

describe('Service validate inputs', () => {
  test('Expected true from validate', async () => {
    const ingredientList = ['milk', 'egg', 'suggar'];
    const page = 1;

    const validate = validateSchema(schema, { page, ingredientList });

    expect(validate).toEqual({ error: false });
  });
});
