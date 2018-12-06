'use strict'

const Empresa = require('../models/empresas')

const setEmpresa = (req , res ) => {

  let nuevaEmpresa = new Empresa()
  nuevaEmpresa.name = req.body.empresa
  nuevaEmpresa.nif = req.body.nif
  nuevaEmpresa.save((err , user) => {
    if (err){
      console.log(`Error al guardar la empresa ${req.body.empresa}.`);
      console.log(err);
//      res.status(500).redirect("/app")
    } else {
//      res.status(200).redirect("/app")
            console.log(`Alta correcta de la empresa: ${req.body.empresa}.`);
        res.status(200).redirect("../recarga")
}
  })

}

const getEmpresa = (req , res ) => {
  let empresa = req.body
  console.log(empresa.nif )
  Empresa.findOne( { nif : empresa.nif } , (err , data) => {
  // res.send({Listado: list})
  var empresabd = data
  console.log(data)
  if(err)console.log('error en la busqueda');
  else res.send(empresabd)

/*
  if (empresasbd[0] && empresa.usuario == empresasbd[0].user &&
  empresa.clave == empresasbd[0].password ){
    console.log( list);
    console.log(empresasbd[0].tipo);
    req.session.user = empresasbd[0];
    res.render('entrada' , {tipo : req.session.user.tipo})
                }
  else{
    res.sendFile('/home/node/jornadas/public/index.html')
  }
  */
})


}

const deleteEmpresa = (req , res ) => {

  console.log(`borrando el registro ${req.body.nif}`);
  let empresa = req.body
  console.log(empresa.nif )
  Empresa.remove( { nif : empresa.nif } , (err) => {
  if (err) {
    console.log(`Error, no se pudo Borrar correctamente la empresa ${empresa.nif}.`);
//    res.status(500).redirect("/app")
  } else {
//    res.status(200).redirect("/app")
      console.log(`Borrada correctamente la empresa ${empresa.nif}.`);
        res.status(200).redirect("../recarga")
  }


})


}

const putEmpresa = (req , res ) => {
  let empresa = req.body
  console.log(empresa.mnif )
  Empresa.findOneAndUpdate( { nif : empresa.mnif } , { name : empresa.mempresa } , (err, raw)=>{
   if (err) return handleError(err);
   console.log('The raw response from Mongo was ', raw);
           res.status(200).redirect("../recarga")
})


}

const getEmpresas = (req , res ) => {

  Empresa.find( {} , (err , list) => {
    if (err) {
      console.log('Error en la recepcion de empresas.');
      throw (err)
    } else {
      res.send({Listado: list})
      console.log('enviadas empresas.');
    }

  })

}


module.exports = {
  setEmpresa ,
  getEmpresa ,
  deleteEmpresa ,
  putEmpresa ,
  getEmpresas
}
