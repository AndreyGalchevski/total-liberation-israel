var EventModel = require('../models/event')
const multer = require('multer')
const upload = multer({ dest: 'tmp/' })
const cloudinary = require('cloudinary')
const fs = require('fs')
const passport = require('passport')

module.exports = function(app, db) {
  // Fetch all events
  app.get('/api/events', async (req, res) => {
    try {
      let events = await EventModel.getAllEvents()
      res.send({events: events})
    } catch (e) {
      res.status(500).send({ error: 'Error while fetching events' })
    }
  })

  // Create new event
  app.post('/api/events', async (req, res) => {
    var newEvent = {
      title: req.body.title,
      date: req.body.date,
      description: req.body.description,
      fbPage: req.body.fbPage
    }
    try {
      let event = await EventModel.addEvent(newEvent)
      res.send({
        success: true,
        event,
        message: 'Event saved successfully!'
      })
    } catch (e) {
      res.status(500).send({ error: 'Error while saving event' })
    }
  })

  // Upload a picture
  app.patch('/api/events/:id/image', upload.fields([{ name: 'eventImg', maxCount: 1 }]), async (req, res) => {
    try {
      let result = await cloudinary.v2.uploader.upload(req.files.eventImg[0].path, {
        folder: 'alf-israel/events'
      })

      fs.unlink(req.files.eventImg[0].path)

      let updatedFields = {
        image: result.secure_url
      }

      let updatedEvent = await EventModel.findByIdAndUpdate(req.params.id, updatedFields, { new: true })

      res.json({ success: true, updatedEvent })
    } catch (e) {
      res.status(500).send({ error: 'Image upload failed.' })
      return
    }
  })

  // Fetch single event
  app.get('/api/event/:id', (req, res) => {
    var db = req.db;
    EventModel.getEventById(req.params.id, function (error, event) {
      if (error) { 
        console.error(error); 
      }
      res.send(event)
    })
  })
  
  // Update an event
  app.put('/api/events/:id', (req, res) => {
    var db = req.db;
    EventModel.findById(req.params.id, 'title date description fbPage', function (error, event) {
      if (error) { console.error(error); }
  
      event.title = req.body.title
      event.date = req.body.date
      event.description = req.body.description
      event.fbPage = req.body.fbPage
      event.save(function (error) {
        if (error) {
          console.log(error)
        }
        res.send({
          success: true
        })
       })
    })
  })
  
  // Delete an event
  app.delete('/api/events/:id', (req, res) => {
    var db = req.db;
    EventModel.deleteEvent({_id: req.params.id}, function(err, event) {
      if (err)
        res.send(err)
      res.send({
        success: true
      })
    })
  })  
};