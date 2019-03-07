const {Pool} = require('pg')

const pool = new Pool({
	user: '',
	host: 'localhost',
	database: 'sephora',
	password: '	',
	port: 5432,
})

// pool.query('SELECT * FROM products WHERE id =' + numb, (err, result) => {
// 	console.log(...result.rows) //deconstructing
// 	pool.end()
// })

module.exports = pool;

