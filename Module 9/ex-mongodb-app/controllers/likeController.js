"use strict"; 
let Models = require("../models"); //matches index.js
const getLikes = (res) => {
 //finds all Likes
 Models.Like.find({})
 .then(data => res.send({result: 200, data: data}))
 .catch(err => {
 console.log(err);
 res.send({result: 500, error: err.message})
 }) 
}
const createLike = (data, res) => {
 //creates a new Like using JSON data POSTed in request body
 console.log(data)
 new Models.Like(data).save()
 .then(data => res.send({result: 200, data: data}))
 .catch(err => {
 console.log(err);
 res.send({result: 500, error: err.message})
 }) 
}

const updateLike = (req, res) => {
    //updates the Like matching the ID from the param using JSON data POSTed in request body
    console.log(req.body)
    Models.Like.findByIdAndUpdate(req.params.id, req.body, {
   useFindAndModify: false })
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
    console.log(err);
    res.send({result: 500, error: err.message})
    }) 
   }
   const deleteLike = (req, res) => {
    //deletes the Like matching the ID from the param
    Models.Like.findByIdAndRemove(req.params.id, req.body, {
   useFindAndModify: false })
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
    console.log(err);
    res.send({result: 500, error: err.message})
    }) 
   }
   

module.exports = {
 getLikes, createLike, updateLike, deleteLike
}