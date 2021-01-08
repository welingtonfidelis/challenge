const axios = require('axios');

module.exports = {
  async getAllInfo(keyword, limit = 1) {
    const response = await axios.get(
      `${process.env.GIPHY_API_BASE_URL}/gifs/search`,
      {
        params: {
          api_key: process.env.GIPHY_API_KEY,
          q: keyword,
          limit,
        },
      },
    );

    const { data } = response.data;

    return data[0] || null;
  },

  async getLink(keyword, limit = 1) {
    const data = await this.getAllInfo(keyword, limit);

    let link = '';
    if (data) {
      const { images } = data;
      const { original } = images;
      link = original.url || '';
    }

    return link;
  },
};
