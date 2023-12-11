"use strict";

const Models = require("../models");

const getComments = (res) => {
    // finds all users
    Models.Comment.findAll({})
      .then((data) => res.send({ result: 200, data: data }))
      .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
};

const createComment = (data, res) => {
    // creates a new user using JSON data POSTed in request body
    console.log(data);
    Models.Comment.create(data)
      .then((data) => res.send({ result: 200, data: data }))
      .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
};

const updateComment = (req, res) => {
    Models.Comment.update(req.body, { where: { id: req.params.id } })
      .then(function (data) {
        res.send({ result: 200, data: data });
      })
      .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
};
  
const deleteComment = (req, res) => {
    Models.Comment.destroy({ where: { id: req.params.id } })
        .then(function (data) {
        res.send({ result: 200, data: data });
        })
        .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
        });
};


// see https://sequelize.org/docs/v6/advanced-association-concepts/eager-loading/#basic-example
const getUserComments = (req, res) => {
    // finds all posts for a given user and populates with matching user details
    Models.Comment.findAll({ where: { userId: req.params.id }, include: Models.User })
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};


const getPostComments = (req, res) => {
    // finds all posts for a given user and populates with matching user details
    Models.Comment.findAll({ where: { postId: req.params.id }, include: Models.Post })
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

module.exports = {
  getComments,
  createComment,
  updateComment,
  deleteComment,
  getUserComments,
  getPostComments
};







