
// Estruturas Condicionais

var idade=prompt("Digite tua idade: ");
if(idade>18) {
	alert("maior de idade");

} else {
	alert("menor de idade");
}



var num=prompt("Digite um número: ");
if((num%2)==0) {
	alert("Número par");

} else{
	alert("Número impar");
}



var idade=prompt("Digite sua idade: ");
if (idade<11) {
	alert("Criança");
} else if (idade>11 && idade <=16) {
	alert("Pré-adolescente");

} else if (idade> 16 && idade<=21) {
	alert("adolescente");

} else if (idade> 21 && idade<60) {
	alert("adulto");

} else {
	alert("Melhor idade");
}



var nota=prompt("Digite a nota da sua prova: ");
if (nota>=7) {
	alert("Aprovado");
} else {
	alert("Reprovado");
	if(nota==6) {
		alert("Você está em recuperação");
	}
}