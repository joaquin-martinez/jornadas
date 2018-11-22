'use strict'

const express = require('express')
const api = express.Router()
const userCtr = require('../controllers/userControllers')
const session = require('express-session')
const Config = require('../config')
const MongoStore = require('connect-mongo')(session)


api.use(session({
  secret : "afr33ty5",
  reseave : true,
  saveUninitialized : true,
  store : new MongoStore({
    url : Config.dbUrl,
    autoreconnect : true
  })
}))

api.get( '/' , (req , res) => {

//	let listaUsu = new Lista()
//	listaUsu.find( {} , (err , list) => {
//	res.send({Listado: list})

	res.send('./public/index.html')




//	})
//	res.send( listado )
	console.log(  )
})
// rutas.get( '/' , (req , res) => {
api.get( '/app' , (req , res) => {
//	let listaUsu = new Lista()
//	listaUsu.find( {} , (err , list) => {
//	res.send({Listado: list})

	// res.sendFile('/home/node/jornadas/app/saludo.html')
	/*
	res.render('login' , { empresa : "Simpempa.sl" ,
												 tipo : "administrador",
												 cabecera : "Edicion de usuaros",
												 destinoalta : "altausuario",
												 destinobaja : "bajausuario",
												 destinomodificar : "modificausuario"
												})
*/
res.render('entrada' , {tipo : "administrador"})


//	})
//	res.send( listado )
	console.log( 'ha llegado' )
})

api.post('/app' , userCtr.getUser)

api.get( '/usuarios' , userCtr.getUsers )


api.get( '/saludo/:nombre' , (req , res) => {
	var name = req.params.nombre
	console.log( name )
	res.send( { "mensaje" : ` hola ${name}. ` } )
	console.log( name )
})


api.get( '/app/product/:productId' , (req , res) => {
	res.send( )
	console.log(  )
})

//Viene de entrada.
api.get( '/altausuarios/' , (req , res) => {
	console.log( 'estamos con los trabajadores' )
	res.render('altausu')
	console.log( 'ya no estamos con los trabajadores' )
})

api.post( '/app/altausu' , userCtr.setUser )


api.put( '/api/product/:productId' , (req , res) => {
	res.send( )
	console.log(  )
})
api.delete( '/api/product/:productId' , (req , res) => {
	res.send( { "mensaje" : `borrado ${productId}. ` } )
	console.log(  )
})


module.exports = api
