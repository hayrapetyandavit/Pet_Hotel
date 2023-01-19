import express from 'express';
import mysql from 'mysql';
import fileUpload from 'express-fileupload';
import path from "path";

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "newdb"
});

const uploadFile = (app) => {
    app.use(express.static("../client"));
    app.use(express.urlencoded({ extended: true, }));
    con.connect();

    app.post('/upload',
        fileUpload({ createParentPath: true }),
        (req, res) => {
            const files = req.files;
            Object.keys(files).forEach(key => {
                const filepath = path.join(path.resolve("./"), 'files', files[key].name);
                files[key].mv(filepath, (err) => {
                    if (err) return res.status(500).json({ status: "error", message: err })
                });
            });
            return res.json({ status: 'success', message: Object.keys(files).toString() });
        }
    );
};

export default uploadFile;