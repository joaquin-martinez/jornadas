'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const path =require('path')
const api = require('./routes')
// const session = require('express-session')
const Config = require('./config')
// const MongoStore = require('connect-mongo')(session)
// const userCtr = require('./controllers/userControllers')

const app = express()


app.use(bodyParser.urlencoded( { extended : false } ))
app.use( bodyParser.json() )
app.use( express.static('public') )
app.use( express.static('views') )
app.use('/' , api)
/*
app.use(session({
  secret : "afr33ty5",
  reseave : true,
  saveUninitialized : true,
  store : new MongoStore({
    url : Config.dbUrl,
    autoreconnect : true
  })
}))
*/
app.set('views' , path.join('app'))
app.set('view engine' , 'ejs')

/*
app.get( '/' , (req , res) => {

//	let listaUsu = new Lista()
//	listaUsu.find( {} , (err , list) => {
//	res.send({Listado: list})

	res.send('./views/index.html')




//	})
//	res.send( listado )
	console.log(  )
})
// rutas.get( '/' , (req , res) => {
app.get( '/app' , (req , res) => {
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

res.render('entrada' , {tipo : "administrador"})


//	})
//	res.send( listado )
	console.log( 'ha llegado' )
})

app.post('/app' , userCtr.getUser)

app.get( '/usuarios' , userCtr.getUsers )


app.get( '/saludo/:nombre' , (req , res) => {
	var name = req.params.nombre
	console.log( name )
	res.send( { "mensaje" : ` hola ${name}. ` } )
	console.log( name )
})


app.get( '/app/product/:productId' , (req , res) => {
	res.send( )
	console.log(  )
})
app.get( '/app/trabajadores/' , (req , res) => {
	console.log( 'estamos con los trabajadores' )
	res.render('altausu')
	console.log( 'ya no estamos con los trabajadores' )
})

app.post( '/app/altausu' , userCtr.setUser )


app.put( '/api/product/:productId' , (req , res) => {
	res.send( )
	console.log(  )
})
app.delete( '/api/product/:productId' , (req , res) => {
	res.send( { "mensaje" : `borrado ${productId}. ` } )
	console.log(  )
})
*/
module.exports = app
