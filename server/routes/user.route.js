const router = require('express').Router();
const db = require('../config/dababase');
const bcrypt = require('bcryptjs');

const {userLogIn, userSignUp} = require('../controller/user.controller');

router.get('/', (req, res) => {
    const sql = 'SELECT * FROM user';
    db.query(sql, (err, userList) => {
        if (err) throw err;
        res.json({
            userList
        })
    });
});

router.post('/login', userLogin);
router.post('/register', userSignUp);

module.exports = router;