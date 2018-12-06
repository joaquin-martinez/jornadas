$(()=>{
// Validacion.
// $("#datosValidacion").on( "submit" , (e)=>{
datosValidacion.submit =  (e)=>{
  e.preventDefault();
//  let datos = new FormData(datosValidacion);
let datos = {
//  usuario : $("#usuario").val(),
  usuario : usuario.value,
//  clave : $("#clave").val()
  clave : clave.value

};
  console.log(datos);
  $.post("./app" , datos , function(data){
    if(data.mensaje){
      datosValidacion.reset();
//      $("#salidaValidacion").html("validacion incorrecta. Intentelo de nuevo."
      salidaValidacion.innerHTML = "validacion incorrecta. Intentelo de nuevo."
//     + data.mensaje );
     + data.mensaje ;

    } else {
//      window.open("./app" , "_self" );
//      window.location.assign("./app")
//      document.write(data);
///      window.reload();

      pp.submit();

    }
  });
});

});
