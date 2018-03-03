var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: String,
  author: String,
  date: Date,
  lead: String,
  content: Object,
  image: String
});

var ArticleModel = mongoose.model("Article", ArticleSchema);
module.exports = ArticleModel;

module.exports.addArticle = function(newArticle) {
  var new_article = new ArticleModel({
    title: newArticle.title,
    author: newArticle.author,
    date: newArticle.date,
    lead: newArticle.lead,
    content: newArticle.content
  })
  return new_article.save();
}

module.exports.getAllArticles = function() {
  return ArticleModel.find().sort({_id:-1});
}

module.exports.getArticleById = function(articleIdToGet) {
  return ArticleModel.findById(articleIdToGet);
}

module.exports.deleteArticle = function(query) {
  return ArticleModel.findOneAndRemove(query);
}