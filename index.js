const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//setup an express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/ridego');
mongoose.Promise = global.Promise;                     //mongoose.Promise is deprecated

//middleware to parse request-body
app.use(bodyParser.json());

//Initialize routes
app.use(routes);

//Listen for requests
//process.env.port : port that is set up on particular env like Heroku
app.listen(process.env.port || 4000, function(){
  console.log('Heyyy Listening to port 4000');
})
