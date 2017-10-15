
// Estruturas Para Loops de repetição FOR.

var soma=0;

for(var i=0; i<=5; i++){
	soma+=i;

}
alert(soma);



var mult=1;

for (var i=1; i<=5; i++) {
	mult*=i;
}
alert(mult);


var numeros = new Array("um", "dois", "tres");
for(var i=0; i<numeros.length; i++) { //propriedade length mostra quantos elementos tem dentro do objeto array.
	alert(numeros[i]);

}

// for in só vai para frente. 

var tecnologia = new Array ("Java", "C++", "Javascript");
for(i in tecnologia) {
	alert(tecnologia[i]);
}

var Carro = {
	marca: "Nissan",
	modelo: "350Z",
	comprimento: "3.345mm",
	velocidade: "320km/h",
	cavalos: "350"
}

for (var props in Carro) {
	alert(props + "=" + Carro[props]);
}















