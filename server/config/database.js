const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    passwword: '123456',
    database: 'reactDB'
});

db.connect((err) => {
    if (err) throw err;
    console.log("Connected");
});

module.exports = db;