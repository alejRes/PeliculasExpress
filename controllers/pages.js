const apikey = require('../config');
const fetch = require ('node-fetch');


const pages = {
    home: (req, res) =>{
        res.status(200).render('home');
    },

    film: async (req,res) =>{


        //DE esta forma se ejecuta el fect cuando la ruta llama a la función getFilm
        let t= req.params.title;
        let response = await fetch(`http://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${t}`);
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