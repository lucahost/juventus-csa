var mysql = require('mysql');
var connection = mysql.createPool({
  host: 'it-wd.ch',
  user: 'juventusadmin',
  password: 'Juventus123!',
  database: 'itwdchh_juventus'
});
module.exports = connection;