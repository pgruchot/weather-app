const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const requestPromise = require('request-promise');
const keys = require('./config/keys')
const router = express.Router();

const app = express();

//Setup
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Port & listen
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Oi lads on port ${PORT}`);
})