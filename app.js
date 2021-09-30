// set express, port, exphbs
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const movieList = require('./movies.json').results

// use hbs 簡寫記得後面加上extname:
app.engine('hbs', exphbs({defaultLayout:'main', extname:'.hbs'}))
app.set('view engine', 'hbs')

// set static files
app.use(express.static('public'))

// body-parser
app.use(express.urlencoded({extended: true}))

// set router 
app.get('/', (req, res) => {
  res.render('index', { movies: movieList})
})

app.get('/movies/:id', (req, res) => {
  const id = req.params.id
  res.render('index')
})

// server start listen 
app.listen(port, ()=> {
  console.log(`exp is running on http://localhost:${port}`)
})