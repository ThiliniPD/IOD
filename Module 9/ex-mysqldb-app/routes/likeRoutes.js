const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get('/', (req, res) => {
 Controllers.likeController.getLikes(res);
})

router.post('/create', (req, res) => {
 Controllers.likeController.createLikes(req.body, res)
})

router.put('/:id', (req, res) => {
    Controllers.likeController.updateLike(req, res)
})

router.delete('/:id', (req, res) => {
    Controllers.likeController.deleteLike(req, res)
})

router.get('/user/userId', (req, res) => {
    Controllers.likeController.getLikeComments(req, res);
})

router.get('/post/postId', (req, res) => {
    Controllers.likeController.getPostLikes(req, res);
})

module.exports = router;