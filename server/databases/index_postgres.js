const {Pool} = require('pg')
const {psql_path, psql_user,psql_password,psql_database,psql_port} = require('../config.js')



const pool = new Pool({
	user: psql_user,
	host: psql_path,
	database: psql_database,
	password: psql_password,
	port: 5432,
})

// pool.query('SELECT * FROM products WHERE id =' + numb, (err, result) => {
// 	console.log(...result.rows) //deconstructing
// 	pool.end()
// })

module.exports = pool;

