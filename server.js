
// dependencies
const express = require('express')
const methodOverride = require('method-override')

// configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

// routes
app.get('/', (req,res) => {
 res.send(`
 Welcome to an awsome App about Breads!
 <br>
 <br>
 <a href="breads">Go to Breads page</a>
 `)
})

// Linked up to breads_controller.js
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// listen
app.listen(PORT, () => {
 console.log("nomming at port", PORT);
})

// 404 Page
app.get('*', (req, res) => {
 res.send('404')
})