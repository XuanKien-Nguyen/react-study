require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const routeUser = require('./routes/user.route');

const app = express();

const port = process.env.PORT || 8080;

app.use(cookieParser);

app.use(cors({
    origin: '*',
    credentials: true,
}))

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Internal Server Error';
    res.status(err.statusCode).json({
        message: err.message,
    })
})

app.use('/user', routeUser);

app.listen(port, () =>{
    console.log("Your app running on port " + port);
})