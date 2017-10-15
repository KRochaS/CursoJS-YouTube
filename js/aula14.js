// Calcular IMC 

// Fórmula IMC= peso/altura²  IMC=peso/altura*altura

function calcularIMC() {
	var formulario = document.getElementById("formulario");

	var kilos = parseInt(formulario.kilos.value); // parseInt TRANSFORMA UM VALOR STRING EM INTEIRO e essa linha recupera o valor digitado no formulário

	var metros = +formulario.metros.value; // Usando operador unário para fazer a conversão de String para Inteiro

	var centimetros = +formulario.centimetros.value;
 
 	var altura = ((metros*100)+centimetros)/100;
 	var imc=kilos/(altura*altura);


 	formulario.imc.value=imc.toFixed(2);

 	if(imc<20) {
 		alert("Abaixo do Peso");

 	} else if (imc>20 && imc<=25) {
 		alert("Peso ideal");
 	} else if(imc >25 && imc <=30) {
 		alert("Sobrepeso")
 	} else if(imc>30 && imc <=35) {
 		alert("Opesidade Moderada");

 	} else if(imc>30 && imc <=40) {
 		alert("Obsidade Severa");
 	} else if (imc>40 && imc<=50) {
 		alert("Obsidade Mórbida");

 	} else{
 		alert("Super Obsidade");
 	}
}


function anoNasc(){
var formulario=document.getElementById("formulario");
var name= formulario.name.value;

var idade= +formulario.idade.value;

var anoatual= +formulario.anoatual.value;

var anonasc=anoatual-idade;

formulario.anonasc.value=anonasc;
 
}