'use strict'
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const {
  createDelegate,
  findAllDelegates
} = require('../controllers/mainController')

const app = express()

//Database connection
// mongoose.Collection('useCreateIndexes', true);

const uri = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@main-cluster-8mekn.mongodb.net/zoom-delegates?retryWrites=true&w=majority`
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Successfully connected')
  })
  .catch(err => {
    console.log(`Couldn't connect ${err}`)
  })

//Middlewares
app.use(cors())
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

app.get('/findAll', jsonParser, findAllDelegates)

//POST ROUTES
app.post('/', jsonParser, createDelegate)

module.exports = app
