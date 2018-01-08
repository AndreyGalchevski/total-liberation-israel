const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const cloudinary = require('cloudinary')
const cloudinaryConfig = require('../config/cloudinary')
const dbConfig = require('../config/db')
const passport = require('passport')
const path = require('path')
const serveStatic = require('serve-static')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
  
app.use(passport.initialize())
app.use(passport.session())
require('../config/passport')(passport)

app.use(serveStatic(path.join(__dirname, '../public/')))

cloudinary.config(cloudinaryConfig);

app.get('/robots.txt', function (req, res) {
  res.type('text/plain');
  res.send("User-agent: *\nDisallow: /admin");
});

var mongoose = require('mongoose');
mongoose.connect(dbConfig.url);
var db = mongoose.connection;
require('../routes')(app, db)
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.listen(process.env.PORT || 8080)