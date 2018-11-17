'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const empresaSchema = Schema({
  name : String,
  image : String,
  empresaNif : String
})

modul.export = mongoose.model('empresas' , empresaSchema)
