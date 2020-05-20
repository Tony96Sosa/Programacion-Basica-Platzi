const d = document.getElementById("canvas");
const lienzo = d.getContext("2d");


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath();
}
function dibujoLineaByClick(){
	let lineas = parseInt(text.value);
	for(let i=0;i<lineas;i++){
	dibujarLinea("red", 1, i*(300/lineas), (i+1)*(300/lineas), 299);
	dibujarLinea("red", i*(300/lineas), 1, 299, (i+1)*(300/lineas));
	dibujarLinea("red", 299-(i*(300/lineas)),1,1,(i+1)*(300/lineas));
	dibujarLinea("red", (i+1)*(300/lineas), 299,299,299-(i*(300/lineas)));
	}
}


const text = document.getElementById("lineas");
const button = document.getElementById("form__boton");
button.addEventListener("click", dibujoLineaByClick);


function dibujarOrvita(rot){
	lienzo.beginPath();
	lienzo.strokeStyle = "blue";
	lienzo.ellipse(153, 152, 20, 110, rot, 0, 2 * Math.PI);
	lienzo.stroke();
	lienzo.closePath();
}

let text2 = document.getElementById("orvitas");
let button2 = document.getElementById("form__boton2");
button2.addEventListener("click", dibujoOrvitaByClick);
function dibujoOrvitaByClick(){
	let orvitas = parseInt(text2.value);
	for(let i=0;i<= Math.PI;i+=(Math.PI / orvitas)){
		dibujarOrvita(i)
	}
}

const color = document.getElementById("color");