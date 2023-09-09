const router = require('express').Router();
const db = require('../config/database');
const bcrypt = require('bcryptjs');

const {userLogIn, userSignUp} = require('../controller/user.controller');

router.post('/login', userLogIn);
router.post('/register', userSignUp);

module.exports = router;