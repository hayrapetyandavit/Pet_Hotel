import express from 'express';
import { sendMail } from './mail.js';
import mysql from 'mysql';

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "newdb"
});

const book = (app) => {
  app.use(express.static("../client"));
  app.use(express.urlencoded({ extended: true, }));

  con.connect();
  app.post("/book", (req, res) => {
    const sql = "INSERT INTO book (name, petname, address, \
                email, phone, checkin, checkout, pettype, petfood, requests)VALUES ?";
    const values = [
        [
            `${req.body.name}`, `${req.body.petname}`, `${req.body.address}`, `${req.body.email}`, 
            `${req.body.phone}`, `${req.body.checkin}`, `${req.body.checkout}`, `${req.body.pettype}`,
            `${req.body.petfood}`,`${req.body.requests}`
        ]
    ];
    
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      let email = '',
          message = '';
      let price = 0;
      let days = (Date.parse(req.body.checkout) - Date.parse(req.body.checkin))/1000/3600/24;
      switch(req.body.pettype) {
          case 'Dog up to 10kg': price = days * 35; break;
          case 'Dog from 10kg to 20kg': price = days * 40; break;
          case 'Dog over 20kg': price = msg.days * 50; break;
          case 'Cat': price = days * 30; break;
      };
        email = req.body.email;
        message = `Dear ${req.body.name}, payment for ${days} days stay is ${price}$. You must make cash payment before check in. Thank you for choosing us.`
        if(message && email) {
          sendMail(message, email);
        }
    });
    res.redirect('/forms/price.html');
  });
};

export default book;