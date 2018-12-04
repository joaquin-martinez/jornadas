'use strict'

const express = require('express')
const api = express.Router()
const userCtr = require('../controllers/userControllers')
const emprCtr = require('../controllers/empreControllers')
const salirCtr = require('../controllers/salirControllers')
const session = require('express-session')
const Config = require('../config')
const MongoStore = require('connect-mongo')(session)
const logado = require("../middlewares/logado")

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
/*
// rutas.get( '/' , (req , res) => {
api.get( '/app' , (req , res) => {
  setTimeout(()=>{},5000);
  res.render('entrada' , { tipo : req.session.user.tipo , user : req.session.user.user })
	console.log( 'ha llegado a /app get entrada.' )
})

*/

api.post('/recarga' , (req ,res)=>{
res.render('entrada' , {tipo : req.session.user.tipo , user : req.session.user.user})
})





api.post('/app' , userCtr.validateUser)
api.post('/usuario' , userCtr.getUser)
api.post('/modusupas' , userCtr.putUserClave)
api.post('/delusu' , userCtr.deleteUser)
api.post( '/usuarios' , userCtr.getUsers )

api.post('/delemp' , emprCtr.deleteEmpresa)

/*
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
*/
api.post( '/altausu' , logado , userCtr.setUser )
api.post( '/altaemp' , emprCtr.setEmpresa )

/*
api.put( '/api/product/:productId' , (req , res) => {
	res.send( )
	console.log(  )
})
api.delete( '/api/product/:productId' , (req , res) => {
	res.send( { "mensaje" : `borrado ${productId}. ` } )
	console.log(  )
})
*/

api.post( '/salir' , salirCtr )


module.exports = api
