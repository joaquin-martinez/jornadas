'use strict'

// const express = require('express')
const Usuar = require('../models/user')
// const session = require('express-session')

function setUser( req , res ) {
  res.status(200).send(  { "mensaje" : "Se ha recibido el mensaje" }  )
	console.log( req.body )

	let nuevoUsu = new Usuar()
	nuevoUsu.user = req.body.usuario
	nuevoUsu.password = req.body.clave
	nuevoUsu.tipo = req.body.tipo
	nuevoUsu.save((err , user) => {
		if (err) console.log(`Error al guardar el usuario`);
		else console.log(user);
	})



}

function getUser ( req , res ) {
  console.log('LLega usuario');
	console.log(req.body);
	var candidato = req.body
	console.log(candidato.clave)
	Usuar.find( { user : candidato.usuario } , (err , list) => {
	// res.send({Listado: list})
	var trabajador = list
	console.log(trabajador[0])
	if(err)console.log('error en la busqueda');
	else if (trabajador[0] && candidato.usuario == trabajador[0].user ){
		console.log( list);
    console.log(trabajador[0].tipo);
    req.session.user = trabajador[0];
		res.render('entrada' , {tipo : req.session.user.tipo})
								}
	else{
		res.sendFile('/home/node/jornadas/public/index.html')
	}
})

}

function deleteUser ( req , res ) {



}

function putUser ( req , res ) {



}

function getUsers ( req , res ) {
  Usuar.find( {} , (err , list) => {
  res.send({Listado: list})
  })
//	res.send( listado )
  console.log(  )



}


module.exports = {
  setUser ,
  getUser ,
  deleteUser ,
  putUser ,
  getUsers
}
