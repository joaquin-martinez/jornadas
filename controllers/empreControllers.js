'use strict'

const Empresa = require('../models/empresas')

const setEmpresa = (req , res ) => {

  let nuevaEmpresa = new Empresa()
  nuevaEmpresa.name = req.body.empresa
  nuevaEmpresa.nif = req.body.nif
  nuevaEmpresa.save((err , user) => {
    if (err) console.log(`Error al guardar la empresa.`);
    else console.log(user);

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
  console.log(`Borrada correctamente la empresa ${empresa.nif}.`);
})


}

const putEmpresa = (req , res ) => {
  let empresa = req.body
  console.log(empresa.nif )
  Empresa.findOne( { nif : empresa.nif } , (err , list) => {
  // res.send({Listado: list})
  var trabajador = list
  console.log(trabajador[0])
  if(err)console.log('error en la busqueda');
  else if (trabajador[0] && empresa.usuario == trabajador[0].user &&
  empresa.clave == trabajador[0].password ){
    console.log( list);
    console.log(trabajador[0].tipo);
    req.session.user = trabajador[0];
    res.render('entrada' , {tipo : req.session.user.tipo})
                }
  else{
    res.sendFile('/home/node/jornadas/public/index.html')
  }
})


}

const getEmpresas = (req , res ) => {

  Empresa.find( {} , (err , list) => {
    if (err) {
      console.log('Error en la recepcion de empresas.');
      throw (err)
    } else {
      res.send({Listado: list})
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
