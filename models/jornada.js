'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jornadaSchema = Schema({
  date : { type : Date , default : Date.now() },
  nif : String ,
  hora : String,
  duracion : Number ,
  turnos : [{
              user: String ,
              horaTurno : String ,
              duracionTurno : Number
              }]
})

module.exports = mongoose.model('jornadas' , jornadaSchema)
