//  Expressões Regulares

var regex = new RegExp("Javascript"); // o meu padrão é a palavra Javascript

var string = "Javascript";

alert(regex.test(string)); // verifica se há  um padrão de caracteres
// e retorna um booleano true ou false

// Modificadores

var reg = /Javascript/i; // i pede pra ignorar a letra maiúscula
var string = "Javascript";

alert(regex.test(string)); // retorna true por causa do i

alert(/javascript/.test("Javascript")); // mesma coisa a cima

alert(/javascript/.exec("Javascript")); // retorna a primeira ocorrencia de conteúdo que atende a expressão


alert(/doce/i.exec("Qual é o doce mais doce que o doce")); // encontra apenas a primeira referencia
// retorna Doce (por causa do i)

var str = "Qual é o doce mais doce que o doce?";

alert(/doce/ig.exec(str));
alert(str.match(/doce/ig)); // retorna todas as referencias que baterem com o padrão

// Metacaracteres

alert(/./.test("Pier")); // /./. encontra qualquer caracter com excesão de novas linhas

alert(/\w/.test("Pier21")); // \W - procura qualquer caracter DE A a Z DE 0 a 9 e underline

alert(/\s/.test("Pier21")); // \s - procura por ocorrencia de espaços no texto

alert(/\d/.test("Pier21")); // procura por dígitos (números)

alert(/^21/.test("Pier21")); // ^ indica ocorrencia de uma determinada informação no inicio da string
// retorna false porque ele procura por 21 no inicio da string e o 21 tá no final

alert(/21$/.test("Pier21")); // $ indica ocorrencia de uma determinada informação no final da string
// retorna true porque ele procura por 21 no no final da string e o 21 tá no final


// expressão regular para verificar se a numero no final do text

alert(/\d$/.test("Pier21"));

alert(/\d\d$/.test("Pier21")); // procura ocorrencia de dois digitos no final do texto

alert(/^\d\d\d\d-\d\d\d$/.test("70294-070")); // padrão pra verificar se o CEP está correto

// no inicio vai ter 4 digitos e no final 3 digitos com um - no meio


// QUANTIFICADORES

alert(/\d*/.test("Pier21")); // se possui ocorrencia de 0 ou mais ocorrencia de digito

alert(/\d+/.test("Pier21")); // pelo menos uma ocorrencia ou mais

alert(/\d?/.test("Pier21")); // de 0 ou uma vez

alert(/\d{2}/.test("Pier21")); // {}  a quantidade de ocorrencia que quero 2

alert(/\d{2}$/.test("Pier21")); // dois digitos no final da string
alert(/^\d{2}/.test("Pier21")); // dois digitos no inicio

alert(/^\d{5}-\d{3}$/.test("70294-070")); // ^ ->  inicio
                                        // \d  -> digito
                                        // {}  -> quantidade de digito
  //verifica se possui 5 digitos no 
     //inicio e 3 no final              // -    -> traço
                                        // \d -> digito
                                        // {} -> quantidade
                                        // $ -> final


alert(/^\d{2}\/\d{2}\/\d{4}$/.test("15/11/2017")); // para colocar a barra tem que colocar \/


alert(/^\d{2}\/\d{2}\/\d{2,4}$/.test("15/11/2017")); //d{2,4} significa que posso ter uma variação de 2 ou até 4 digitos caso a data 
//  vier 15/11/17  -> minimo 2 número e no máximo 4.


alert(/\w+@\w+\.\w{2,3}/.test("karinerocha@hotmail.com"));
// \w+ -> UM ou Mais CARACTERES (w significa caracteres)
// \. para colocar o ponto (.)
// \w{2,3} mais um ou mais caracteres com 2 ou 3 caracteres

// CARACTERES OPCIONAIS

//cau e ceu

alert(/c[ae]u/.test("ceu")); //  avalia se possui tanto letra a como letra e

alert(/\d[\d\,]*/.test("22, 21")); // avalia que no meio pode ter ou digito ou ,

// Buscas e substituições


var str = "Qual é o doce mais doce que o doce?";

alert(str.match(/doce/ig)); // retorna todas as ocorrencias 0 ou mais vezes de todo o conteudo
alert(str.replace(/doce/ig, "DOCINHO")); // onde encontrar esse padrão troca por docinho


var str = "O rato roeu a roupa do rei de Roma";

alert(str.match(/r[a-z]/ig)); // retorna todas as ocorrencias 0 ou mais vezes de todo o conteudo que começa com r e não de A a Z
alert(str.replace(/r[a-z]/ig, "XXX")); // onde encontrar esse padrão troca por XXX


var url = "www.xti.com.br/Clientes-2017.html";
            "http:www.xti.com.br/2011/clientes.jsp";
var re = /www.xti.com.br\/\w{2,}-\d{4}\.html/;

alert(re.test(url));

re = /(www.xti.com.br)\/(\w{2,})-(\d{4})\.html/; // guardando pedaços da avaliação se usa ()
// guardando em variavel $1 e $2 e $3  dependendo de quantos () tiver
alert(url.replece(re, "http://$1/$3/$2.jsp"));
