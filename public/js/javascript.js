$(()=>{

// alert("Jornadas");
$.get('./usuarios', (data)=>{
  alert(data.Listado[0].user);
  console.log(data);
})

});
