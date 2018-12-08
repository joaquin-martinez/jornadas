'use strict'

const Jornada = require('../models/jornada')

const setJornada = (req , res ) => {
  console.log("Se procede a crear una jornada");
  console.log(req.body);
  res.status(200).redirect("../recarga")
}

const getJornada = (req , res ) => {
  console.log("Se procede a recuperar una jornada");

  res.status(200).redirect("../recarga")

}

const deleteJornada = (req , res ) => {
  console.log("Se procede a borrar una jornada");
    console.log(req.body);
  res.status(200).redirect("../recarga")

}

const putJornada = (req , res ) => {
  console.log("Se procede a actualizar una jornada");
    console.log(req.body);
  res.status(200).redirect("../recarga")

}

const getJornadas  = (req , res ) => {
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
