var mongoose = require('mongoose');

var climbDataSchema = new mongoose.Schema({
	"weight": Number,
	"vfriFlap5": Number,
	"vfriFlap10": Number,
	"vfriFlap15": Number,
	"vClimb": Number
});

mongoose.model('ClimbData', climbDataSchema, 'ClimbData');

var takeoffDataSchema = new mongoose.Schema({
	"flap": Number,
	"weight": Number,
	"above20C": String,
	"altitude0Vr": String,
	"altitude0V2": String,
	"altitude2000Vr": String,
	"altitude2000V2": String,
	"altitude4000Vr": String,
	"altitude4000V2": String,
	"altitude6000Vr": String,
	"altitude6000V2": String,
	"altitude8000Vr": String,
	"altitude8000V2": String,
	"altitude10000Vr": String,
	"altitude10000V2": String
});

mongoose.model('TakeoffData', takeoffDataSchema, 'TakeoffData');

var landingDataSchema = new mongoose.Schema({
	"flapsDegree": Number,
	"weight": Number,
	"V_app": String,
	"V_ref": String,
	"V_ga": String
});

mongoose.model('LandingData', landingDataSchema, 'LandingData');
