// Objeto Array Indexado

var paises = ["Brasil", "Uruguai", "Argentina", "Brasil"]; // sintaxe literal

console.log(paises.length); // Imprime quantos elementos possui o array
// 3 

for (var i=0; i<paises.length; i++) { // Imprime todos os elementos que o array possui
    console.log(paises[i]);
}

console.log(paises.indexOf("Uruguai")); // trás a posição da onde se encontra a string no array
// 1

console.log(paises.lastIndexOf("Brasil")); // trás a posição da última ocorrência da string no array
// 3 

alert(paises.reverse()); // Inverter elementos no array

console.log(paises.sort()); // ordena em ordem alfabetica

console.log(paises.join(" ")); // Altera o separador padrão do array
// antes -> Brasil, Uruguai, Argentina, Brasil 
// com join  -> Brasil Uruguai Argentina Brasil

console.log(paises.concat("EUA", "Rússia", "China")); // Concat -> concatena nossos elementos ao array

var frutas = ["Laranja", "Morango", "Limão", "Banana"];

alert(frutas.slice(1)); // retorna o array a partir do indice adicionado no ()
// Morango, Limão, Banana

alert(frutas.slice(1, 3)); // retorna do índice até o próximo indíce requerido
// Morango, limão

alert(frutas.splice(1,2,"Abacate", "Pera"));// remove e adiciona elementos no lugar
                                           // splice retorna os elementos que foram removidos do array
alert(frutas); // retornou o array com os itens substituidos
// Laranja, Abacate, Pera, Banana


// FILAS FIFO (First In, First Out)

var pessoas = ["Ricardo", "Aluisio", "Sandra", "Beatriz", "Eduardo"];

alert(pessoas.push("Luis")); // Adiciona um novo item no array e retorna o tamanho do array depois de inserir
alert(pessoas); // retorna a fila de pessoas com a nova adicionada

alert(pessoas.shift()); //  remove da fila o primeiro elemento da fila
alert(pessoas); // retorna o elemento que foi removido

alert(pessoas.pop()) // remove o ultimo elemento da fila
alert(pessoas); // retorna a pessoa que foi removida

alert(pessoas.unshift()); // adiciona elemento no inicio da fila
alert(pessoas); // retorna o elemento que foi adicionado