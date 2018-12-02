module.exports = ( req , res , next )=>{
  if (!session.user) {
    res.status(404).sen({mensaje : "Tiene que logarse"})
  }
}
