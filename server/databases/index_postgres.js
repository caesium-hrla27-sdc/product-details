
const Sequlize = require('sequelize')
const sequlize = new Sequlize('sephora', '', '', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
	}
	
});

const productSchema = new mongoose.Schema({
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


module.exports = { Product, mongoose };