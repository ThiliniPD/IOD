const express = require('express')
const fs = require('fs')
const app = express()

function loadJson(file) {
    try {
        const data = fs.readFileSync(file, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error(`Failed to read ${file}. ${err}`);
    }
}

let products = loadJson('products.json')

const port = 3000
app.use('/', express.static('public'))
app.get('/products', (req, res) => { res.json(products) })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
