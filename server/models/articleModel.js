const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var articleSchema = new Schema({
  title : String,
  article : String,
})

var Article = mongoose.model('articles', articleSchema);

module.exports = Article;
