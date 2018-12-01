'use strict'

const salir = ( req , res )=>{
  req.session.destroy()
  res.redirect("../public/index.html")
}


module.exports( salir )
