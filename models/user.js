'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const empresaSchema = Schema({
  user : String,
  password : String,
  tipo : String ,
  empresaNif : String

})

module.export = mongoose.model('usuarios' , empresaSchema)
