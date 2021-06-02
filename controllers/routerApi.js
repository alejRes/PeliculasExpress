const router = require('express').Router()
const pelicula = require ('./pelicula')

router.get('/film/:title', pelicula.getFilm)
router.post('/film', pelicula.addFilm)
router.put('/film', pelicula.editFilm)
router.delete('/film', pelicula.removeFilm)
router.all('*', (req,res)=>{
    res.status(404).json({message: "te has equivocado no existe la pagina"})
})

module.exports = router;