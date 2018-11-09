'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
// const html = require('http')


const Schema = mongoose.Schema

const app = express()
const port = process.env.PORT || 3000
const rutas = express.Router()


app.use(bodyParser.urlencoded( { extended : false } ))
app.use( bodyParser.json() )
app.use( express.static('public') )
app.use( express.static('views') )
app.use('/app' , rutas)


app.get( '/' , (req , res) => {

//	let listaUsu = new Lista()
//	listaUsu.find( {} , (err , list) => {
//	res.send({Listado: list})

	res.send('./views/index.html')




//	})
//	res.send( listado )
	console.log(  )
})
rutas.get( '/' , (req , res) => {

//	let listaUsu = new Lista()
//	listaUsu.find( {} , (err , list) => {
//	res.send({Listado: list})

	res.send('./app/saludo.html')




//	})
//	res.send( listado )
	console.log( 'ha llegado' )
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

var listaSchema = Schema({
   user: {type: String, required: true},
   password: {type: String, required: true}
});

let listaUsu = mongoose.model('usuarios', listaSchema );

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
