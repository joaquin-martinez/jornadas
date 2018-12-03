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




  // Obtencion de listados.

  const obtenUsuarios = ()=>{
  $.post('./usuarios', (data)=>{
//    alert(data.Listado[0].user);
    console.log(data);
//    return data;
let datos = data.Listado;
//  data.forEach(()=>{
console.log(datos);
//  for (var dato in datos) {
    for (var i = 0; i < datos.length; i++) {

//    let dato = dat;
console.log("Ponemos el dato: " + datos[i].user);
$("#optionBajaUsu").after(`<option value="${datos[i].user}" >${datos[i].user}<option>`);
console.log(datos[i].user);
} ;

// setTimeout(()=>{
  console.log("comienza el Show");
// $("#bajaUsuModal").show();
// }, 1000);

    })
  }

  const obtenEmpresas = ()=>{
  $.post('./empresas', (data)=>{
    console.log(data);
    let datos = data.Listado;
    console.log(datos);
        for (var i = 0; i < datos.length; i++) {
    console.log("Ponemos el dato: " + datos[i].name);
    $("#optionBajaUsu").after(`<option value="${datos[i].nif}" >${datos[i].name}<option>`);
    console.log(datos[i].name);
    } ;

    })
  }
/*
  const obtenJornadas = ()=>{
  $.get('./jornadas', (data)=>{
    alert(data.Listado[0].user);
    console.log(data);
    })
  }
  */

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
*/
  $("#bajaEmp").on("click" , ()=>{
//    let mostrarMenuBaja = new Promise();
//    mostrarMenuBaja = ()=>{
    obtenEmpresas();

$("#bajaEmpModal").show();

  } );



  $("#bajaUsu").on("click" , ()=>{
//    let mostrarMenuBaja = new Promise();
//    mostrarMenuBaja = ()=>{
    obtenUsuarios();

$("#bajaUsuModal").show();

  } );

  /*
  $("#bajaJor").on("click" , fdbj );

  $("#modUsu").on("click" , fdmu );
  $("#modEmp").on("click" , fdme );
  $("#modJor").on("click" , fdmj );
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
/*
spanUsu.onclick = function() {
    modalUsu.style.display = "none";
}

spanEmp.onclick = function() {
    modalEmp.style.display = "none";
}
*/

$(".close").on("click" , ()=>{
  $(".modal").hide();
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalUsu || event.target == modalEmp
    || event.target == cierreModal ) {
        event.target.style.display = "none";
    }
}

$("#salgo").click(()=>{
  console.log("Peticion de salir");
  $("#cierreModal").show();
  console.log("apertura de modal salir");
});

$("#BSalir").on("click" , ()=>{
//  fetch("./salir");
  $.post("./salir");
  window.location.assign("index.html");
})

$("#BNSalir").on("click" , ()=>{
    $(".modal").hide();
});








});
