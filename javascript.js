$(()=>{

  //Funciones de despliegue.
  const fusu = ()=>{
//    $("#DropdownUsu").toggle();
//    $("#DropdownUsu").show();
      document.getElementById("DropdownUsu").classList.toggle("show");
  }

  // Asignaciones de botones de menu principal.
  $("#menuUsu").on("mouseenter" , ()=>{
//    $("#DropdownUsu").toggle();
    $("#DropdownUsu").show();
    //  document.getElementById("DropdownUsu").classList.toggle("show");
  } );

  // Get the modal
  var modal = document.getElementById('bajaUsuModal');

  // Get the button that opens the modal
  var btn = document.getElementById("bajaUsu");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
      modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }






})
