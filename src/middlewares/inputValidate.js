const validateSchema = require('../services/validateSchema');
const utils = require('../utils');

module.exports = (req, res, next, schema) => {
  const validate = validateSchema(schema, { ...req.query, ...req.body });

  if (validate.error) {
    utils.errorResponse(res, validate.error);

    return;
  }

  next();
};
