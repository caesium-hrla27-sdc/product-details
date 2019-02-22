const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const parser = require('body-parser');
const path = require('path');

const { Product } = require('./databases/index');

const PORT = process.env.PORT || 3002;

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../public')));

app.get('/productDetails/:id', (req, res) => {
  Product.findOne({ id: req.params.id }).then(product => {
    res.status(200).json(product);
  });
});
app.listen(PORT, () => console.log(`server is listening on PORT: ${PORT}`));
