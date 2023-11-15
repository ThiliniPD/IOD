const express = require('express');
const calculatorController = require('./calculatorController')
const router = express.Router();

router.get('/add', (req, res) => {
    calculatorController.addNumbers(req,res)
})

router.get('/substract', (req, res) => {
    calculatorController.substractNumbers(req,res)
})

router.get('/divide', (req, res) => {
    calculatorController.divideNumbers(req,res)
})

router.get('/multiply', (req, res) => {
    calculatorController.multiplyNumbers(req,res)
})

module.exports = router

