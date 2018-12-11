$(()=>{

  let listUsu = new Array();
  let listEmp = new Array();
  let listJor = new Array();
  let listJorH = new Array();
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

      let cadena = "<div class='salPrin' >";
      datos.forEach(u => {cadena +=
        "<p class='' ><span class='title'>Jornada:</span>" +
        "</p><p class='jorlis' ><span class='itmes'> Nombre Empresa: </span>" + u.codigo
        + "</p><p class='jorlis' ><span class='itmes'> Fecha: </span>" + (new Date(u.fecha)).getDate() + " - "
        + ((new Date(u.fecha)).getMonth()+1)
        + " - " + (new Date(u.fecha)).getFullYear() +
        `</p><p class='jorlis' ><span class='itmes'> Hora de apertura: </span>${u.horaApertu}
        </p><p class='jorlis' ><span class='itmes'>  Horas de jornada: </span>${u.horasJor} </p>
        <span class='turnos'> Turnos: </span>`;

        for (var i = 0; i < u.turnos.length; i++) {

          cadena += `<p = class='turlis' ><span class='itmes'>Empleado: </span>${u.turnos[i].usuario}</p>
          <p = class='turlis' ><span class='itmes'>Hora entrada: </span>${u.turnos[i].horaIni}</p>
          <p = class='turlis' ><span class='itmes'>Horas de trabajo: </span>${u.turnos[i].horasTur} <br></p>`;
        }
        cadena += "<br>";
      })
      cadena += "</div>";
      $(principal).html(cadena);
    });
  };


  getJornadas("inicio");

  const getJorHisto = (accion)=>{
    $.post("./jorhisto" , (data)=>{
      listJorH = data.listado;
      let datos = data.listado;
      console.log(datos);
      let opcionesJor = null;
      switch (accion) {
        case "baja":
        opcionesJor = $(optionBajaJor);
        $("#optionBajaJor~option").remove();
        break;
        case "modi":
        opcionesJor = $(optionModiJor);
        $("#optionModiJor~option").remove();
        break;
        default:

      }

      for (var i = 0; i < datos.length; i++) {
        console.log("Ponemos el dato: " + datos[i].codigo);
        opcionesJor.after(`<option class="opusu" value="${datos[i]._id}" >
        ${(new Date(datos[i].fecha)).getDate()} - ${((new Date(datos[i].fecha)).getMonth()+1)}
        - ${(new Date(datos[i].fecha)).getFullYear()}
        : ${datos[i].codigo}</option>`);
        console.log(datos[i].user);
      } ;


    });


  };



  $("#menuUsu").on( "mouseenter mouseleave" , (event)=>{

    $("#DropdownUsu").toggle();

    console.log(event.type);
    console.log(event.delegateTarget);
    console.log(event.target );
    console.log(event.delegateTarget.id);
  } );

  $("#menuEmp").on("mouseenter mouseleave"  , ()=>{
    $("#DropdownEmp").toggle();
  } );
  $("#menuJor").on( "mouseenter mouseleave"  , ()=>{
    $("#DropdownJor").toggle();
  } );


  const obtenUsuarios = ( accion )=>{

    $.post('./usuarios', (data)=>{
      listUsu = data.Listado;
      console.log(data);
      let datos = data.Listado;
      console.log(listUsu);
      let opcionesUsu = null;
      switch (accion) {
        case "Baja":
        opcionesUsu = $("#optionBajaUsu");
        $("#optionBajaUsu~option").remove();

        break;
        case "Modi":
        opcionesUsu = $("#optionModiUsu");
        $("#optionModiUsu~option").remove();
        break;

        case "Jorn":
        opcionesUsu = $("#optionAltaJorT");

        $("#optionAltaJorT~option").remove();
        break;
        case "mjt":
        opcionesUsu = $("#optionAltaJorTM");

        $("#optionAltaJorTM~option").remove();
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
      console.log(listEmp);
      let opcionesempr = null;
      switch (accion) {
        case "Baja":
        opcionesempr = $("#optionBajaEmp");
        $("#optionBajaEmp~option").remove();
        break;
        case "Modi":
        opcionesempr = $("#optionModiEmp");

        $("#optionModiEmp~option").remove();
        break;
        case "Jorn":
        opcionesempr = $("#optionAltaJorE");

        $("#optionAltaJorE~option").remove();
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

    $("#altaUsuModal").toggle();
  } );



  $("#altaEmp").on("click" , (e)=>{
    e.preventDefault();
    e.stopPropagation();
    console.log("Click en alta empresas.");
    $("#altaEmpModal").show();
    console.log("muestra modal baja empresas");
  } );



  $("#altaJor").on("click" , (e)=>{
    e.preventDefault();
    e.stopPropagation();

    obtenEmpresas( "Jorn" );
    obtenUsuarios("Jorn");
    console.log("Click en alta jornadas.");
    $("#altaJorModal").show();
    console.log("muestra modal alta jornadas");
  } );



  $("#bajaUsu").on("click" , (e)=>{
    e.preventDefault();
    e.stopPropagation();
    obtenUsuarios( "Baja" );
    $("#bajaUsuModal").toggle();
  } );



  $("#bajaEmp").on("click" , (e)=>{
    e.preventDefault();
    e.stopPropagation();
    obtenEmpresas( "Baja" );
    console.log("Click en baja empresas.");
    $("#bajaEmpModal").show();
    console.log("muestra modal baja empresas");
  } );


  $("#bajaJor").on("click" , (e)=>{
    e.preventDefault();
    e.stopPropagation();

    getJorHisto("baja");
    console.log("Click en baja jornadas menu.");
    $("#bajaJorModal").show();
    console.log("muestra modal baja jornadas");
  } );




  $("#modiUsu").on("click" , (e)=>{
    e.preventDefault();
    e.stopPropagation();
    formModiUsu.reset();
    obtenUsuarios( "Modi" );

    $("#modiUsuModal").toggle();

  } );



  $("#modiEmp").on("click" , (e)=>{

    e.preventDefault();
    e.stopPropagation();
    obtenEmpresas( "Modi" );
    console.log("Click en modificar empresas menu.");
    $("#modiEmpModal").show();
    console.log("muestra modal modificar empresas");
  } );


  $("#modiJor").on("click" , (e)=>{
    e.preventDefault();
    e.stopPropagation();
    getJorHisto("modi");
    console.log("Click en modificar jornadas menu.");
    frameTurnos.innerHTML="";
    $("#modiJorModal").show();
    console.log("muestra modal modificar jornadas");
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

    $("#asignarMasTurnos").on("click" , guardaTurno );

    $("#submitAltaJor").on("click" , (e)=>{
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


    $(".close").on("click" , ()=>{
      $(".modal").hide();
    });

    $("#salgo").click(()=>{
      console.log("Peticion de salir");
      $("#cierreModal").show();
      console.log("apertura de modal salir");
    });

    $("#BSalir , #salgotrab").on("click" , ()=>{
      $.post("./salir");
      window.location.assign("index.html");
    })

    $("#BNSalir").on("click" , ()=>{
      $(".modal").hide();
    });

    $("#selectModiUsu").on("change" , false , (e)=>{
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
        $("#mtipo option[value='administrador']").attr("selected" , true );
        $("#mtipo option[value='trabajador']").attr("selected" , false );
      } else {
        $("#mtipo option[value='trabajador']").attr("selected" , true );
        $("#mtipo option[value='administrador']").attr("selected" , false );

      }


    });


    $("#selectModiEmp").on("change" , false , (e)=>{

      let seleccionado = listEmp.find(u => u.nif == e.currentTarget.value);

      console.log(seleccionado);
      mempresa.value = seleccionado.name ;
      mnif.value = seleccionado.nif;
      midemp.value = seleccionados._id;

    });

    $("#selectModiJor").on("change" , (e)=>{
      frameTurnos.innerHTML="";
      indice = 0;
      encontrado = false;
      let seleccionado = listJorH.find((u ,i) =>{
        if(u._id == e.currentTarget.value){
          indice = i;
          encontrado = true;
        }
        return encontrado;
      } );
      turnosMB = seleccionado.turnos;

      turnosMB.forEach((i , indice)=>{

        let cadena =     "<input type=\"radio\" name=\"turnoSel\" value=\""
        + i._id + "\" id=\"radio" + indice + "\" >" + i.usuario + " - " + i.horaIni +
        " - " + i.horasTur + "<br>";

        $("#frameTurnos").append(cadena);
      });
    });

    $("#modiborraturn").on("click" , ()=>{
      console.log("click en borrar turno de modif");
      let turnosNuevos = turnosMB.filter((t)=>{
        console.log("id de los turnos: " + t._id);
        console.log("id seleccionado ; " + $("input[name='turnoSel']").val());
        console.log("id seleccionado ; " + $("input:checked").val());
        if(t._id != ($("input:checked").val())) return true;
        else return false;
      });
      console.log(turnosNuevos);
      console.log(listJorH[indice].turnos);
      listJorH[indice].turnos = turnosNuevos
      console.log(listJorH[indice].turnos);
      let datos = JSON.stringify(listJorH[indice]);
      console.log(datos);
      $.post( "/modijor" , {datos : datos} , (data)=>{
        $(modiJorModal).hide();
        $(jordatprop).show();
        formaltajor.reset();
        listJorH = null;
        window.reload();
      });
    });


    $("#modicreaturn").on("click" , ()=>{

      console.log("click en crear turno de modif");
      obtenUsuarios("mjt");
      $("#htmlmt").show()
      $(bmjt).hide()
    });

    $("#selectAltaJorTM").on("change" , (e)=>{
      untj = e.currentTarget.value;
      console.log(untj);

    });


    $("#Bmodicreaturn").on("click" , (e)=>{
      nuevoturn = new Turno(untj , horasTurnoM.value , horaIniM.value);
      listJorH[indice].turnos.push(nuevoturn);
      let datos = JSON.stringify(listJorH[indice]);
      console.log(datos);
      $.post( "/modijor" , {datos : datos} , (data)=>{
        $(modiJorModal).hide();
        $(jordatprop).show();
        formaltajor.reset();
        listJorH = null;
        $("#htmlmt").hide();
        $(bmjt).show();
        window.reload();
      });

    });

  });
