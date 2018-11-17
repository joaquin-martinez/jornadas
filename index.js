'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path =require('path')
const session = require('express-session')
// const html = require('http')

const Empresas = require('./models/empresas')
const Jornada = require('./models/jornada')
const User = require('./models/user')


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
	var candidato = req.body
	console.log(candidato.clave)
	listaUsu.find( { user : candidato.usuario } , (err , list) => {
	// res.send({Listado: list})
	var trabajador = list
	console.log(trabajador[0])
	if(err)console.log('error en la busqueda');
	else if (trabajador[0] && candidato.usuario == trabajador[0].user ){
		console.log( list);
		res.render('entrada' , {tipo : "administrador"})
								}
	else{
		res.sendFile('/home/node/jornadas/views/index.html')
	}
	})

})

app.get( '/usuarios' , (req , res) => {

//	let listaUsu = new Lista()
	User.find( {} , (err , list) => {
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
/*
var UsuarioSchema = Schema({
   user : {type : String, required : true },
   password : {type : String, required : true },
	 tipo : {type : String , required : true }
});

let listaUsu = mongoose.model('usuarios', UsuarioSchema );
*/

// let listaUsu = User


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
