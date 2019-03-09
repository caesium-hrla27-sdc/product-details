const nr = require('newrelic');

const express = require('express');
const cors = require('cors');
const parser = require('body-parser');
const path = require('path');

const pool = require('./databases/index_postgres');
const PORT = process.env.PORT || 3002;
const app = express();

app.use(cors());
const morgan = require('morgan');
app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({	extended: true}));
app.use(express.static(path.resolve(__dirname, '../public')));

var maxRange = 9999999;

app.get('/productDetails/', (req, res) => {
		var tempID = Math.floor(Math.random() * maxRange );
		pool.query('SELECT * FROM products WHERE id =' + tempID, (err, result) => {
			if (err) {
				console.log(err);
				res.status(404).send();
			} else {
				res.status(200).json(result.rows[0]);
			}
		})
});

app.get('/productDetails/:id', (req, res) => {
		pool.query('SELECT * FROM products WHERE id =' + req.params.id, (err, result) => {
			if (err) { 
				console.log(err);
				res.status(404).send('db err');
			} else {
				if (result.rows){
					res.status(200).json(result.rows[0]);
				} else {
					res.status(404).send('no such item');
				}
			}
			
		})
});

//CRUD EXTENSION
app.post('/productDetails/:id', (req, res) => {
		var numb = +1e7*2+req.params.id;
		var qstring = "INSERT INTO products (id) VALUES ("+numb+")";
		pool.query(qstring, (err, result) => {
			if (err) { 
				console.log("ERROR", err)
				res.status(404).send('db err');
			} else if (result){
				res.status(200).send('successful insert');
			}
		})
		
});



app.put('/productDetails/:id', (req, res) => {
	
	var testString = "Updated " + new Date().toUTCString() ;
	var qstring= `UPDATE products SET description = '${testString}' WHERE id = `+req.params.id;
	
	pool.query(qstring, (err, result) => {
		if (err) {
			console.log("ERROR", err)
			res.status(404).send('db err');
		} else if (result) {
			if (result.rowCount === 0) {
				res.status(404).send('no matching entry');
			} else {
				res.status(200).send('successful delete');
			}
		}
	})

});

app.patch('/productDetails/:id', (req, res) => {
	
	var testString = "Updated " + new Date().toUTCString() ;
	var qstring= `UPDATE products SET description = '${testString}' WHERE id = `+req.params.id;
	
	pool.query(qstring, (err, result) => {
		if (err) {
			console.log("ERROR", err)
			res.status(404).send('db err');
		} else if (result) {
			if (result.rowCount === 0) {
				res.status(404).send('no matching entry');
			} else {
				res.status(200).send('successful delete');
			}
		}
	})

});

app.delete('/productDetails/:id', (req, res) => {
	
	var qstring= "DELETE FROM products WHERE id = "+req.params.id;

	pool.query(qstring, (err, result) => {
	if (err) {
		console.log("ERROR", err)
		res.status(404).send('db err');
	} else if (result) {
		if (result.rowCount === 0) {
			res.status(404).send('no such entry');
		} else {
			res.status(200).send('successful delete');
		}
	}
})

});

app.listen(PORT, () => console.log(`server is listening on PORT: ${PORT}`));