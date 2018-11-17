'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = Schema({
  user : String,
  password : String,
  tipo : String ,
  empresaNif : String

})

module.exports = mongoose.model('usuarios' , userSchema)
