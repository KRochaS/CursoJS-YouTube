//  Expressões Regulares
 //validação e formatação

 function validar() {
     var formulario = document.getElementById('formulario');

     var cpf = formulario.cpf;
     var email = formulario.email;




    var re_cpf = /^([\d]{3})([\d]{3})([\d]{3})([\d]{2})$/;

    var re_email = /^([\w-]+(\.[\w-]+)*)@(( [\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(\.[a-z]{2})?)$/i;

    if (re_cpf.test(cpf.value)) {
        cpf.value = cpf.value.replace(re_cpf, "$1.$2.$3-$4");

    } else {
        alert("CPF inválido, deve ter apenas 11 números, sem ponto ou traço");
    }


    if(!re_email.test(email.value)) {
        alert("Email inválido");
    }
}

