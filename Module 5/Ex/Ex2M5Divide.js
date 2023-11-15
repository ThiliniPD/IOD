const express = require('express');
const router = express.Router();

router.get('/divide', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let div = number1 / number2
    console.log(div)
    
    res.status(200)
    res.json({result:div})    
})

module.exports = router;