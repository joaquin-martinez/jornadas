'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = Schema({
  user : { type : String , unique : true , required : true } ,
  password : String,
  tipo : { type : String , enum : [ "administrador" , "trabajador" ] } ,
  empresaNif : String

})

module.exports = mongoose.model('usuarios' , userSchema)
