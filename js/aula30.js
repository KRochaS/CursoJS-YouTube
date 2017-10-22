// Objeto Date

var data = new Date("Jan/22/2017 17:34:35");

alert(data);

var data = new Date(2017, 2);

alert(data);


var dias = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sabádo"];
var mes = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
var data = new Date("Jul/20/2014 04:30:20");

alert(data.getDate()); // retorna dia do mês 
alert(dias[data.getDay()]); // retorna dia da semana
alert(data.getFullYear()); // retorna um ano 
alert(data.getHours()); // retorna a hora
alert(data.getMilliseconds()); // retorna os milesegundos
alert(data.getMinutes()); // retorna os minutos
alert(mes[data.getMonth()]); // retorna o mês
alert(data.getSeconds()); // retorna os segundos
alert(data.getTime()); // retorna a quantidade total de milesegundos
alert(data.getTimezoneOffset()); // retorna a diferença em minutos da hora BR e a hora Universal
alert(Date.parse(data)); // retorna o número de milesegundos de uma data que vamos enformar no parametro
data.setFullYear(2015); // define o ano do objeto
alert(data); // retorna a data redefinida
alert(data.toDateString()); // converte data para String
alert(data.toLocaleDateString()); // converte data para String local

