'use strict'

const salir = ( req , res )=>{
  req.session.destroy()
  console.log("Estamos fuera");
  res.status(200)
  res.send();
  res.redirect("../public/index.html")
}


module.exports = salir
