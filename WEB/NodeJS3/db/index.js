const mysql = require("mysql2/promise");
const pool = mysql.createPool({
    host : "3.36.112.248",
    user : "moon",
    password : "moon",
    database : "order_system",
    waitForConnections : true,
    connectionLimit:10,
    queueLimit:0
});

module.exports = {pool};