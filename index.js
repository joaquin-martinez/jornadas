'use strict'

const express = require('express')
const bodyParser = requiere('body-parser')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlecoded( { extended : false } ))
app.use( bodyParser.Json() )

app.get( '/' , (req , res) => {
	res.send( " Al fin jornadas." )
	console.log(  )
})


app.get( '/saludo/:nombre' , (req , res) => {
	res.send( { "mensaje" : ` hola ${nombre}. ` } )
	console.log(  )
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


mongoose.connection( 'mongodb://http://jornadas-mongo:27017/users' , ( err , res) => {
	if (err) {
	return console.log( ` Error al conectar con la base de datos: ${err}` )
}
	console.log( ` Conexión a la base de datos establecida ….}` )


app.listen( port , () => { 
console.log( ` Aplicación corriendo en localhost, puerto ${port}` ) )
} )










/*
node index.js // para arrancar la aplicación.

para REST  get, post, put y delete
*/



