// *********************************************************************************
// SERVER.JS - THIS FILE INITIATES YOUR ENTIRE APPLICATION. IT"S YOUR APP FOUNDATION!
// *********************************************************************************

require('dotenv').config()

const express = require('express')
const exphbs = require('express-handlebars')
/* eslint-disable no-unused-vars */
const db = require('./models/example')
/* eslint-enable no-unused-vars */

const app = express()
const PORT = process.env.PORT || 3000
/* eslint-disable no-unused-vars */
const ENV = process.env.NODE_ENV || 'development'
/* eslint-enable no-unused-vars */

// Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public'))

// Handlebars
app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main'
  })
)
app.set('view engine', 'handlebars')

// Routes
require('./routes/apiRoutes')(app)
require('./routes/htmlRoutes')(app)

// Starting our Express app
// =============================================================
app.listen(PORT, function () {
  console.log(
    '==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
    PORT,
    PORT)
})

module.exports = app
