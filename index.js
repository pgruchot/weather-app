const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const requestPromise = require('request-promise');
const keys = require('./config/keys')

const app = express();

//Setup
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes
app.post('/checkweather', ( req, res ) => {

    const { city } = req.body;
    const apiKey = keys.weatherAPI.key;
    console.log('kekw')
    //Weather request configuration
    const requestOptions = {
        method: 'GET',
        uri: `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`,
    };

    requestPromise(requestOptions).then((weatherData) => {
        //console.log(res)
        res.json(weatherData);
        }).catch((err) => {
            console.log("Error while calling the API");
            console.log(err)
            res.json({err: 'An error occured. Please try again.'})
        })  
})

//Port & listen
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Oi lads on port ${PORT}`);
})