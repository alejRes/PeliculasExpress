const fetch = require('node-fetch');

const apikey = require('../config');


const pages = {
    home: (req, res) =>{
        res.status(200).render('home');
    },
    film: async (req,res) =>{
        let t= req.params.title;
        let response = await fetch(`http://www.omdbapi.com/?apikey=${apikey.key}&t=${t}`);
        let peli= await response.json()
        //console.log([peli])
        // res.send([peli][0].Title)


        res.status(200).render('film',{peli});

    },
    postFilm: (req, res) =>{
        let titulo = req.body.titulo;
        res.redirect(`/film/${titulo}`)
    },
}

module.exports = pages;