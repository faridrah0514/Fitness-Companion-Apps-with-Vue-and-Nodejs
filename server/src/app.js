const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const heroes = require('../public/heroes')
const personals = require('../public/personal')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send("hallo world")
})

app.get('/heroesworkout', (req, res) => {
    res.json(heroes.Heroes)
})

app.get('/personals', (req, res) => {
    res.json(personals.Personals)
})


app.listen(8081, () => {
    console.log("server runs in port 8181")
})