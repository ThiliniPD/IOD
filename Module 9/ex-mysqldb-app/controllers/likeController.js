"use strict";

const Models = require("../models"); 

const getLikes = (res) => {
    // finds all users
    Models.Like.findAll({})
      .then((data) => res.send({ result: 200, data: data }))
      .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
};

const createLike = (data, res) => {
    // creates a new user using JSON data POSTed in request body
    console.log(data);
    Models.Like.create(data)
      .then((data) => res.send({ result: 200, data: data }))
      .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
};

const updateLike = (req, res) => {
    Models.Like.update(req.body, { where: { likeId: req.params.likeIdid } })
      .then(function (data) {
        res.send({ result: 200, data: data });
      })
      .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
};
  
const deleteLike = (req, res) => {
    Models.Like.destroy({ where: { likeId: req.params.likeId } })
        .then(function (data) {
        res.send({ result: 200, data: data });
        })
        .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
        });
};


// see https://sequelize.org/docs/v6/advanced-association-concepts/eager-loading/#basic-example
const getUserLikes = (req, res) => {
    // finds all posts for a given user and populates with matching user details
    Models.Like.findAll({ where: { userId: req.params.userId }, include: Models.User })
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const getPostLikes = (req, res) => {
    // finds all posts for a given user and populates with matching user details
    Models.Like.findAll({ where: { postId: req.params.postId }, include: Models.Post })
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};


module.exports = {
  getLikes,
  createLike,
  updateLike,
  deleteLike,
  getUserLikes,
  getPostLikes
};






