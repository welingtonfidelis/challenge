const Joi = require('joi');

module.exports = Joi.object({
  page: Joi.number()
    .integer()
    .min(1)
    .max(50),

  i: Joi.string()
    .pattern(new RegExp('^([a-zA-Z]+\\s*[a-zA-Z]*)+(,\\s*[a-zA-Z]+\\s*[a-zA-Z]*){0,2}$'))
    .required(),
});
