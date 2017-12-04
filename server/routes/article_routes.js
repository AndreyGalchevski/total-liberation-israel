var ArticleModel = require('../models/article')
const multer = require('multer')
const upload = multer({ dest: 'tmp/' })
const cloudinary = require('cloudinary')
const fs = require('fs')

module.exports = function(app, db) {
  // Fetch all articles
  app.get('/api/articles', (req, res) => {
    ArticleModel.getAllArticles(function (error, articles) {
        if (error) { 
          console.error(error); 
        }
        res.send({
          articles: articles
        })
      })
    })

  // Create new article
  app.post('/api/articles', (req, res) => {
    var db = req.db;
    var newArticle = {
      title: req.body.title,
      author: req.body.author,
      date: req.body.date,
      lead: req.body.lead,
      content: req.body.content
    }
  
    ArticleModel.addArticle(newArticle, function (error, article) {
      if (error) {
        res.status(500).send({ error: 'Error while saving article' })
        return
      }
      res.send({
        success: true,
        article,
        message: 'Article saved successfully!'
      })
    })
  })

  // Upload a picture
  app.patch('/api/articles/:id/image', upload.fields([{ name: 'articleImg', maxCount: 1 }]), async (req, res) => {
    try {
      let result = await cloudinary.v2.uploader.upload(req.files.articleImg[0].path, {
        folder: 'alf-israel/articles'
      })

      fs.unlink(req.files.articleImg[0].path)

      let updatedFields = {
        image: result.secure_url
      }

      let updatedArticle = await ArticleModel.findByIdAndUpdate(req.params.id, updatedFields, { new: true })

      res.json({ success: true, updatedArticle })
    } catch (e) {
      res.status(500).send({ error: 'Image upload failed.' })
      return
    }
  })

  // Fetch single article
  app.get('/api/article/:id', (req, res) => {
    var db = req.db;
    ArticleModel.getArticleById(req.params.id, function (error, article) {
      if (error) { 
        console.error(error); 
      }
      res.send(article)
    })
  })
  
  // Update an article
  app.put('/api/articles/:id', (req, res) => {
    var db = req.db;
    ArticleModel.findById(req.params.id, 'title date description fbPage', function (error, article) {
      if (error) { console.error(error); }
  
      article.title = req.body.title
      article.author = req.body.author
      article.date = req.body.date
      article.lead = req.body.lead
      article.content = req.body.content
      article.save(function (error) {
        if (error) {
          console.log(error)
        }
        res.send({
          success: true
        })
       })
    })
  })
  
  // Delete an article
  app.delete('/api/articles/:id', (req, res) => {
    var db = req.db;
    ArticleModel.deleteArticle({_id: req.params.id}, function(err, article) {
      if (err)
        res.send(err)
      res.send({
        success: true
      })
    })
  })  
};