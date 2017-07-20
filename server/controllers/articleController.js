var mongoClient = require('mongodb').MongoClient();
var Articles = require('../models/articleModel');

function getAllArticles(req,res) {
  Articles.find(function(err,result){
    if(err) res.send(err)
    res.send(result);
  })
}

function getSingleArticle(req,res) {
  Articles.find({
    _id : req.params.id
  }, (err,result) =>{
    if(err) res.send(err)
    res.send(result);
  })
}

function createArticle(req,res) {
  Articles.create({
    title : req.body.title,
    description : req.body.description
  },(err,result) => {
    if(err) res.send(err)
    res.send(result);
  })
}

function updateArticle(req,res) {
  Articles.find({
    _id : req.params.id
  }, (err,result) => {
    Articles.update({
      _id : req.params.id
    }, {
      $set : {
        title : req.body.title,
        description : req.body.description
      }
    }, (err,result) => {
      if(err) res.send(err)
      res.send(result);
    })
  })
}

function deleteArticle(req,res) {
  Article.remove({
    _id : req.params.id
  }, (err,result) => {
    if(err) res.send(err)
    res.send(result);
  })
}


module.exports = {
  getAllArticles, getSingleArticle, createArticle, updateArticle,deleteArticle
}
