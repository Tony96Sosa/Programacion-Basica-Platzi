let g_tierra = 9.8;
let g_marte = 3.7;
let g_jupiter = 24.8;
let peso = parseInt(prompt("¿Cual es tu peso?"));
let planeta = prompt("Escriba el planeta para calcular tu peso:\n 1.Marte\n 2.Jupiter");
let peso_final;
if("marte"===(planeta.toLowerCase())){
	peso_final = parseInt(peso*g_marte/g_tierra);
}else{
	peso_final = parseInt(peso*g_jupiter/g_tierra);
}
document.write(`<h2 class="option">Tu peso en ${planeta} es ${peso_final}.</h2>`);