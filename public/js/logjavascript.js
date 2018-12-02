$(()=>{
// Validacion.
$("#datosValidacion").on( "submit" , (e)=>{
  e.preventDefault();
//  let datos = new FormData(datosValidacion);
let datos = {
  usuario : $("#usuario").val(),
  clave : $("#clave").val()

};
  console.log(datos);
  $.post("./app" , datos , function(err , data){
    if(err){
      $("#salidaValidacion").html(data);

    } else {
      $("#salidaValidacion").html("Usuario o clave incorrecta.......");
    }
  });
});

});
