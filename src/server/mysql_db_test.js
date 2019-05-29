// plase refer to: https://github.com/ryanxchen/nodejs-express-vue-mysql-demo/blob/master/service/api/userApi.js

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'databases.000webhost.com',
  user     : 'id7119767_reylab',
  password : 'shareddanger01',
  database : 'id7119767_reylab_bd1'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();