const fetch = require('node-fetch');


const pages = {
    home: (req, res) =>{
        let title= req.query.t || "";//t ---> title doc from api
        let data = await prod.getProducts(``)


    },
    film: (req, res) =>{


    },
}

module.exports = pages;