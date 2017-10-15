// Objeto Number

var n = 12; 
alert(typeof(n)); // tipo primitivo number


var n = new Number(12);
alert(typeof(n)); // retorna um objeto, declarando assim deixa de ser um tipo primitivo

var n = new Number(12);
alert(Number.MAX_VALUE); // retorna o maior número Javascript
alert(Number.MIN_VALUE); // menor número que Javascript pode tratar
alert(Number.NaN); // retorna a própria referencia a um Not a Number
alert(Number.NEGATIVE_INFINITY) // negativo infinito retorna -infinity
alert(Number.POSITIVE_INFINITY) // positivo infinito retorna infinity

var n = new Number(120.35123);
alert(n.toFixed(2)); // toFixed retorna o número de casa decimais
// 120.35

alert(n.toPrecision(6)); // retorna a precisão dos números
// 120.251 

alert(n.toExponential()) // converte um número para notação cientifica 
// 1.204e+2