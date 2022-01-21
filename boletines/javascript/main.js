//console.log("Hola mundo desde JavaScripts");
//DOM
//querySelector/querySelectorAll
//Ejercicio 1
/*let container = document.querySelector(".container");
console.log(container);*/

//Ejercicio 2
/*let table = document.querySelector(".table");
console.log(table);*/

//Ejercicio 3
/*let links = document.querySelectorAll("a");
console.log(links);*/

//Ejercicio 4
/*let links = document.querySelectorAll("a");
links.forEach(function(link){
  console.log(link);
});*/

//Ejercicio 5
/*let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
  td.addEventListener('click', function(){
    console.log(this);
  })
});*/

//Ejercicio 6
//Obtener los elementos de la clase .close
let links = document.querySelectorAll(".close");
//recorrerlos
links.forEach(function(link){
  //Agregar un evento click a cada uno de ellos
  link.addEventListener('click', function(ev){
    ev.preventDefault();
    let content = document.querySelector(".content"); //cambio querySelectorAll por querySelector

    //Quitar las clases de animacion que ya tiene
   content.classList.remove("animate__fadeInDown");
   content.classList.remove("animate__animated");

    //Agregar clase para animar su salida animate__fadeOutDown
    content.classList.add("animate__fadeOutUp");
    content.classList.add("animate__animated");

    setTimeout(function(){
      location.href="/boletines";
    },600);


    return false;
  })
});

/*
let iconos = document.querySelectorAll("i");
iconos.forEach(function(icono){
  icono.classList.add("fa-star")
});*/
