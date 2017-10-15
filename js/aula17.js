
// Estruturas Condicionais Switch

var sexo="M";
switch (sexo) {
	case "M": 
		alert("Macho");
		break;
	case "F":
		alert("Fêmea");
		break
	default:
		alert("Indefinido");
	}


var tecnologia="Javacript";
switch(tecnologia) {
	case "Java":
	case "C++":
	case "Javacript":
	case "C#":
		alert("Linguagem de Programação");
		break;
	case "SQLServer":
	case "Postgresql":
	case "Oracle":
		alert("Banco de Dados");
		break;
	default:
		alert("Tecnologia não conhecida");

}