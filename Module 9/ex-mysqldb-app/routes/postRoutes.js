const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get('/', (req, res) => {
 Controllers.postController.getPosts(res);
})

router.post('/create', (req, res) => {
 Controllers.postController.createPosts(req.body, res)
})

router.put('/:id', (req, res) => {
    Controllers.postController.updatePost(req, res)
})

router.delete('/:id', (req, res) => {
    Controllers.postController.deletePost(req, res)
})

router.get('/user/userId', (req, res) => {
    Controllers.postController.getUserPosts(req, res);
})

module.exports = router;