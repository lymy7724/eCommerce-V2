const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
app.use(cors());
app.use(express.json());
const port = 9000;

// establish connection to databse
const connection = mysql.createConnection({
  host: "sql5.freesqldatabase.com",
  user: "sql5719789",
  password: "pGFUCcYpSy",
  database: "sql5719789",
});

app.all("/getCart", (req, res) => {
  connection.query("SELECT * FROM cart", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
});

// display all products in my table
app.all("/API/getall", (req, res) => {
  connection.query(
    "SELECT * FROM products_table",
    function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.json(result);
    }
  );
});

//post routes
// connect to newsletter table - store user's information
app.post("/newsletter", (req, res) => {
  const email = req.body.signup;
  console.log(req.body.signup);

  const sql = `INSERT INTO newsletter_info(email) VALUES(?)`;
  connection.query(sql, [email], function (err, data) {
    if (err) {
      console.log("err");
    } else {
      console.log("success");
    }
  });

  const x = req.headers.referer;
  res.redirect(x);
});

// store user's data in contact table
app.post("/form", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  const sql = `INSERT INTO form_info(name, email, message) VALUES(?, ?, ?)`;
  connection.query(sql, [name, email, message], function (err, data) {
    if (err) {
      console.log("error");
    } else {
      console.log("success");
    }
  });
});

app.post("/addtoCart", (req, res) => {
  const name = req.body.item_name;
  const price = req.body.item_price;
  const image = req.body.item_image;

  console.log(req.body.item_name);

  const sql = `INSERT INTO cart(name, price, image) VALUES(?, ?, ?)`;
  connection.query(sql, [name, price, image], function (err, data) {
    if (err) {
      console.log("err");
    } else {
      console.log("success");
    }
  });

  const x = req.headers.referer;
  res.redirect(x);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
