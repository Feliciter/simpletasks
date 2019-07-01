var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'remotemysql.com',
  user     : 'IZeaIU8625',
  password : 'LTCxxbp56s',
  database : 'IZeaIU8625'
});

connection.connect();

connection.query('SELECT * from users where id>=20', function (error, results, fields) {
  if (error) throw error;
  //console.log( results);
  console.log(JSON.stringify(results))
});

connection.end();
