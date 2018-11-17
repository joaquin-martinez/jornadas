'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const session = require('express-session')
// const html = require('http')

const Empresas = require('./models/empresas')
const Jornada = require('./models/jornada')
// const Usuar = require('./models/user')


const Schema = mongoose.Schema


const port = process.env.PORT || 3000
const rutas = express.Router()



/*
var UsuarioSchema = Schema({
   user : {type : String, required : true },
   password : {type : String, required : true },
	 tipo : {type : String , required : true }
});

let listaUsu = mongoose.model('usuarios', UsuarioSchema );
*/




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
