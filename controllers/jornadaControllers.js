'use strict'

const Usuar = require('../models/jornada ')

setJornada = (req , res ) => {
  console.log("Se procede a crear una jornada");
  res.status(200).redirect("../recarga")
}

getJornada = (req , res ) => {
  console.log("Se procede a recuperar una jornada");
  res.status(200).redirect("../recarga")

}

deleteJornada = (req , res ) => {
  console.log("Se procede a borrar una jornada");
  res.status(200).redirect("../recarga")

}

putJornada = (req , res ) => {
  console.log("Se procede a actualizar una jornada");
  res.status(200).redirect("../recarga")

}

getJornadas  = (req , res ) => {
  console.log("Se procede a recuperar las jornadas");
  res.status(200).redirect("../recarga")

}


module.exports = {
  setJornada ,
  getJornada ,
  deleteJornada ,
  putJornada ,
  getJornadas
}
