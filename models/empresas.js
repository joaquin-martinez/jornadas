'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const empresaSchema = Schema({
  name : { type : String , unique : true , required : true } ,
  image : String,
  empresaNif : { type : String , unique : true , required : true } ,
})

module.exports = mongoose.model('empresas' , empresaSchema)
