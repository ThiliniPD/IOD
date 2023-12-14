const express = require("express");
const router = express.Router();
const Controllers = require("../controllers/gotController");

router.get('/laureates', (req, res) => {
 Controllers.getLaureates(res);
})

router.get('/laureate/:id', (req, res) => {
    Controllers.getLaureate(req.params.id, res);
})

module.exports = router