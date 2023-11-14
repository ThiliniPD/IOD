const express = require('express');
const router = express.Router();

router.get('/substract', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sub = number1 - number2
    console.log(sub)
    
    res.status(200)
    res.json({result:sub})
})

module.exports = router;