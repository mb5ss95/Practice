const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    // aws ip
    host: "13.124.153.234",
    // mysql username
    user: "moon",
    // mysql user password
    password: "moon",
    // db name
    database: "order_system",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

module.exports = { pool };