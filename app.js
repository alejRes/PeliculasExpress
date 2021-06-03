require('dotenv').config()//esto sacado de la web de environment files .env

const express = require('express')
const router = require ('./controllers/index')
const routerApi = require('./controllers/routerApi')
const app = express()


const port = 3000
app.use("/public", express.static("public"))//enlace de css simepre por encima de los motores de visualización

app.set('view engine','pug')
app.set('views','./views')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', routerApi)
app.use('/',router)

app.listen(port, ()=>{
    console.log(`servidor: http://localhost:${port}`)
})