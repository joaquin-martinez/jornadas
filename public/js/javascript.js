$(()=>{

  let listUsu = new Array();
  let listEmp = new Array();
  let listJor = new Array();
  let jornada = null;

  class Turno {
    constructor(usuario , horasTur , horaIni ) {
      this.usuario = usuario;
      this.horasTur = horasTur;
      this.horaIni = horaIni;
    }
  }

  class Jornada {
    constructor( codigo , fecha , horaApertu , horasJor , turno ) {
      this.codigo = codigo;
      this.fecha = fecha;
      this.horaApertu = horaApertu ;
      this.horasJor = horasJor;
      this.turnos = [turno];
    }
  }

const getJornadas = (accion)=>{
  $.post("./jornadas" , (data)=>{
    listJor = data.listado;
    let datos = data.listado;
    console.log(datos);
    let opcionesJor = null;
    switch (accion) {
      case "inicio":
        opcionesJor = $(principal);
        opcionesJor.html("");
        break;
      default:

    }

    let cadena = ""
    datos.forEach(u => {cadena += "<div class='salPrin' >Nombre Empresa: " +
     u.codigo + " fecha: " + u.fecha +` Hora de apertura: ${u.horaApertu} Horas de apertura: ${u.horasJor} \n\r Turnos:
     Empleado: ${u.turno.usuario} Hora entrada: ` + " </div>"});
    $(principal).html(cadena);

  });
}

getJornadas("inicio");
  /*
  // Funciones de menu de botones.
  //Funciones de despliegue.
  const fusu = ()=>{
  //      $("#DropdownUsu").toggle();
  document.getElementById("DropdownUsu").classList.toggle("show");
}

const femp = ()=>{
// $("#DropdownEmp").toggle();
document.getElementById("DropdownEmp").classList.toggle("show");
}

const fjor = ()=>{
//  $("#DropdownJor").classList.toggle("show");
document.getElementById("DropdownJor").classList.toggle("show");
}

document.getElementById("menuUsu").onclick = fusu;
document.getElementById("menuEmp").onclick = femp;
document.getElementById("menuJor").onclick = fjor;

// Asignaciones de botones de menu principal.
// $("#menuUsu").on("mouseenter" , "click" , ()=>{
*/
$("#menuUsu").on( "mouseenter mouseleave" , (event)=>{
  // $("#menuUsu , #menuEmp , #menuJor").on( "mouseenter mouseleave" , (event)=>{
  // $("#BtnUsu").on( "mouseenter mouseleave click" ,false , (event)=>{


  $("#DropdownUsu").toggle();

  console.log(event.type);
  console.log(event.delegateTarget);
  //      console.log(event.delegateTarget.style.display);
  console.log(event.target );
  console.log(event.delegateTarget.id);
  //      console.log(event.delegateTarget:firs-of-type);
  //            $(event.delegateTarget div:firs-child).toggle();

  //      console.log(event.data);
  //      console.log(event.data.name);
  //  $("#DropdownUsu").show();
  //  document.getElementById("DropdownUsu").classList.toggle("show");
} );
/*
$(".modal-content").click((e)=>{
e.stopPropagation();
})
*/
// $("#menuEmp").on("mouseenter"  , ()=>{

$("#menuEmp").on("mouseenter mouseleave"  , ()=>{
  $("#DropdownEmp").toggle();
  //  $("#DropdownEmp").show();
  //  document.getElementById("DropdownUsu").classList.toggle("show");
} );
// $("#menuJor").on("mouseenter" , "click"  , ()=>{
$("#menuJor").on( "mouseenter mouseleave"  , ()=>{
  $("#DropdownJor").toggle();
  //  $("#DropdownJor").show();
  //  document.getElementById("DropdownUsu").classList.toggle("show");
} );

/*
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
*/



// Obtencion de listados.

const obtenUsuarios = ( accion )=>{
  // const obtenUsuarios = ( origen , destino)=>{
  $.post('./usuarios', (data)=>{
    //  $.post(origen, (data)=>{
    //    alert(data.Listado[0].user);
    listUsu = data.Listado;
    console.log(data);
    let datos = data.Listado;
    console.log(listUsu);
    let opcionesUsu = null; // $("\"#option" + accion + "Usu\"");
    //    let cadena = null;
    switch (accion) {
      case "Baja":
      opcionesUsu = $("#optionBajaUsu");
      $("#optionBajaUsu~option").remove();

      //        cadena = `<option value="${datos[i].user}" >${datos[i].user}<option>`
      break;
      case "Modi":
      opcionesUsu = $("#optionModiUsu");
      $("#optionModiUsu~option").remove();
      //                $(".opusu").remove();

      //        cadena = `<option value="${datos[i].user}" >${datos[i].user}<option>`

      break;

      case "Jorn":
      opcionesUsu = $("#optionAltaJorT");

      $("#optionAltaJorT~option").remove();
      //          $(".opemp").remove("option");
      //        cadena = `<option value="${datos[i].mnif}" >${datos[i].mname}<option>`
      break;


      default:

    }

    for (var i = 0; i < datos.length; i++) {
      console.log("Ponemos el dato: " + datos[i].user);
      opcionesUsu.after(`<option class="opusu" value="${datos[i].user}" >${datos[i].user}</option>`);
      console.log(datos[i].user);
    } ;

    console.log("comienza el Show");
  })
}

const obtenEmpresas = ( accion )=>{
  $.post('./empresas', (data)=>{
    console.log(data);
    let datos = data.Listado;
    listEmp = data.Listado;
    //        let cadena = null;
    console.log(listEmp);
    let opcionesempr = null; // $("\"#option" + accion + "Usu\"");
    switch (accion) {
      case "Baja":
      opcionesempr = $("#optionBajaEmp");
      $("#optionBajaEmp~option").remove();
      //        cadena = `<option value="${datos[i].nif}" >${datos[i].name}<option>`
      break;
      case "Modi":
      opcionesempr = $("#optionModiEmp");

      $("#optionModiEmp~option").remove();
      //        $(".opemp").remove("option");
      //        cadena = `<option value="${datos[i].mnif}" >${datos[i].mname}<option>`
      break;
      case "Jorn":
      opcionesempr = $("#optionAltaJorE");

      $("#optionAltaJorE~option").remove();
      //          $(".opemp").remove("option");
      //        cadena = `<option value="${datos[i].mnif}" >${datos[i].mname}<option>`
      break;

      default:

    }
    for (var i = 0; i < datos.length; i++) {
      console.log("Ponemos el dato: " + datos[i].name);
      opcionesempr.after(`<option class="opemp" value="${datos[i].name}" >${datos[i].name}</option>`);
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

  obtenEmpresas( "Jorn" );
  obtenUsuarios("Jorn");
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
  obtenEmpresas( "Baja" );
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
  formModiUsu.reset();
  obtenUsuarios( "Modi" );

  $("#modiUsuModal").toggle();
  //    e.stopPropagation();
} );



$("#modiEmp").on("click" , (e)=>{
  //  alert("bajaEmp-click");
  e.preventDefault();
  e.stopPropagation();
  obtenEmpresas( "Modi" );
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

 const guardaJornada = ()=>{

  let turno = new Turno( selectAltaJorT.value  ,
      horasTurno.value , horaIni.value  );

    jornada = new Jornada( selectAltaJorE.value ,
        fechIni.value ,horaApertu.value , horasOpen.value , turno );

        console.log(jornada);
        formaltajor.reset();
        $(jordatprop).hide();
        $(asignarTurnos).hide();
        $(asignarMasTurnos).show();


}




const guardaTurno = ()=>{
  let turno = new Turno( selectAltaJorT.value  ,
      horasTurno.value , horaIni.value );
  jornada.turnos.push(turno);
          formaltajor.reset();
          console.log(jornada);
}

$("#asignarTurnos").on("click" , false , guardaJornada );

$(asignarMasTurnos).on("click" , guardaTurno );

$(submitAltaJor).on("click" , (e)=>{
  e.preventDefault();
  if (jornada == null){
    guardaJornada();
  } else  guardaTurno();
  console.log(jornada);
  let datos = JSON.stringify(jornada);
  console.log(datos);
  $.post( "/altajor" , {datos : datos} , (data)=>{
    $(altaJorModal).hide();
    $(jordatprop).show();
    formaltajor.reset();
    jornada = null;

  });
});



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


$("#selectModiUsu").on("change" , false , (e)=>{
  //   let optionSelect= this.option[this.selectedIndex];
  //   let optionSelect= this.option[this.selectedIndex];
  // console.log(e.currentTarget.innerHTML);
  formModiUsu.reset();
  console.log(e.currentTarget.innerHTML);
  musuario.value = e.currentTarget.value ;
  let seleccionados = listUsu.filter(u => u.user == e.currentTarget.value);
  console.log(seleccionados);

  musuario.value = seleccionados[0].user;
  mclave.value = seleccionados[0].password;
  midusu.value = seleccionados[0]._id;
  console.log(seleccionados[0].tipo);
  if (seleccionados[0].tipo == "administrador") {
  //  $("#mtipo option[value='vacio']").attr("selected" , false );
    $("#mtipo option[value='administrador']").attr("selected" , true );
    $("#mtipo option[value='trabajador']").attr("selected" , false );
  } else {
    // $("#mtipo option[value='vacio']").attr("selected" , false );
    $("#mtipo option[value='trabajador']").attr("selected" , true );
    $("#mtipo option[value='administrador']").attr("selected" , false );

  }


});


$("#selectModiEmp").on("change" , false , (e)=>{
  //   let optionSelect= this.option[this.selectedIndex];
  //   let optionSelect= this.option[this.selectedIndex];

  let seleccionado = listEmp.find(u => u.nif == e.currentTarget.value);

  console.log(seleccionado);
  mempresa.value = seleccionado.name ;
  mnif.value = seleccionado.nif;
  midemp.value = seleccionados._id;

});







});
