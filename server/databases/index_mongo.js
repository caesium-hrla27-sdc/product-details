const connection = require('mongoose');


const connectToMongo = () => {
  connection
    .connect('mongodb://localhost/sephora',{ useNewUrlParser: true })
    .then(() => console.log('connection to mongo successful'))
    .catch(() => {
      console.log('connection to mongo unsuccessful');
      setTimeout(connectToMongo, 1000);
      process.exit();
    });
};

connectToMongo();

const productSchema = new connection.Schema({
  name: String,
  id: Number,
  description: String,
  breadcrumbs: String,
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
  media: String,
});

const Product = connection.model('product', productSchema);

module.exports = { Product, connection };
