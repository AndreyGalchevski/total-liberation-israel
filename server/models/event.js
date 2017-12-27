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

module.exports.addEvent = function(newEvent) {
  var new_event = new EventModel({
    title: newEvent.title,
    date: newEvent.date,
    description: newEvent.description,
    fbPage: newEvent.fbPage
  })
  return new_event.save()
}

module.exports.getAllEvents = function() {
  return EventModel.find({
    date: {$gte: new Date()}})
    .sort({_id:-1}
    )
}

module.exports.getEventById = function(eventIdToGet) {
  return EventModel.findById(eventIdToGet)
}

module.exports.deleteEvent = function(query) {
  return EventModel.findOneAndRemove(query)
}