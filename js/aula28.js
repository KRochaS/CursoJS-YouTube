// Objeto Array Associativo e Multidimensional

// Array Multidimensional

// Possível adicionar um array dentro de um array
// ou um array dentro da posição de um array 

var pessoas = [];

pessoas[0] = ["Ricardo", "M"];
// array na posição 0 recebe um array com nome e sexo da pessoa. 

alert(pessoas[0][1]);
// acessa a primeira posição do array e a primeira posição do array que está
// dentro do primeiro array 

var pessoas = [ 
    ["Ricardo", "M"],  // posição 0,0 retorna "Ricardo" posição 0,1 retorna "M"
    ["Sandra", "F"]    // posição 1,0 retona "Sandra" posição 1,1 retorna "F"
    
]; // array com mais de uma dimensão


// Array Associativo
// É referenciado não pelo índice número, mas por um nome, para cada dado do array atribui um nome String

var pessoa = {nome: "Beatriz", cidade: "Brasília"} // declaração de array associativo se da com chaves

alert(pessoa.nome); // alert(pessoa["nome"]);


// Funções


// EVERY


var frutas = ["cupuaçú", "banana", "mamão", "pêra", "laranja"];

// every - utilizada se todos os elementos do array são de um determinado tipo.

function todos(elem, ind, obj) { // função recebe elemento, index, e objeto (sempre)
    return (typeof elem == "string"); // verifica se todos os elementos são do tipo string
}

alert(frutas.every(todos)); // se um elemento não for do tipo string a função every deve retornar o valor falso

// SOME

// verifica se pelo menos um elemento satisfaz a avaliação

var frutas = ["Laranja", "uva", "pessego", 123];

function all(elem, ind, obj) {
    return (typeof elem == "number"); // verifica se pelo menos um elemento é do tipo number
}

alert(frutas.some(all)); // retorna true, pois há pelo menos um elemento number no array


// FILTER

// Filter - Filtra o array com base na função e retorna o array resultante desse filtro


function all(elem, ind, obj) {
    return (elem.indexOf("an") > 0) // verifica as palavras que tem an dentro delas
                                    // se possui mais de 0 palavras com an dentro.
}

alert(frutas.filter(all)); // retorna as palavras que tem an dentro delas


// MAP
// utilizado para alterar todos os elementos do array

function all(elem, ind, obj) {
    return (elem = elem.toUpperCase); // elemento recebe elemento com letra maíuscula
}

alert(frutas.map(all)); // retorna os elementos modificados