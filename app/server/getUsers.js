import mysql from 'mysql';

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "newdb"
});

con.connect();

const getUsers = () => {
    let users = [];
    con.query('SELECT * FROM signup', (err, res) => {
        users = res;
        console.log(users);
    });
    return users;
};

export default getUsers;