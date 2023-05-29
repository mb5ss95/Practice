const mysql = require("mysql2/promise");
const pool = mysql.createPool({
    host : "13.124.153.234",
    user : "moon",
    password : "moon",
    database : "mydb",
    waitForConnections : true,
    connectionLimit:10,
    queueLimit:0
});

module.exports = {pool};