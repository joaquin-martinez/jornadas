'use strict'

const Jornada = require('../models/jornada')

const setJornada = (req , res ) => {
  console.log("Se procede a crear una jornada");
  let data = JSON.parse(req.body.datos);
  console.log(req.body.datos);
  console.log(data);

  let registro = new Jornada( data );
  registro.save((err , user) => {
    if (err) console.log(`Error al guardar el usuario`);
    else {

      console.log(user);
    }
  } );

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
  let date = new Date();
  date = date.setHours().setMinutes();
//  date = date.setDate(date.getDate()-1);
//  let stringDate = date.getFullYear + "-" + (date.getMonth +1) + "-" + date.getDate ;
//  console.log(stringDate);
//  date = new Date( stringDate );
  console.log(date.getHours());
  Jornada.find( { fecha : { "$gte" : date }  } , (err , list)=>{
    if(err){
      console.log("Error al leer las jornadas.");
    } else{
          res.send({listado : list })
            console.log("Mandada lista de jornadas");
    }

  })

//  res.status(200).redirect("../recarga")

}


module.exports = {
  setJornada ,
  getJornada ,
  deleteJornada ,
  putJornada ,
  getJornadas
}
