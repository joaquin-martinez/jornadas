module.exports = ( req , res , next )=>{
/*
  if (!req.session.user) {
    res.status(404).send({mensaje : "Tiene que logarse"})
  }else {
    */
        next();
//  }
}
