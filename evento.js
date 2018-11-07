var teclas={
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

document.addEventListener("mousedown", pulsarMouse);
document.addEventListener("mouseup", soltarMouse);
document.addEventListener("mousemove", moverMouse);
var cuadro = document.getElementById("dibujo_tecla");
var papel = cuadro.getContext("2d");
var x=300, y=300;
var mose;


function pulsarMouse(evento1){
  mose=1;
  console.log(evento1);
  console.log(mose);
}

function soltarMouse(evento2){
  mose=0;
  console.log(evento2);
  console.log(mose);
}

function moverMouse(evento){
  if(mose==1){
    var dx=evento.layerX;
    var dy=evento.layerY;
    dibujarLinea("red",x,y,dx,dy,papel);
  }
  x=evento.layerX;
  y=evento.layerY;
  }





function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle=color;
  lienzo.lineWidth=2;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
