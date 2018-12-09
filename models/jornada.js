'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jornadaSchema = Schema({
  fecha : { type : Date , default : Date.now() },
  codigo : String ,
  horaApertu : String,
  horasJor : Number ,
  turnos : [{
              usuario: String ,
              horaIni : String ,
              horasTur : Number
              }]
})

module.exports = mongoose.model('jornadas' , jornadaSchema)
