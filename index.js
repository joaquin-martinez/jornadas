'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path =require('path')
const session = require('express-session')
// const html = require('http')


const Schema = mongoose.Schema

const app = express()
const port = process.env.PORT || 3000
const rutas = express.Router()


app.use(bodyParser.urlencoded( { extended : false } ))
app.use( bodyParser.json() )
app.use( express.static('public') )
app.use( express.static('views') )
//  app.use('/app' , rutas)

app.set('views' , path.join('app'))
app.set('view engine' , 'ejs')


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
*/
res.render('entrada' , {tipo : "administrador"})


//	})
//	res.send( listado )
	console.log( 'ha llegado' )
})

app.post('/app' , (req , res)=>{
	console.log('LLega usuario');
	console.log(req.body);
	var candidato = JSON.parse(req.body)
	console.log(candidato.nombre)
	listaUsu.find( { user : candidato.nombre } , (err , list) => {
	// res.send({Listado: list})
	var trabajador = JSON.parse(list)
	if(err)console.log('error en la busqueda');
	if (candidato.nombre == trabajador.user )console.log( list);
	})

})

app.get( '/usuarios' , (req , res) => {

//	let listaUsu = new Lista()
	listaUsu.find( {} , (err , list) => {
	res.send({Listado: list})
	})
//	res.send( listado )
	console.log(  )
})


app.get( '/saludo/:nombre' , (req , res) => {
	var name = req.params.nombre
	console.log( name )
	res.send( { "mensaje" : ` hola ${name}. ` } )
	console.log( name )
})


app.get( '/api/product/:productId' , (req , res) => {
	res.send( )
	console.log(  )
})
app.get( '/api/product/' , (req , res) => {
	res.send( 200, { "products" : [] } )
	console.log(  )
})

app.post( '/api/product' , (req , res) => {
	res.status(200).send(  { "mensaje" : "Se ha recibido el mensaje" }  )
	console.log( req.body )
})
app.put( '/api/product/:productId' , (req , res) => {
	res.send( )
	console.log(  )
})
app.delete( '/api/product/:productId' , (req , res) => {
	res.send( { "mensaje" : `borrado ${productId}. ` } )
	console.log(  )
})

var UsuarioSchema = Schema({
   user : {type : String, required : true },
   password : {type : String, required : true },
	 tipo : {type : String , required : true }
});

let listaUsu = mongoose.model('usuarios', UsuarioSchema );

const conn = mongoose.connect( 'mongodb://172.17.0.2:27017/users' , ( err , res) => {
	if (err) {
	return console.log( ` Error al conectar con la base de datos: ${err}` )
		}
	console.log( ` Conexión a la base de datos establecida ….` )


app.listen( port , () => {
console.log( ` Aplicación corriendo en localhost, puerto ${port}` )
			})


} )










/*
node index.js // para arrancar la aplicación.

para REST  get, post, put y delete
*/
