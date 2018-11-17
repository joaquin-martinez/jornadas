'use strict'

const Usuar = require('../models/user')

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



}

function deleteUser ( req , res ) {



}

function putUser ( req , res ) {



}

function getUsers ( req , res ) {



}


exports = {
  setUser ,
  getUser ,
  deleteUser ,
  putUser ,
  getUsers
}
