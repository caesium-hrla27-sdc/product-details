const mongoose = require('mongoose');
mongoose
  .connect('mongodb://localhost/sephora')
  .then(() => console.log('connection to mongo successful'))
  .catch(() => console.log('failed to connect to mongo'));

const productSchema = new mongoose.Schema({
  name: String,
  id: Number,
  description: String,
  breadcrumbs: [String],
  size: String,
  item_number: String,
  price: String,
  details: String,
  how_to_use: String,
  ingredients: String,
  about_the_brand: String,
  shipping_returns: String,
  exclusive: Boolean,
  average_rating: Number,
  review_count: Number,
  loves_count: Number,
  media: [Object]
});

const Product = mongoose.model('product', productSchema);

Product.find().then(data => {
  if (data.length === 0) {
    require('./dataGenerator');
  }
});
module.exports = { Product, mongoose };
