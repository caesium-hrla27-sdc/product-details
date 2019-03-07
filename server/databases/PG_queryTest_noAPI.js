const {Pool} = require('pg')

const pool = new Pool({
	user: '',
	host: 'localhost',
	database: 'sephora',
	password: '	',
	port: 5432,
})

const pool1 = new Pool({
	user: '',
	host: 'localhost',
	database: 'sephora',
	password: '	',
	port: 5432,
})

const pool2 = new Pool({
	user: '',
	host: 'localhost',
	database: 'sephora',
	password: '	',
	port: 5432,
})

const pool3 = new Pool({
	user: '',
	host: 'localhost',
	database: 'sephora',
	password: '	',
	port: 5432,
})

const pool4 = new Pool({
	user: '',
	host: 'localhost',
	database: 'sephora',
	password: '	',
	port: 5432,
})




function testPGQuery(amount) {
	var sampleSize = amount;

	for (let i = 0; i < sampleSize; i++) {
		console.time("Q Trial #" + i)
		var randNumb = Math.floor(Math.random() * 1e7)
		pool.query('SELECT * FROM products WHERE id =' + randNumb, (err, result) => {
			// console.log(...result.rows) //deconstructing
			console.timeEnd("Q Trial #" + i)
		})
	}
}


function testPG_noPrint(amount) {
	var sampleSize = amount;
	console.time("NP Trial" + sampleSize)
	for (let i = 0; i < sampleSize; i++) {
		var randNumb = Math.floor(Math.random() * 1e7)
		pool.query('SELECT * FROM products WHERE id =' + randNumb, (err, result) => {
			// console.log(...result.rows) //deconstructing
			if (i==sampleSize-1){
				console.timeEnd("NP Trial" + sampleSize)
			}
		})
	}
}

function testPG_MQ_noPrint(amount) {

	var sampleSize = amount;
	var switch_pool = [pool1,pool2,pool3,pool4];

	console.time("MP_NP Trial" + sampleSize)

	for (let i = 0; i < sampleSize; i++) {
		var randNumb = Math.floor(Math.random() * 1e7)
		switch_pool[i%4].query('SELECT * FROM products WHERE id =' + randNumb, (err, result) => {
			// console.log(...result.rows) //deconstructing
			if (i==sampleSize-1){
				console.timeEnd("MP_NP Trial" + sampleSize)
			}
		})
	}
}


function testPGQuery_MultiPool(amount) {
	var sampleSize = amount;
	var switch_pool = [pool1,pool2];
	for (let i = 0; i < sampleSize; i++) {
		console.time("QMP Trial #" + i)
		var randNumb = Math.floor(Math.random() * 1e7)
		switch_pool[i%2].query('SELECT * FROM products WHERE id =' + randNumb, (err, result) => {
			// console.log(...result.rows) //deconstructing
			console.timeEnd("QMP Trial #" + i)
		})
	}
}


function testPGDelay(amount) {
	var sampleSize = amount;
	for (let i = 0; i < sampleSize; i++) {
		console.time("D Trial #" + i)
		var randNumb = Math.floor(Math.random() * 1e7)
		pool.query('SELECT NOW()', (err, result) => {
			// console.log(...result.rows) //deconstructing
			console.timeEnd("D Trial #" + i)
		})
	}
}

// testPGQuery(5000);
// console.log('-----------------------------------------------------------------------')
//  setTimeout(()=>testPGDelay(5000), 200)
// testPGQuery_MultiPool(5000);
// testPG_noPrint(5000);
  // testPG_MQ_noPrint(5000)

