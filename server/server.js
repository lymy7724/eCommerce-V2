const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
app.use(cors());
app.use(express.json());
const port = 9000;

const connection = mysql.createConnection({
  host: "sql5.freesqldatabase.com",
  user: "sql5719789",
  password: "pGFUCcYpSy",
  database: "sql5719789",
});

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
