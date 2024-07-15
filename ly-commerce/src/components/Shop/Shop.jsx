import React from 'react'
import mysql from 'mysql2'

export default function Shop() {

  const connection = mysql.createConnection({
    host: "sql5.freesqldatabase.com",
    user: "sql5719789",
    password: "pGFUCcYpSy",
    database: "sql5719789",
  });
  
  connection.connect(function (err) {
    if (err) throw err;
    console.log("Database is connected!!");
  });

  connection.query(
    "SELECT * FROM products",
    function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    }
  );

  return (
    <div>
      <p>shop</p>
    </div>
  )
}
