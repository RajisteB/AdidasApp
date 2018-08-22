const axios = require('axios');

getWomensFootwear = () => {
  axios
    .get(`https://api.shop.com/sites/v1/search/term/women%20adidas%20md?apiKey=l7xx98822f77bdd045e1a07135f73c6613de`)
    .then(results => {
      res.send({ results: results.data })
    })
    .catch(err => console.log(err));
}

getMensFootwear = () => {
  axios
    .get(`https://api.shop.com/sites/v1/search/term/men%20adidas%20md?apiKey=l7xx98822f77bdd045e1a07135f73c6613de`)
    .then(results => {
      res.send({ results: results.data })
    })
    .catch(err => console.log(err));
}

getSingleProduct = (req, res) => {
  axios
    .get(`https://api.shop.com/stores/v1/products/${req.params.id}?siteId=260&apiKey=l7xx98822f77bdd045e1a07135f73c6613de`)
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