const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  size: String,
  item_number: String,
  price: Number,
  details: String,
  how_to_use: String,
  ingredients: String,
  about_the_brand: String,
  shipping_returns: String,
  exclusive: Boolean,
  average_rating: Number,
  review_count: Number,
  loves_count: Number,
  image_urls: [String],
  video_urls: [String]
});

const Product = mongoose.model('product', productSchema);

module.exports = { Product };
