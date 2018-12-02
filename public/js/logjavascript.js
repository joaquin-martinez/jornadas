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
  $.post("./app" , datos , function(data){
    if(data.mensaje){
      $("#salidaValidacion").html("validacion incorrecta. intentelo de nuevo."
     + data.mensaje );

    } else {
      window.open("./app" , _self);
//      document.write(data);
///      window.reload();
    }
  });
});

});
