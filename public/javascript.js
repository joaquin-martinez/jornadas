$(()=>{

// alert("Jornadas");
$.get('./usuarios', (data)=>{
  alert(data.listado[0].user);
  console.log(data);
})

});
