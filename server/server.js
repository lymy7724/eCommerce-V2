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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
