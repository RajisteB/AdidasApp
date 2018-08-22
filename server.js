const express = require('express');
const bodyParser = require('body-parser');
const products = require('./routes/product-routes');

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3001;

app.use('/footwear', products);
app.listen(port, () => console.log(`Listening on port ${port}`));


