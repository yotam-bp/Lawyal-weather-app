const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true
  },
  temperature_f: {
    type: String,
    required: true
  },
  temperature_c: {
    type: String,
    required: true
  }, 
  humidity: {
    type: String,
    required: true
  },
   weather_icon: {
    type: String,
    required: true
  },
  windspeed:{
    type:String,
    required:true
  },
   favorite: {
    type: Boolean,
    required: true
  }
});

const Weather = mongoose.model('Weather', weatherSchema);

module.exports = Weather;
