const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Ride Schema and Model
const RideSchema = new Schema({
  ridetype: {
    type : String,
    required : [true, 'Ride Type field is Required'];
  },
  numberPlate: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  }

  //Add geo location

}); 

// Create Model for Ride
const Ride = mongoose.model('Ride', RideSchema);

module.exports = Ride;
