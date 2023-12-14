"use strict";

const axios = require('axios')

const getLaureates = (res) => {
    axios.get("https://api.nobelprize.org/2.1/laureates").then(data =>{
        res.status(200).json({ data: data.data})
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getLaureate = (id, res) => {
    axios.get("https://api.nobelprize.org/2.1/laureates").then(data =>{
        let filtered = data.data.laureates.filter((laureate) => { return laureate.id == id })
        res.status(200).json(filtered[0])
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};


module.exports = {
    getLaureates,
    getLaureate
}