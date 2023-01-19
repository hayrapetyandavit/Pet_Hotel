import express from 'express';
import mysql from 'mysql';

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "newdb"
});

const comments = (app) => {
    app.use(express.static("../client"));
    app.use(express.urlencoded({ extended: true, }));

    con.connect();
    app.post("/comments", (req, res) => {
    const sql = "INSERT INTO comments (name, email, comments)VALUES ?";
    const values = [
        [
            `${req.body.name}`, `${req.body.email}`, `${req.body.comments}`
        ]
    ];
    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });

    res.redirect('/index.html');
    });
};

export default comments;