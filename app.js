const express = require('express')
const FrontController = require('./controllers/FrontController')
const app = express()
const port = 3000

//setup EJS
app.set('view engine','ejs')

//route
app.get("/",FrontController.home)
app.get("/about",FrontController.about)
app.get("/team",FrontController.team)

//server create
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})