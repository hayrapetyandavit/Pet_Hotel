import mysql from 'mysql';

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password"
});

con.connect();

con.query("CREATE DATABASE newdb", function (err, result) {
  if (err) throw err;
  console.log("Database created");
});

con.end();