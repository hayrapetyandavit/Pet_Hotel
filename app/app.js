import "dotenv/config";
import cors from "cors";
import express from "express";
import {body, validationResult} from "express-validator"
import session from "express-session";
import path from "path";
import bcrypt from "bcrypt";
import passport from "passport";
import passportLocal from "passport-local";
import mysql from 'mysql';
import cookieParser from 'cookie-parser';
import book from "./server/book.js";
import comments from "./server/comments.js"
import uploadFile from "./server/uploadFile.js";

const app = express();

const corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "newdb"
});

con.connect();

book(app);
comments(app);
uploadFile(app);

let users = []

con.query('SELECT * FROM signup', (err, res) => {
    return res;
});

app.use(session({ 
  secret: "igdvidbsivugpdivbidviwvb", 
  resave: false,
  saveUninitialized: false
}));

app.use(express.static("../client"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new passportLocal.Strategy({
  usernameField: "email"
}, async (email, password, done) => {
  const user = await users.find((user) => user.email === email);
  if(user === undefined) {
    return done(null, null, {message: "Incorrect email"});
  }
  if(await bcrypt.compare(password, user.password)) {
    return done(null, user);
  }
  done(null, null, {message: "Incorrect password"});
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  done(null, users.find((user) => user.id === id));
});

app.post("/signup",
  body('email').isEmail(),
  body('password').isLength({min: 8}),
  async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()});
  }
  const {name, email, phone, password} = req.body;
  res.cookie('signin', email);
  const hashedPwd = await bcrypt.hash(password, 10);
    const sql = "INSERT INTO signup (name, email, phone, password) VALUES ?";
    const values = [
      [`${name}`, `${email}`, `${phone}`, `${hashedPwd}`]
    ];
    con.query(sql, [values], (err, result) => {
        
    });
    
  res.redirect("/index.html");
});

app.get("/signin", checkNotAuthentication, (req, res) => {
    res.sendFile(path.resolve("../client/forms/login.html"));
});

app.post('/signin', passport.authenticate('local', { failureRedirect: "/signin" }),
  (req, res) => {
	res.cookie('signin', `${req.body.email}`)
	res.redirect('/');
});

app.post("/signin", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/signin"
}));

app.use(checkAuthentication);

app.get("/signout", (req, res) => {
  res.redirect("/index.html");
});

function checkAuthentication(req, res, next) {
  if(req.isAuthenticated() === false) {
    return res.redirect("/signin");
  }
  next();
}

function checkNotAuthentication(req, res, next) {
  if(req.isAuthenticated() === true) {
    return res.redirect("/");
  }
  next();
}

app.get("/", (req, res) => {
  res.sendFile(path.resolve("/index.html"));
});

app.listen(3001);