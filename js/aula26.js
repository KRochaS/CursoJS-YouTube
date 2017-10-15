// Objeto String

var x = "texto dentro de aspas";
alert(x);

// objeto string

var x = new String("texto dentro de aspas");
alert(x.length); // retorna o tamanho de caracteres 21
alert(x.charAt(2)); // retorna um caracter numa posição especifica 
// teXto dentro de aspas (retorna X)
//   2
alert(x.charCodeAt(2)); // charCodeAt retorna o valor unicode da palavra X
// 120

alert(String.fromCharCode(120)); // metódo estático acessar diretamente da classe String
// retorna a string do unicode 120 
// X

alert(x.indexOf("dentro")); // retorna onde começa a string 
// 6

var texto = new String("texto dentro de texto de aspas"); 
alert(texto.lastIndexOf("texto")); // retorna a última ocorrencia de uma palavra na string
// posição 16 aparece a segunda ocorrencia a palavra "texto"

var a = new String("texto dentro de aspas");
var re = /[a-e]/;
alert(x.match(re)); 
// retorna todas as letras de a até e 
// 1 

alert(a.replace("texto","txt")); // onde encontrar a palavra texto trocara para txt (altera a primeira ocorrencia)
// txt dentro de aspas

alert(a.substring(8, 5)); // corta a string com base em dois parametros começa no 5 e trás até o 8
// retorna a palavra de

alert(a.substr(0, 8)) // começa com o indice inicial que é 0 e trás mais 8 caracteres dali pra frente
// retorna a palavra "texto de"

alert(a.slice(5, 8)); // mesmo substring mas mais rigoroso se errar a posição ele não trás nada 


var b = new String("texto, dentro, de aspas");
alert(b.split(",")[1]); // separa por virgula criando um array (corta uma string com base no separador)

