

let nombre = prompt("Ingrese su nombre para jugar");
alert(`Hola ${nombre}.-  Tienes 30 segundos para encontrar todas las coordenadas posibles.  
Cada casilla del tablero de ajedrez está representada por una letra y un número, las cuales se van a corresponder con las coordenadas.
Los números van desde el 1 al 8  de abajo hacia arriba y las letras desde la  "a" a la "h" de izquierda a derecha, siempre en minúscula. A la hora de elegir una casilla debemos pensar primero la letra y luego el número.`)

let jugador;
let cronometro;
// let intentos;
// let nivel;
// let errores;
let counter=0;

nombre = document.getElementById("nombre").innerHTML=nombre;

const tablero = ["a8","b8","c8","d8","e8","f8","g8","h8", "a7","b7","c7","d7","e7","f7","g7","h7","a6" ,"b6","c6" ,"d6" ,"e6","f6" ,"g6", "h6","a5","b5","c5","d5","e5","f5","g5","h5", "a4" ,"b4" ,"c4" ,"d4" ,"e4" ,"f4","g4","h4","a3","b3","c3","d3","e3","f3","g3", "h3","a2","b2","c2","d2","e2","f2","g2","h2","a1","b1","c1","d1","e1","f1","g1","h1"]

let indice = Math.floor(Math.random()*tablero.length);

let encuentra2= tablero[indice];

console.log(encuentra2);

encuentra.innerHTML = encuentra2;





// indice = Math.floor(indice);



// escucha = document.getElementById("f5").addEventListener("click", function( event ) {
//   // event.target.innerHTML = "Conteo de Clicks: " + event.detail;
//   console.log(event)
// })

//DETERMINAR EL CLIC DEL USUARIO EN EL HTML
// Creamos un array vacio
let ElementosClick = new Array();
// Capturamos el click y lo pasamos a una funcion
document.onclick = captura_click;

function captura_click(e) {
// Funcion para capturar el click del raton
let HaHechoClick;
if (e == null) {
// Si hac click un elemento, lo leemos
HaHechoClick = event.srcElement.id;
} else {
// Si ha hecho click sobre un destino, lo leemos
HaHechoClick = e.target.id;
}
// Añadimos el elemento al array de elementos
ElementosClick.push(HaHechoClick);
// Una prueba con salida en consola
console.log(HaHechoClick);

//hacer andar puntaje


if (HaHechoClick===encuentra2) {
 
  indice = Math.floor(Math.random()*tablero.length);
  encuentra2= tablero[indice];
  encuentra.innerHTML = encuentra2;

  counter++;
  console.log(counter);
  counter= document.getElementById("movimiento").innerHTML=counter;

  $(document).ready(function(){

    $(".aciertos").html("Sigue así");
  }
  )

  $(".puntajerojo").css({background:"green"});



  $(".triunfo").attr("src","img/triunfo.png")


} else {
  
  $(document).ready(function(){

    $(".aciertos").html("Error!");
    $(".puntajerojo").css({background:"red"});
    $(".triunfo").attr("src","img/no.png")

  }
  
  
  )

}

}

//**********************************************

//Area de trabajo del temporizador del juego//
function volveraIniciar (){
  clearInterval(cronometro);
}





function tiempoDeJuego(){
  seg = 30;

 
    segundos = document.getElementById("segundos");
    minutos = document.getElementById("minutos");
  
  
    cronometro = setInterval(function(){
      seg --;
  
      
      inicioJuego=seg;
      mins= 0;
  
      while(inicioJuego >=60){
        mins++;
        inicioJuego-= 60;
      }
  
      segundos=document.getElementById("segundos").innerHTML = inicioJuego;
      minutos=document.getElementById("minutos").innerHTML = mins;

      if (segundos < 1) {
        window.location.href = window.location.href;
        alert(`Felicidades ${nombre}, obtuviste ${counter} puntos. Intentalo otra vez`);
        
      }
      

    },1000)
    


};

tiempoDeJuego();












