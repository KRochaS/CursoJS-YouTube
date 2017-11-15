// Objeto Math

// Não possui modo construtor (new Math - exemplo)
// Funções e propriedades desse metódo são estáticas acessa diretamente da classe Math

alert (2 * Math.PI * 30);

alert(Math.abs(3)); // valor absoluto

alert(Math.max(2,3.7, -5, 9)); // retorna o número maior

alert(Math.min(2, 4, -1, 0)); // retorna o menor valor

alert(Math.round(3.5)); // arredonda para o número inteiro mais próximo

alert(Math.floor(3.3)); //arredonda pra baixo

alert(Math.ceil(3.3)); // arredonda pra cima mais próximo

alert(Math.pow(2,2)); // retorna a elevação 2elevado a 2

alert(Math.sqrt(2)); // extrai raiz quadrada de 2 retorna 2

alert(Math.random()*10); // retorna numero entre 0 e 1
// se eu quiser trazer um número de 0 a 10 faz *10
// isso é utilizado para trazer um número aleatório

var n = Math.floor(Math.random()*10+1);
alert(n); // trazendo número aleatório

alert(Math.exp(3)); // eleva o numero de euler

alert(Math.log(3)); // trás o logaritmo natural

alert(Math.sin(3)); // retorna o seno do angulo que informa

alert(Math.cos(3)); // retorna o cosceno do angulo

alert(Math.tan(3)); // retorna a tangente

alert(Math.asin(0)); // retorna o valor numero em radianos

alert(Math.acos(0)); // retorna radiano representando o cosceno

alert(Math.atan(0)); // valor numererico -PI/2
alert(Math.atan2(1,1));
