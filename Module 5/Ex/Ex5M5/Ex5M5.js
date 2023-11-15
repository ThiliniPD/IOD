const express = require('express')
const calculatorRoute = require('./calculatorRoute')
const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World1!')
})

app.use('/', express.static('public'))
app.use('/', calculatorRoute)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
