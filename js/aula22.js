// Estruturas para Tratamento de Exceções


// try -> vamos tentar executar este código
// catch ->  se encontrar o problema, pegue o problema (catch) e atribua 
// o erro que foi encontrado ao parametro "err".
try {
	var x=a;
	var b=x+10;
	alert("b");
} catch(err) {
	alert(err.name + " - " +err.message); // name trás o tipo de erro
	alert(err.toString());

} /*finally {

	// finally executa ocorrendo ou não um erro
}
*/


var x=prompt("Digite um número: ");
try {
	if (x<10) {
		throw "número menor que 10"; // pode lançar tanto um objeto  de erro
									// como qualquer outro objeto, elemento, ou até mesmo string
									// throw lança uma exceção
	}
	alert(x);
} catch(e) {
	alert(e);   // lançou a exceção para o catch e o catch recuperou e deu o alerta no conteúdo throw
}


var Carro = {
	marca : "Nissan",
	modelo : "350Z",
	potencia: {
		cavalos: "350",
		velocidade: "320km/h"
	}
}
with(Carro.potencia) {
	alert(cavalos);
	alert(velocidade);
}
