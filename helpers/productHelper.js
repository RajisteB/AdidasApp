const axios = require('axios');

getWomensFootwear = function(req, res) {
  axios.get(`https://api.shop.com/sites/v1/search/term/women%20adidas%20nmd?apiKey=l7xxde892e5933394e739730af6093ee6eec`)
    .then(results => {
      res.send({ results: results.data })
    })
    .catch(err => console.log(err));
}

getMensFootwear = function(req, res) {
  axios.get(`https://api.shop.com/sites/v1/search/term/men%20adidas%20nmd?apiKey=l7xxde892e5933394e739730af6093ee6eec`)
    .then(results => {
      res.send({ results: results.data })
    })
    .catch(err => console.log(err));
}

getSingleProduct = function(req, res) {
  axios.get(`https://api.shop.com/stores/v1/products/${req.params.id}?siteId=260&apiKey=l7xxde892e5933394e739730af6093ee6eec`)
    .then(results => {
      res.send({ results: results.data })
    })
    .catch(err => console.log(err));
}


module.exports = {
  getWomensFootwear,
  getMensFootwear,
  getSingleProduct
}