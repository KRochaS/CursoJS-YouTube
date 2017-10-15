// Operadores Especiais

// ?:       Operador Ternário
// ,        Separa expressões avaliadas
// delete    Apaga Operando
// in        Indica se existe a propriedade especifica
// instanceof Indica se o objeto é do tipo especificado
// new        Cria uma nova instancia de Objeto
// this        Referencia ao objeto atual
// typeof      Retorna o tipo do operando
// ()          Chama uma função


var idade=23, sexo="Feminino", nacionalidade="Brasileira";
var x=(idade>=18)?"Maior de Idade": "Menor de idade";
alert(x);



// Delete serve para remover um atributo de um objeto
// ou elemento de um Array

Pessoa = {
	nome: "Fulano" // o Fulano é atributo do objeto pessoa
}
// verificar se existe o nome dentro da propriedade Objeto
alert("nome" in Pessoa);
alert("telefone" in Pessoa);
alert(Pessoa.nome);
delete Pessoa.nome;
alert(Pessoa.nome);

// verificar se idade é uma instancia do objeto number

var idade= new Number(31);
alert(idade instanceof Number);
alert(idade instanceof String);


alert(this.document.title);
function oi {
	this
}


//typeof 

alert(typeof(3)); // ele fala o tipo do dado 3 é number