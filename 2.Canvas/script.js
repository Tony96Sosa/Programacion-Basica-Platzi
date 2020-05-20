let d = document.getElementById("canvas");
let lienzo = d.getContext("2d");


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath();
}


let text = document.getElementById("lineas");
let button = document.getElementById("form__boton");
button.addEventListener("click", dibujoByClick);

function dibujoByClick(){
	let lineas = parseInt(text.value);
	for(let i=0;i<lineas;i++){
	dibujarLinea("red", 1, i*(300/lineas), (i+1)*(300/lineas), 299);
	}
}