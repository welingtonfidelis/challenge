module.exports = (schema, input) => {
  const validate = schema.validate(input, { abortEarly: false });

  if (validate.error) {
    const message = validate.error.details.map(
      (detail) => ({
        key: detail.context.key,
        value: detail.message.replace(/(")|(")/g, ''),
      }),
    );

    return { error: { code: 400, message } };
  }

  return { error: false };
};
