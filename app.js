const express = require('express')
const router =require ('./controllers/index')
const app = express()

const port = 3000

app.use('/',router)
app.listen(port, ()=>{
    console.log(`servidor: http://localhost:${port}`)
})