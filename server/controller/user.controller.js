require('dotenv').config();
const db = require('../config/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userLogin = (req, res) => {
    db.query(
        `SELECT * FROM use WHERE username = ${db.escape(req.body.username)};`,
        async (err, result) => {
            if (err) {
                return res.status(400).send({
                    message: err
                })
            }
            if (!result.length) {
                return res.status(401).send({
                    message: 'Username or Password is incorrect!'
                })
            }
            bcrypt.compare(
                req.body.password,
                result[0]['password'],
                (bErr, bResult) => {
                    if (bErr) {
                        return res.status(401).send({
                            message: 'Username or Password is incorrect!'
                        })
                    }
                    if (bResult) {
                        const token = jwt.sign(req.body.username, process.env.JWT_SECRET)

                        return res.status(200).send({
                            message: 'Logged In',
                            username: result[0].username,
                            token: token
                        })
                    }
                    return res.status(401).send({
                        message: 'Username or Password is incorrect!'
                    })
                }
            )
        }
    )
}

const userSignUp = (req, res) => {
    db.query(
        `SELECT * FROM user WHERE LOWER(username) = LOWER(${db.escape(req.body.username)});`,
        (err, result) => {
            if (result.length) {
                return res.status(409).send({
                    message: 'This user is already existed!'
                })
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).send({
                            message: err
                        })
                    } else {
                        db.query(
                            `INSERT INTO user VALUES ('${req.body.username}', ${db.escape(hash)})`,
                            (err, result) => {
                                if (err) {
                                    return res.status(400).send({
                                        message: 'Please enter valid username and password'
                                    })
                                }
                                return res.status(201).send({
                                    message: 'Created Successfully'
                                })
                            }
                        )
                    }
                })
            }
        }
    )
}

module.exports = {userLogin, userSignUp}