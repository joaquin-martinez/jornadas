'use strict'

const Jornada = require('../models/jornada')

const setJornada = (req , res ) => {
  console.log("Se procede a crear una jornada");
  let data = JSON.parse(req.body.datos);
  console.log(req.body.datos);
  console.log(data);
  /*
  let registro = new Jornada();
  registro.date = data ;
  registro.nif = data ;
  registro.hora = data ;
  registro.duracion = data ;
  registro = data ;
  registro = data ;
  registro = data ;
  registro = data ;
  */
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
