const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var articles = require('./routes/articles');

const app = express();

mongoose.connect('mongodb://localhost/blog');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded(({extended : false})));

app.use('/articles', articles);

app.listen( () => console.log('Listening port 3000'))

module.exports = app;
