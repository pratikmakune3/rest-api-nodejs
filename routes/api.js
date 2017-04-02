const express = require('express');
const router = express.Router();
const Ride = require('../models/ride');

//Retrieves the Rides
router.get('/api/rides', function(req,res){
  console.log('GET request');
  res.send({type : 'GET'});
});

//Adds the Ride to db
router.post('/api/rides', function(req,res){
  //mongoose method create return a Promise...
  // Create a ride locally by passing user data in POST and Save it to the db
  Ride.create(req.body).then(function(ride){
    res.send(ride);
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
