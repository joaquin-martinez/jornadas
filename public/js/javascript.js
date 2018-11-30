$(()=>{

// Funciones de menu de botones.
  //Funciones de despliegue.
const fusu = ()=>{
//  $("#DropdownUsu").classList.toggle("show");
  document.getElementById("DropdownUsu").classList.toggle("show");
}

const femp = ()=>{
//  $("#DropdownEmp").classList.toggle("show");
  document.getElementById("DropdownEmp").classList.toggle("show");
}

const fjor = ()=>{
//  $("#DropdownJor").classList.toggle("show");
  document.getElementById("DropdownJor").classList.toggle("show");
}

  // Asignaciones de botones de menu principal.
  $("#BtnUsu").on("click" , fusu );
  $("#BtnEmp").on("click" , femp);
  $("#BtnJor").on("click" , fjor );

  $("#BtnUsu").on("blur" , fusu);
  $("#BtnEmp").on("blur" , femp);
  $("#BtnJor").on("blur" , fjor);

// Funciones de dialogo.

  const fdau = ()=>{
    $("#dau").showModal();
  //  document.getElementById("dau").showModal();
  }

  const fdae = ()=>{
  //  $("#dae").showModal();
    document.getElementById("dae").showModal();
  }

  const fdaj = ()=>{
  //  $("#daj").showModal();
    document.getElementById("daj").showModal();
  }



// Captura de submenus.
/*
  $("#altaUsu").on("click" , fdau );
  $("#altaEmp").on("click" , fdae );
  $("#altaJor").on("click" , fdaj );

  $("#bajaUsu").on("click" , fdbu );
  $("#bajaEmp").on("click" , fdbe );
  $("#bajaJor").on("click" , fdbj );

  $("#modUsu").on("click" , fdmu );
  $("#modEmp").on("click" , fdme );
  $("#modJor").on("click" , fdmj );
*/

// Obtencion de listados.

const obtenUsuarios = ()=>{
$.get('./usuarios', (data)=>{
  alert(data.Listado[0].user);
  console.log(data);
  })
}

const obtenEmpresas = ()=>{
$.get('./empresas', (data)=>{
  alert(data.Listado[0].user);
  console.log(data);
  })
}

const obtenJornadas = ()=>{
$.get('./jornadas', (data)=>{
  alert(data.Listado[0].user);
  console.log(data);
  })
}



// Get the modal
var modal = document.getElementById('BtnUsu');

// Get the button that opens the modal
var btn = document.getElementById("altaUsu");

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














});
