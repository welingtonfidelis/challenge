const res = {};
res.status = jest.fn().mockReturnValue(res);
res.json = jest.fn().mockReturnValue(res);

module.exports = res;
