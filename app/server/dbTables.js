import mysql from 'mysql';

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "newdb"
});

con.connect();

const sqlSignUp = "CREATE TABLE signup (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255), phone INT(255), password VARCHAR(255))";
con.query(sqlSignUp, function (err, result) {
  if (err) throw err;
  console.log("Table created");
});

const sqlBook = "CREATE TABLE book (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), petname VARCHAR(255), \
address VARCHAR(255), email VARCHAR(255), phone INT(255), checkin VARCHAR(255), checkout VARCHAR(255), \
pettype VARCHAR(255), petfood VARCHAR(255), requests VARCHAR(255), created_at DATE)";
con.query(sqlBook, function (err, result) {
  if (err) throw err;
  console.log("Table created");
});

const sqlComments = "CREATE TABLE comments (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255), comments VARCHAR(255))";
con.query(sqlComments, function (err, result) {
  if (err) throw err;
  console.log("Table created");
});

const sqlAds = "CREATE TABLE adsUser (id INT AUTO_INCREMENT PRIMARY KEY, email VARCHAR(255), phone INT(255), url VARCHAR(255))";
con.query(sqlAds, function (err, result) {
  if (err) throw err;
  console.log("Table created");
});

con.end();