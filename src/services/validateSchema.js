const utils = require('../utils');

module.exports = (schema, input) => {
  const validate = schema.validate(input, { abortEarly: false });

  if (validate.error) {
    const messages = validate.error.details.map(
      (detail) => ({
        key: detail.context.key,
        value: detail.message.replace(/(")|(")/g, ''),
      }),
    );

    utils.createError('Bad Request', messages, 400);
  }

  return true;
};
