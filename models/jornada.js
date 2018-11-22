'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jornadaSchema = Schema({
  date : { type : Date , default : Date.now() },
  nif : String ,
  hora : Date,
  duracion : Number ,
  turnos : [{
              user: String ,
              horaTurno : Date ,
              duracionTurno : Number
              }]
})

module.exports = mongoose.model('jornadas' , jornadaSchema)
