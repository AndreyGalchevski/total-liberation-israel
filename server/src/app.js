const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const cloudinary = require('cloudinary')
const cloudinaryConfig = require('../config/cloudinary')
const dbConfig = require('../config/db')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

cloudinary.config(cloudinaryConfig);

var mongoose = require('mongoose');
mongoose.connect(dbConfig.url);
var db = mongoose.connection;
require('../routes')(app, db)
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});

app.listen(process.env.PORT || 8081)