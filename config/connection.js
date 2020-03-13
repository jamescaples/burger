const mysql = require("mysql");
require("dotenv").config();
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
<<<<<<< HEAD
        user: "root",                             
        password: "james2923",
=======
        user: process.env.DB_USER,                             
        password: process.env.DB_PASSWORD,
>>>>>>> d07d77d5d734fdabe02ca79ffa0b1811bc84ff91
        database: "burgers_db"
    });
}

// user :process.env.DB_USER, *use to replace when deploying*
// process.env.DB_PASSWORD

connection.connect(function (err) {
    if (err) {
        console.error("error coneccting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId)
});

module.exports = connection;