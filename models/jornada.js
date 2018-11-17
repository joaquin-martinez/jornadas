'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jornadaSchema = Schema({
  date : { type : Date , default : Date.now() },
  user : String ,
  nif : String ,
  hora : Date,
  duracion : Number
})

module.export = mongoose.model('jornadas' , jornadaSchema)
