$(()=>{
  /*
  // Funciones de menu de botones.
  //Funciones de despliegue.
  const fusu = ()=>{
  //    $("#DropdownUsu").toggle();
  $("#DropdownUsu").show();
  //  document.getElementById("DropdownUsu").classList.toggle("show");
}

const femp = ()=>{
$("#DropdownEmp").toggle();
//  document.getElementById("DropdownEmp").classList.toggle("show");
}

const fjor = ()=>{
//  $("#DropdownJor").classList.toggle("show");
document.getElementById("DropdownJor").classList.toggle("show");
}
*/
// Asignaciones de botones de menu principal.
$("#menuUsu").on("mouseenter" , ()=>{
  //    $("#DropdownUsu").toggle();
  $("#DropdownUsu").show();
  //  document.getElementById("DropdownUsu").classList.toggle("show");
} );
/*
$(".modal-content").click((e)=>{
e.stopPropagation();
})
*/
$("#menuEmp").on("mouseenter" , ()=>{
  //    $("#DropdownUsu").toggle();
  $("#DropdownEmp").show();
  //  document.getElementById("DropdownUsu").classList.toggle("show");
} );
$("#menuJor").on("mouseenter" , ()=>{
  //    $("#DropdownUsu").toggle();
  $("#DropdownJor").show();
  //  document.getElementById("DropdownUsu").classList.toggle("show");
} );

$("#menuUsu").on("mouseleave" , ()=>{
  //    $("#DropdownUsu").toggle();
  $("#DropdownUsu").hide();
  //  document.getElementById("DropdownUsu").classList.toggle("show");
} );
$("#menuEmp").on("mouseleave" , ()=>{
  //    $("#DropdownUsu").toggle();
  $("#DropdownEmp").hide();
  //  document.getElementById("DropdownUsu").classList.toggle("show");
} );
$("#menuJor").on("mouseleave" , ()=>{
  //    $("#DropdownUsu").toggle();
  $("#DropdownJor").hide();
  //  document.getElementById("DropdownUsu").classList.toggle("show");
} );




// Obtencion de listados.

const obtenUsuarios = ( accion )=>{
// const obtenUsuarios = ( origen , destino)=>{
  $.post('./usuarios', (data)=>{
//  $.post(origen, (data)=>{
    //    alert(data.Listado[0].user);
    console.log(data);
    let datos = data.Listado;
    console.log(datos);
    let opcionesUsu = $("\"#option" + accion + "Usu\"");
    for (var i = 0; i < datos.length; i++) {
      console.log("Ponemos el dato: " + datos[i].user);
      opcionesUsu.after(`<option value="${datos[i].user}" >${datos[i].user}<option>`);
      console.log(datos[i].user);
    } ;

    console.log("comienza el Show");
  })
}

const obtenEmpresas = ()=>{
  $.post('./empresas', (data)=>{
    console.log(data);
    let datos = data.Listado;
    console.log(datos);
    for (var i = 0; i < datos.length; i++) {
      console.log("Ponemos el dato: " + datos[i].name);
      $("#optionBajaEmp").after(`<option value="${datos[i].nif}" >${datos[i].name}<option>`);
      console.log(datos[i].name);
    } ;

  })
}



$("#altaUsu").on("click" , (e)=>{
  e.preventDefault();
  e.stopPropagation();
  //        obtenUsuarios();

  $("#altaUsuModal").toggle();
  //    e.stopPropagation();
} );



$("#altaEmp").on("click" , (e)=>{
  //  alert("bajaEmp-click");
  e.preventDefault();
  e.stopPropagation();
  //          obtenEmpresas();
  console.log("Click en alta empresas.");
  //    setTimeout(()=>{} , 5000);
  $("#altaEmpModal").show();
  console.log("muestra modal baja empresas");
  //    setTimeout(()=>{} , 5000);
} );



$("#altaJor").on("click" , (e)=>{
  //  alert("bajaEmp-click");
  e.preventDefault();
  e.stopPropagation();
  //              obtenJornadas();
  console.log("Click en alta jornadas.");
  //    setTimeout(()=>{} , 5000);
  $("#altaJorModal").show();
  console.log("muestra modal alta jornadas");
  //    setTimeout(()=>{} , 5000);
} );



$("#bajaUsu").on("click" , (e)=>{
  e.preventDefault();
  e.stopPropagation();
  obtenUsuarios( "Baja" );
//  obtenUsuarios( "./usuarios" , "optionBajaUsu" );
//  setTimeout(()=>{
  $("#bajaUsuModal").toggle();
//  } , 5000 );
  //    e.stopPropagation();
} );



$("#bajaEmp").on("click" , (e)=>{
  //  alert("bajaEmp-click");
  e.preventDefault();
  e.stopPropagation();
  obtenEmpresas();
  console.log("Click en baja empresas.");
  //    setTimeout(()=>{} , 5000);
  $("#bajaEmpModal").show();
  console.log("muestra modal baja empresas");
  //    setTimeout(()=>{} , 5000);
} );


$("#bajaJor").on("click" , (e)=>{
  //  alert("bajaEmp-click");
  e.preventDefault();
  e.stopPropagation();
  //              obtenJornadas();
  console.log("Click en baja jornadas.");
  //    setTimeout(()=>{} , 5000);
  $("#bajaJorModal").show();
  console.log("muestra modal baja jornadas");
  //    setTimeout(()=>{} , 5000);
} );




$("#modiUsu").on("click" , (e)=>{
  e.preventDefault();
  e.stopPropagation();
  obtenUsuarios( "Modi" );

  $("#modiUsuModal").toggle();
  //    e.stopPropagation();
} );



$("#modiEmp").on("click" , (e)=>{
  //  alert("bajaEmp-click");
  e.preventDefault();
  e.stopPropagation();
  obtenEmpresas();
  console.log("Click en modificar empresas.");
  //    setTimeout(()=>{} , 5000);
  $("#modiEmpModal").show();
  console.log("muestra modal modificar empresas");
  //    setTimeout(()=>{} , 5000);
} );


$("#modiJor").on("click" , (e)=>{
  //  alert("bajaEmp-click");
  e.preventDefault();
  e.stopPropagation();
  //              obtenJornadas();
  console.log("Click en modificar jornadas.");
  //    setTimeout(()=>{} , 5000);
  $("#modiJorModal").show();
  console.log("muestra modal modificar jornadas");
  //    setTimeout(()=>{} , 5000);
} );



/*
$("#bajaUsuModal").on("click" , (e)=>{
e.preventDefault();
e.stopPropagation();
});

*/
/*
$("#bajaJor").on("click" , fdbj );

$("#modUsu").on("click" , fdmu );
$("#modEmp").on("click" , fdme );
$("#modJor").on("click" , fdmj );
*/


/*
// Get the modal
var modalUsu = document.getElementById("altausuModal");
var modalEmp = document.getElementById("altaempModal");

// Get the button that opens the modal
var btmUsu = document.getElementById("altaUsu");
var btmEmp = document.getElementById("altaEmp");
/*
// Get the <span> element that closes the modal
var spanUsu = document.getElementsByClassName("close")[0];
var spanEmp = document.getElementsByClassName("close")[1];
*/
// When the user clicks on the button, open the modal
/*
btmUsu.addEventListener("click" ,function() {
console.log("entra");
e.preventDefault();
e.stopPropagation();
//  console.log("sigue");
modalUsu.style.display = "block";
console.log("muestra modal usuario");
});

btmEmp.addEventListener("click" ,function() {
console.log("entra");
e.preventDefault();
e.stopPropagation();
//  console.log("sigue");
modalEmp.style.display = "block";
console.log("termina");
});

*/
$(".close").on("click" , ()=>{
  $(".modal").hide();
});
/*
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modalUsu || event.target == modalEmp
|| event.target == cierreModal ) {
console.log("fuera de ventana");
event.target.style.display = "none";
}
}
*/
$("#salgo").click(()=>{
  console.log("Peticion de salir");
  $("#cierreModal").show();
  console.log("apertura de modal salir");
});

$("#BSalir").on("click" , ()=>{
  $.post("./salir");
  window.location.assign("index.html");
})

$("#BNSalir").on("click" , ()=>{
  $(".modal").hide();
});
});
