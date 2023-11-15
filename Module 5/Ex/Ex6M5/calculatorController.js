const Calculator = require('./libraries/Calculator');
let myCalc = new Calculator()

const addNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = myCalc.add(number1, number2)
    console.log(sum)
    res.status(200)
    res.json({result:sum})
}

const substractNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sub = myCalc.sub(number1, number2)
    console.log(sub)
    
    res.status(200)
    res.json({result:sub})
}

const multiplyNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let mul = myCalc.mul(number1, number2)
    console.log(mul)
    
    res.status(200)
    res.json({result:mul})
}

const divideNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let div = myCalc.div(number1, number2)
    console.log(div)
    
    res.status(200)
    res.json({result:div})  
}

module.exports = {
    addNumbers,
    substractNumbers,
    multiplyNumbers,
    divideNumbers
} 

