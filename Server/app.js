import express from 'express';
import mysql from 'mysql';

import connectionConfig from './config/connectionConfig';

const app = express();

const connection = mysql.createConnection(connectionConfig);

connection.connect();

app.get('/', (req, res) => {
	connection.query('SELECT * FROM USER', (err, results, fields) => {
		res.send(results);
	});
});


app.listen(3000, () => {
	console.log('Example app listening on port 3000!');
});
