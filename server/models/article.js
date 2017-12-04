var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: String,
  author: String,
  date: Date,
  lead: String,
  content: String,
  image: String
});

var ArticleModel = mongoose.model("Article", ArticleSchema);
module.exports = ArticleModel;

module.exports.addArticle = function(newArticle, callback) {
  var new_article = new ArticleModel({
    title: newArticle.title,
    author: newArticle.author,
    date: newArticle.date,
    lead: newArticle.lead,
    content: newArticle.content
  })
  new_article.save(callback);
}

module.exports.getAllArticles = function(callback) {
  ArticleModel.find(callback).sort({_id:-1});
}

module.exports.getArticleById = function(articleIdToGet, callback) {
  ArticleModel.findById(articleIdToGet, callback);
}

module.exports.deleteArticle = function(query, callback) {
  ArticleModel.remove(query, callback);
}