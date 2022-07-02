
// dependencies
const express = require('express')

// configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// routes
app.get('/', (req,res) => {
 res.send('Welcome to an awsome App about Breads!')
})

// Linked up to breads_controller.js
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// listen
app.listen(PORT, () => {
 console.log("nomming at port", PORT);
})

