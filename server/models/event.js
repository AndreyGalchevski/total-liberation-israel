var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EventSchema = new Schema({
  title: String,
  date: Date,
  description: String,
  fbPage: String,
  image: String
});

var EventModel = mongoose.model("Event", EventSchema);
module.exports = EventModel;

module.exports.addEvent = function(newEvent, callback) {
  var new_event = new EventModel({
    title: newEvent.title,
    date: newEvent.date,
    description: newEvent.description,
    fbPage: newEvent.fbPage
  })
  new_event.save(callback);
}

module.exports.getAllEvents = function(callback) {
  EventModel.find(callback).sort({_id:-1});
}

module.exports.getEventById = function(eventIdToGet, callback) {
  EventModel.findById(eventIdToGet, callback);
}

module.exports.deleteEvent = function(query, callback) {
  EventModel.remove(query, callback);
}