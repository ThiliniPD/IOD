const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get('/', (req, res) => {
 Controllers.commentControllerController.getComments(res);
})

router.post('/create', (req, res) => {
 Controllers.commentController.createComments(req.body, res)
})

router.put('/:id', (req, res) => {
    Controllers.commentController.updateComment(req, res)
})

router.delete('/:id', (req, res) => {
    Controllers.commentController.deleteComment(req, res)
})

router.get('/user/userId', (req, res) => {
    Controllers.commentController.getUserComments(req, res);
})

router.get('/post/postId', (req, res) => {
    Controllers.commentController.getPostComments(req, res);
})

module.exports = router;