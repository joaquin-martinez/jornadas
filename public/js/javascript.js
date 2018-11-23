$(()=>{

// Funciones de menu de botones.
  //Funciones de despliegue.
const fusu = ()=>{
  $("#DropdownUsu").classList.toggle("show");
  document.getElementById("DropdownUsu").classList.toggle("show");
}

const femp = ()=>{
  $("#DropdownEmp").classList.toggle("show");
  document.getElementById("DropdownEmp").classList.toggle("show");
}

const fjor = ()=>{
  $("#DropdownJor").classList.toggle("show");
  document.getElementById("DropdownJor").classList.toggle("show");
}

  // Asignaciones de botones de menu principal.
  $("#BtnUsu").onclick = fusu;
  $("#BtnEmp").onclick = femp;
  $("#BtnJor").onclick = fjor;

  $("#BtnUsu").onblur = fusu;
  $("#BtnEmp").onblur = femp;
  $("#BtnJor").onblur = fjor;

// Funciones de dialogo.

const fdau = ()=>{
  $("#dau").showModal();
  document.getElementById("dau").showModal();
}

const fdae = ()=>{
  $("#dae").showModal();
  document.getElementById("dae").showModal();
}

const fdaj = ()=>{
  $("#daj").showModal();
  document.getElementById("daj").showModal();
}



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


















});
