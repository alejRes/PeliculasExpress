
const apikey = require ('../config');
const peli = require ('../utils/peli');

const routes = {

    getFilm : async (req,res) => {

        //Se utiliza un módulo externo llamado peli en el cual hay una función que se llama getPeli que es la que 
        // hace el fetch
        let t= req.params.title;
        let data = await peli.getPeli(`http://www.omdbapi.com/?apikey=${apikey.key}&t=${t}`)
        
        //console.log([peli])
        // res.send([peli][0].Title)
        res.status(200).json(data);
    },

     addFilm: (req,res) =>{ 

        let tit = req.body.Title
        let mensaje ={message : "se ha guardado " + tit}
        res.status(200).json(mensaje);
     },    

    editFilm: (req,res) =>{ 

        let tit = req.body.Title
        let mensaje = {id :"0", message : "se ha actualizado " + tit}
        res.status(200).json(mensaje);
    },

    removeFilm:(req,res) =>{ 

        let tit = req.body.Title
        let mensaje = {id :"0", message : "se ha borrado " + tit}
        res.status(200).json(mensaje);
    }

}

module.exports = routes;