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
  res.send('./public/index.html')
  console.log( "carga index.html" )
})

api.post('/recarga' , (req ,res)=>{
  res.render('entrada' , {tipo : "administrador" , user : "joaquin"})
//  res.render('entrada' , {tipo : req.session.user.tipo , user : req.session.user.user})
})
api.get('/recarga' , (req ,res)=>{
  res.render('entrada' , {tipo : "administrador" , user : "joaquin"})
//  res.render('entrada' , {tipo : req.session.user.tipo , user : req.session.user.user})
})

api.post('/app' , userCtr.validateUser)
api.post('/usuario' , userCtr.getUser)
api.post('/modusupas' , userCtr.putUserClave)
api.post('/delusu' , userCtr.deleteUser)
api.post( '/usuarios' , userCtr.getUsers )

api.post('/delemp' , emprCtr.deleteEmpresa)

api.post( '/altausu' , logado , userCtr.setUser )
api.post( '/altaemp' , emprCtr.setEmpresa )

api.post( '/salir' , salirCtr )


module.exports = api
