const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",

  user: "root",

  password: "",

  database: "nextjs_testing",
});

db.connect((error) => {
  if (error) {
    console.error("Error connecting to the database:", error);
  } else {
    console.log("Connected to the database");
  }
});

module.exports = db;
