const Console = console;

module.exports = {
  createError(name = 'Bad Request', message = 'Bad Request', code = 400) {
    function GenericError() {
      this.name = name;
      this.message = message;
      this.code = code;
    }
    GenericError.prototype = Object.create(GenericError.prototype);
    GenericError.prototype.constructor = GenericError;

    throw new GenericError();
  },

  errorResponse(res, error) {
    Console.log('ERROR ===> \n', error, '\n <=== ERROR');

    const code = error.code || 500;
    const message = error.message || 'Internal server error';

    res.status(code).json({ ok: false, message });
  },
};
