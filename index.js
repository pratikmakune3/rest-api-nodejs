const express = require('express');

//setup an express app
const app = express();

//Listen for requests
//process.env.port : port that is set up on particular env like Heroku
app.listen(process.env.port || 4000, function(){
  console.log('Listening to port 4000');
})
