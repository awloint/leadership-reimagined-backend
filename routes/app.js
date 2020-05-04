'use strict'
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

//Middlewares
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  )
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  )
  next()
})
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const jsonParser = bodyParser.json()

//GET ROUTES
app.get('/', jsonParser, (req, res) => {
  res
    .status(200)
    .json({ name: 'Aliens from Space', greetings: 'We come in Peace!' })
})

//POST ROUTES
app.post('/', jsonParser, (req, res) => {
  res.status(201).json(req.body)
})

module.exports = app
