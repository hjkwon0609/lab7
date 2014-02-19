
var Mongoose = require('mongoose');


var ProjectSchema = new Mongoose.Schema({
  // fields are defined here
  "title": String,
  "image": String,
  "date": Date,
  "description": String
});

exports.Project = Mongoose.model('Project', ProjectSchema);


