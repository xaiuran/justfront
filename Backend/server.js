const mysql = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");
const dbConfig = require("./app/config/db.config")

const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const pool = mysql.createPool({
    connectionLimit: 5,
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    user: dbConfig.USER,
    database: dbConfig.DB,
    password: dbConfig.PASSWORD
});

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/", function (req, res,next) {
    pool.query("SELECT * FROM `GOST_TYPES`", function (err, data) {
        if (err) return console.log(err);
        console.log(data);
        res.json(data)
    });
});

app.get("/:GOST", function (req, res,next) {
    const GOST = req.params.GOST;
    var queryStr = "SELECT * FROM `" + GOST + "`";
    pool.query(queryStr, function (err, data) {
        if (err) return console.log(err);
        console.log(data);
        res.json(data);
    });
});

app.get("/:GOST/:TYPE", function (req, res) {
    const GOST = req.params.GOST;
    const TYPE = req.params.TYPE;
    var queryStr = "SELECT * FROM `" + GOST + "` WHERE GOST = " + TYPE;
    pool.query(queryStr, function (err, data) {
        if (err) return console.log(err);
        console.log(data);
        res.json(data);
    });
});

/////8882
app.get("/:u", function (req, res,next) {
    pool.query("SELECT * FROM `GOST_TYPES_8882`", function (err, data) {
        if (err) return console.log(err);
        console.log(data);
        res.json(data)
    });
});

app.get("/:GOST", function (req, res,next) {
    const GOST = req.params.GOST;
    var queryStr = "SELECT * FROM `" + GOST + "`";
    pool.query(queryStr, function (err, data) {
        if (err) return console.log(err);
        console.log(data);
        res.json(data);
    });
});

app.get("/:GOST/:TYPE", function (req, res) {
    const GOST = req.params.GOST;
    const TYPE= req.params.TYPE;
    var queryStr = "SELECT * FROM `" + GOST + "` WHERE GOST = " + TYPE;
    pool.query(queryStr, function (err, data) {
        if (err) return console.log(err);
        console.log(data);
        res.json(data);
    });
});


/////29241
app.get("/:b29241", function (req, res,next) {
    pool.query("SELECT * FROM `GOST_TYPES_29241`", function (err, data) {
        if (err) return console.log(err);
        console.log(data);
        res.json(data)
    });
});

app.get("/:GOST", function (req, res,next) {
    const GOST = req.params.GOST;
    var queryStr = "SELECT * FROM `" + GOST + "`";
    pool.query(queryStr, function (err, data) {
        if (err) return console.log(err);
        console.log(data);
        res.json(data);
    });
});

app.get("/:GOST/:TYPE", function (req, res) {
    const GOST = req.params.GOST;
    const TYPE= req.params.TYPE;
    var queryStr = "SELECT * FROM `" + GOST + "` WHERE GOST = " + TYPE;
    pool.query(queryStr, function (err, data) {
        if (err) return console.log(err);
        console.log(data);
        res.json(data);
    });
});
////89995

/////29241
app.get("/:b116000", function (req, res,next) {
    pool.query("SELECT * FROM `GOST_TYPES_8995`", function (err, data) {
        if (err) return console.log(err);
        console.log(data);
        res.json(data)
    });
});

app.get("/:GOST", function (req, res,next) {
    const GOST = req.params.GOST;
    var queryStr = "SELECT * FROM `" + GOST + "`";
    pool.query(queryStr, function (err, data) {
        if (err) return console.log(err);
        console.log(data);
        res.json(data);
    });
});

app.get("/:GOST/:TYPE", function (req, res) {
    const GOST = req.params.GOST;
    const TYPE= req.params.TYPE;
    var queryStr = "SELECT * FROM `" + GOST + "` WHERE GOST = " + TYPE;
    pool.query(queryStr, function (err, data) {
        if (err) return console.log(err);
        console.log(data);
        res.json(data);
    });
});


/////10058
app.get("/:b210058", function (req, res,next) {
    pool.query("SELECT * FROM `GOST_TYPES_10058`", function (err, data) {
        if (err) return console.log(err);
        console.log(data);
        res.json(data)
    });
});

app.get("/:GOST", function (req, res,next) {
    const GOST = req.params.GOST;
    var queryStr = "SELECT * FROM `" + GOST + "`";
    pool.query(queryStr, function (err, data) {
        if (err) return console.log(err);
        console.log(data);
        res.json(data);
    });
});

app.get("/:GOST/:TYPE", function (req, res) {
    const GOST = req.params.GOST;
    const TYPE= req.params.TYPE;
    var queryStr = "SELECT * FROM `" + GOST + "` WHERE GOST = " + TYPE;
    pool.query(queryStr, function (err, data) {
        if (err) return console.log(err);
        console.log(data);
        res.json(data);
    });
});


/////831
app.get("/:b831", function (req, res,next) {
    pool.query("SELECT * FROM `GOST_TYPES_831`", function (err, data) {
        if (err) return console.log(err);
        console.log(data);
        res.json(data)
    });
});

app.get("/:GOST", function (req, res,next) {
    const GOST = req.params.GOST;
    var queryStr = "SELECT * FROM `" + GOST + "`";
    pool.query(queryStr, function (err, data) {
        if (err) return console.log(err);
        console.log(data);
        res.json(data);
    });
});

app.get("/:GOST/:TYPE", function (req, res) {
    const GOST = req.params.GOST;
    const TYPE= req.params.TYPE;
    var queryStr = "SELECT * FROM `" + GOST + "` WHERE GOST = " + TYPE;
    pool.query(queryStr, function (err, data) {
        if (err) return console.log(err);
        console.log(data);
        res.json(data);
    });
});


app.listen(3000, function () {
    console.log("Сервер подключен");
});