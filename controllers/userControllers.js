'use strict'

// const express = require('express')
const Usuar = require('../models/user')
// const session = require('express-session')

function setUser( req , res ) {
//  res.status(200).send() //  { "mensaje" : "Se ha recibido el mensaje" }  )
  console.log( req.body )

  let nuevoUsu = new Usuar()
  nuevoUsu.user = req.body.usuario
  nuevoUsu.password = req.body.clave
  nuevoUsu.tipo = req.body.tipo
  nuevoUsu.save((err , user) => {
    if (err) console.log(`Error al guardar el usuario`);
    else {

      console.log(user);
//      res.status(200).redirect('back');
      res.redirect('../recarga');
//      res.render('entrada' , {tipo : req.session.user.tipo , user : req.session.user.user})
    }

  })



}

function validateUser ( req , res ) {
  console.log('LLega usuario a validate user');
  console.log(req.body);
  var candidato = req.body
  console.log(candidato.clave)
  Usuar.find( { user : candidato.usuario } , (err , list) => {
    // res.send({Listado: list})
    var trabajador = list
    console.log(trabajador[0])
    if(err)console.log('error en la busqueda');
    else if (trabajador[0] && candidato.usuario == trabajador[0].user &&
      candidato.clave == trabajador[0].password ){
        console.log( list);
        console.log(trabajador[0].tipo);
        req.session.user = trabajador[0];
        console.log("usuario en la sesion");
        res.status(200);
//        res.redirect(./entrar)
        res.render('entrada' , {tipo : req.session.user.tipo , user : req.session.user.user})
      }
      else {

        console.log("Mensaje de clave incorrecta");
//        res.sendFile('/home/node/jornadas/public/index.html')
        res.send({mensaje:"usuario o clave incorrecta"});
      }
    })

  }

  function deleteUser ( req , res ) {

    console.log(`borrando el usuario: ${req.body.selectBajaUsu}`);
    let usu = req.body
    console.log(usu.selectBajaUsu )
    Usuar.deleteOne( { user : usu.selectBajaUsu } , (err) => {
      if (err) {
        console.log("no se pudo borrar el usuario: " + usu.selectBajaUsu);
        res.status(500).redirect("../recarga")
      } else {
        res.status(200).redirect("../recarga")
              console.log(`Borrado correctamente el usuario: ${usu.selectBajaUsu}.`);
      }

    })



  }

  function putUser ( req , res ) {
    console.log(`Actualizando usuario ${req.body.musuario}`);
    Usuar.findOneAndUpdate({user : req.body.musuario} ,{ $set : { password : req.body.mclave ,
     tipo : req.body.mtipo }} , (err, raw)=>{
      if (err) return handleError(err);
      console.log('El resultado ha sido: ', raw);
              res.status(200).redirect("../recarga")
    } );

  }

  function getUsers ( req , res ) {
    Usuar.find( {} , (err , list) => {
      res.send({Listado: list})
    })
    //	res.send( listado )
    console.log( "Mandada lista de usuarios." )
  }

  const getUser = ( req , res )=>{
    Usuar.find( { user : req.body.usuario } , (err , usu ) => {
      if(err) {
        console.log(`No se encuentra el usuario ${req.body.usuario}`);
      } else {
        rees.send( { usuario : usu } )
      }

    })
}

    module.exports = {
      setUser ,
      validateUser,
      getUser ,
      deleteUser ,
      putUser ,
      getUsers
    }
