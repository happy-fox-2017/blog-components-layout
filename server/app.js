const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/blog-component';
mongoose.Promise('bluebird');
mongoose.connect(url, (err)=>{
    if(err) console.log(err);
    console.log('you are conected on url: ', url);
})

var article = require('./routes/article');

var app = express()

//cors and body-parser
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/article', article);

app.listen(3000, ()=>{
    console.log('connection on port: 3000')
});

module.exports = app;