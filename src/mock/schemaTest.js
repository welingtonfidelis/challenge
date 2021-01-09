const Joi = require('joi');

module.exports = Joi.object({
  page: Joi.number()
    .integer()
    .min(1)
    .max(50),

  ingredientList: Joi.array()
    .items(Joi.string().min(2))
    .min(1)
    .max(3),
});
