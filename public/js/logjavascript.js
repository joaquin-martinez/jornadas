$(()=>{
// Validacion.
$("#datosValidacion").on( "submit" , (e)=>{
  e.preventDefault();
//  let datos = new FormData(datosValidacion);
let datos = {
  usuario = $("#usuario").val(),
  clave = $("#clave").val()

};
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
