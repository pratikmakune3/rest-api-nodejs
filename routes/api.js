const express = require('express');
const router = express.Router();

//Retrieves the Rides
router.get('/api/rides', function(req,res){
  console.log('GET request');
  res.send({type : 'GET'});
});

//Adds the Ride
router.post('/api/rides', function(req,res){
  console.log(req.body);
  res.send({
            type : 'POST',
            name : req.body.name
          });
});

//Updates the Ride
router.put('/api/rides/:id', function(req,res){
  console.log('PUT request');
  res.send({type : 'PUT'});
});

//Deletes the Ride
router.delete('/api/rides/:id', function(req,res){
  console.log('DELETE request');
  res.send({type : 'DELETE'});
});

module.exports = router;
