const utils = require('../utils');

module.exports = {
    async get(req, res) {
        try {
            res.json({ ok: true, data: 'Hello World!' });

        } catch (error) {
            utils.errorResponse(res, error);
        }
    }
}