var ArticleModel = require('../models/article')
const multer = require('multer')
const upload = multer({ dest: 'tmp/' })
const cloudinary = require('cloudinary')
const fs = require('fs')
const passport = require('passport')

module.exports = function(app, db) {
  // Fetch all articles
  app.get('/api/articles', async (req, res) => {
    try {
      let articles = await ArticleModel.getAllArticles()
      res.send({ articles: articles })
    } catch (e) {
      res.status(500).send({ error: 'Error while fetching events' })
    }
    })

  // Create new article
  app.post('/api/articles', passport.authenticate('jwt', {session: false}), async (req, res) => {
    var newArticle = {
      title: req.body.title,
      author: req.body.author,
      date: req.body.date,
      lead: req.body.lead,
      content: req.body.content
    }
    try {
      let article = await ArticleModel.addArticle(newArticle)
      res.send({
        success: true,
        article,
        message: 'Article saved successfully!'
      })
    } catch (e) {
      res.status(500).send({ error: 'Error while saving article' })
    }
  })

  // Upload a picture
  app.patch('/api/articles/:id/image', upload.fields([{ name: 'articleImg', maxCount: 1 }]), passport.authenticate('jwt', {session: false}), async (req, res) => {
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
  app.get('/api/article/:id', async (req, res) => {
    try {
      let article = await ArticleModel.getArticleById(req.params.id)
      res.send(article)

    } catch (e) {
      res.status(500).send({ error: 'Error while fetching an article' })
    }
  })
  
  // Update an article
  app.put('/api/articles/:id', passport.authenticate('jwt', {session: false}), async (req, res) => {
    try {
      let article = await ArticleModel.findById(req.params.id)
      article.title = req.body.title
      article.author = req.body.author
      article.date = req.body.date
      article.lead = req.body.lead
      article.content = req.body.content
      let public_id = 'alf-israel/articles/' + article.image.substr(-24, 20)
      let result = await cloudinary.v2.uploader.destroy(public_id)
      article.save()
      res.send({ success: true })
    } catch (e) {
      res.status(500).send({ error: 'Error while updating an article' })
    }
  })
  
  // Delete an article
  app.delete('/api/articles/:id', passport.authenticate('jwt', {session: false}), async (req, res) => {
    try {
      let article = await ArticleModel.deleteArticle({_id: req.params.id})
      let public_id = 'alf-israel/articles/' + article.image.substr(-24, 20)
      let result = await cloudinary.v2.uploader.destroy(public_id)
      res.send({ success: true })
    } catch (e) {
      res.status(500).send({ error: 'Error while deleting an article' })
    }
  })  
};