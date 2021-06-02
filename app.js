const express = require('express')
const router =require ('./controllers/index')
const app = express()


const port = 3000
app.use("/public", express.static("public"))//enlace de css simepre por encima de los motores de visualización
app.set('view engine','pug')
app.set('views','./views')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/',router)
app.listen(port, ()=>{
    console.log(`servidor: http://localhost:${port}`)
})