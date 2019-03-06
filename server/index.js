const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const parser = require('body-parser');
const path = require('path');

const {	Product } = require('./databases/index_mongo');
const
	pool = require('./databases/index_postgres');

const PORT = process.env.PORT || 3002;
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({	extended: true}));
app.use(express.static(path.resolve(__dirname, '../public')));

const useMongo = false;
const usePG = !useMongo;

app.get('/productDetails/', (req, res) => {

	var tempid = Math.floor(Math.random() * 1000);

	if (useMongo) {
		Product.findOne({
			id: tempid
		}).then(product => {
			console.log("hey", product)
			res.status(200).json(product);
		});
	}

	if (usePG) {
		pool.query('SELECT * FROM products WHERE id =' + tempid, (err, result) => {
			console.log(...result.rows) //deconstructing
			// pool.end()
			res.status(200).json(result.rows[0]);
		})
	}

});

app.get('/productDetails/:id', (req, res) => {
	if (useMongo) {

		Product.findOne({
			id: req.params.id
		}).then(product => {
			res.status(200).json(product);
		});
	}

	if (usePG) {
		pool.query('SELECT * FROM products WHERE id =' + req.params.id, (err, result) => {
			res.status(200).json(result.rows[0]);
		})
	}
});

app.listen(PORT, () => console.log(`server is listening on PORT: ${PORT}`));