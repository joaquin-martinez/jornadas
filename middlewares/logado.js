module.exports = ( req , res , next )=>{
  if (!req.session.user) {
    res.status(404).sen({mensaje : "Tiene que logarse"})
  }
}
