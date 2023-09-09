const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    passwword: 'Kien2810$#@!',
    database: 'react_study_db'
});

db.connect((err) => {
    if (err) throw err;
    console.log("Connected");
});

module.exports = db;