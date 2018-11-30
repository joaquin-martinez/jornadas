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
  $("#BtnUsu").on("mouseenter" , fusu );
  $("#menuEmp").on("mouseenter" , femp);
  $("#menuJor").on("mouseenter" , fjor );

  $("#menuUsu").on("mouseleave" , fusu);
  $("#menuEmp").on("mouseleave" , femp);
  $("#menuJor").on("mouseleave" , fjor);

// Funciones de dialogo.
/*
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

*/

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
/*
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
*/


// Get the modal
var modalUsu = document.getElementById("usuModal");
var modalEmp = document.getElementById("empModal");

// Get the button that opens the modal
var btmUsu = document.getElementById("altaUsu");
var btmEmp = document.getElementById("altaEmp");

// Get the <span> element that closes the modal
var spanUsu = document.getElementsByClassName("close")[0];
var spanEmp = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal
btmUsu.addEventListener("click" ,function() {
  console.log("entra");
//  e.preventDefault();
//  console.log("sigue");
    modalUsu.style.display = "block";
    console.log("termina");
});

btmEmp.addEventListener("click" ,function() {
  console.log("entra");
//  e.preventDefault();
//  console.log("sigue");
    modalEmp.style.display = "block";
    console.log("termina");
});

// When the user clicks on <span> (x), close the modal
spanUsu.onclick = function() {
    modalUsu.style.display = "none";
}

spanEmp.onclick = function() {
    modalEmp.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalUsu || event.target == modalEmp  ) {
        event.target.style.display = "none";
    }
}














});
