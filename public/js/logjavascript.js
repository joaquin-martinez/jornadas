$(()=>{
// Validacion.
$("#datosValidacion").on( "submit" , (e)=>{
  e.preventDefault();
  let datos = new FormData(datosValidacion);
  console.log(datos);
  $.post("./app" , datos , function(err , data){
    if(err){
      $("#salidaValidacion").html("Error en el proceso de validación.");

    } else {
      $("#salidaValidacion").html("Usuario o clave incorrecta.......");
    }
  });
});

});
