const getGiphy = require('../../services/getGiphy');

describe('Service to get giphy url from giphy api', () => {
  test('Expected giphy url', async () => {
    const giphyUrl = await getGiphy.getLink('test', 1);

    expect(giphyUrl).toEqual('http://yourgiphy.com');
  });
});
