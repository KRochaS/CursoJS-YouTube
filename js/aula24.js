// Objeto Boolean

// Recebe true e false de tipo de dados primitivo

var b = true;
alert(b);


// variável com tipo de dado Objeto

var b = new Boolean(true); // new Boolean sintaxe para criar um booleano do tipo objeto
alert(typeof(b)); // imprime o tipo de dado que está apresentando
// object
// deixa de ser um tipo primitivo como no primeiro exemplo.

alert(b instanceof Boolean); // b é uma instancia do tipo Boolean

// formas de criar um Booleano objeto

var b = new Boolean(); // sem passar nenhum tipo de parametro
alert(b); // retorna booleano de valor false

var b = new Boolean(1); // criar os tipos booleano passando um número 0 para falso e 1 para verdadeiro
alert(b);

var b = new Boolean(false); // criar um Booleano com o tipo primitivo

var b = new Boolean(""); // criar um booleano com uma string vazia
alert(b); // retorna false

// criar um booleano string não vazia

var b = new Boolean("alguma coisa");
alert(b); // retorna um booleano verdadeiro

var b = new Boolean("false");
alert(b); // retorna um um valor true

// Zero, null, NaN e string vazia são inerentemente false
// todo o resto é ineretemente true


// Método toString e valueOf

var b = new Boolean(0);
alert(b.valueOf()); // aplicado em boolean retorna o valor do tipo primitivo (true ou false)

var b = new Boolean(0);
alert(b.toString()); // retorna o valor do booleano (true ou false) só que do tipo string não primitivo
