const router = require('express').Router();
const db = require('../config/dababase');
const bcrypt = require('bcryptjs');

router.get('/', (req, res) => {
    const sql = 'SELECT * FROM user';
    db.query(sql, (err, userList) => {
        if (err) throw err;
        res.json({
            userList
        })
    });
});