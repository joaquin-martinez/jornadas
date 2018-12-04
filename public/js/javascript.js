$(()=>{

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
      let datos = data.Listado;
      console.log(datos);
      for (var i = 0; i < datos.length; i++) {
        console.log("Ponemos el dato: " + datos[i].user);
        $("#optionBajaUsu").after(`<option value="${datos[i].user}" >${datos[i].user}<option>`);
        console.log(datos[i].user);
      } ;

      console.log("comienza el Show");
    })
  }
/*
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

  $("#bajaEmp").on("click" , ()=>{
    //  alert("bajaEmp-click");
    //    obtenEmpresas();
    console.log("Click en baja empresas.");
    setTimeout(()=>{} , 5000);
    $("#bajaEmpModal").show();
    console.log("muestra modal baja empresas");
    setTimeout(()=>{} , 5000);
  } );

*/

  $("#bajaUsu").on("click" , (e)=>{
// e.stopPropagation();
    //    obtenUsuarios();

    $("#bajaUsuModal").show();
    e.stopPropagation();
  } );

  /*
  $("#bajaJor").on("click" , fdbj );

  $("#modUsu").on("click" , fdmu );
  $("#modEmp").on("click" , fdme );
  $("#modJor").on("click" , fdmj );
  */



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
  btmUsu.addEventListener("click" ,function() {
    console.log("entra");
    //  e.preventDefault();
    //  console.log("sigue");
    modalUsu.style.display = "block";
    console.log("muestra modal usuario");
  });

  btmEmp.addEventListener("click" ,function() {
    console.log("entra");
    //  e.preventDefault();
    //  console.log("sigue");
    modalEmp.style.display = "block";
    console.log("termina");
  });


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
