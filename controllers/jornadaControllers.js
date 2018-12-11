'use strict'

const Jornada = require('../models/jornada')

const setJornada = (req , res ) => {
  console.log("Se procede a crear una jornada");
  let data = JSON.parse(req.body.datos);
  console.log(req.body.datos);
  console.log(data);

  let registro = new Jornada( data );
  registro.save((err , user) => {
    if (err){
      console.log(`Error al guardar el usuario: `);
      console.log(err);
    }
    else {

      console.log(user);
      res.status(200).redirect("../recarga");
    }
  } );


}

const getJornada = (req , res ) => {
  console.log("Se procede a recuperar una jornada");

  res.status(200).redirect("../recarga")

}

const deleteJornada = (req , res ) => {
  console.log("Se procede a borrar una jornada");
  console.log(req.body);
  let usu = req.body
  console.log(usu.selectBajaJor )
  Jornada.deleteOne( { _id : usu.selectBajaJor } , (err) => {
    if (err) {
      console.log("no se pudo borrar el usuario: " + usu.selectBajaJor);
      res.status(500).redirect("../recarga")
    } else {
      res.status(200).redirect("../recarga")
      console.log(`Borrado correctamente el usuario: ${usu.selectBajaJor}.`);
    }

  })

}

const putJornada = (req , res ) => {
  console.log("Se procede a actualizar una jornada");
  console.log("id: " + req.body.datos);

  let objdatos = JSON.parse(req.body.datos);
  console.log("id: " + JSON.parse(req.body.datos)._id);

  Jornada.findOneAndUpdate({_id : objdatos._id} ,{ $set : { turnos : objdatos.turnos }} , (err, raw)=>{
    if (err) return handleError(err);
    console.log('El resultado ha sido: ', raw);

    res.status(200).redirect("../recarga")

  })
}

const getJornadas  = (req , res ) => {
  console.log("Se procede a recuperar las jornadas");
  let date = new Date();
  date = date.setDate(date.getDate()-1);
  Jornada.find( { fecha : { "$gt" : date }  } , (err , list)=>{
    if(err){
      console.log("Error al leer las jornadas.");
    } else{
      res.send({listado : list })
      console.log("Mandada lista de jornadas");
    }

  })
}

const getJorHist  = (req , res ) => {
  console.log("Se procede a recuperar las jornadas");
  Jornada.find( {} , (err , list)=>{
    if(err){
      console.log("Error al leer las jornadas.");
    } else{
      res.send({listado : list })
      console.log("Mandada lista de jornadas");
    }

  })

}

module.exports = {
  setJornada ,
  getJornada ,
  deleteJornada ,
  putJornada ,
  getJorHist ,
  getJornadas
}
