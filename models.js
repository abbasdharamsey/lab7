
var Mongoose = require('mongoose');


var ProjectSchema = new Mongoose.Schema({
  "project_title": String,
  "image_url": String,
  "date": Date,
  "summary": String
});

exports.Project = Mongoose.model('Project', ProjectSchema);


