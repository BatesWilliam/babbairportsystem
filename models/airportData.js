var mongoose = require('mongoose');

var RunwaySchema = new mongoose.Schema({
    icao: String,
    runwayId: String,
    runwayLength: Number,
    runwayHeadingMagnetic: Number,
    runwayHeadingTrue: Number
})

var airportDataSchema = new mongoose.Schema({
    "IATA": String,
    "ICAO": String,
    "airportName": String,
    "airportCity": String,
    "airportLatitude": Number,
    "airportLongitude": Number,
    "airportElevation": Number,
    "runways": [RunwaySchema]
});

mongoose.model('AirportData', airportDataSchema, 'AirportData');
