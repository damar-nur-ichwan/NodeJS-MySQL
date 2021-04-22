const mysql = require('mysql');

const withoutDB = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});
const full = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

const config = {withoutDB,full};

module.exports = config