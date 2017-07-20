const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title: String,
    content: String,
    author: String,
    tags: [String],
    createdAt: Date,
    updatedAt: Date
  }
)

var Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;
