// Programa para verificar poltronas disponíveis

// true - disponível
// false - indisponível 

var poltronas = [false, true, false, true, true, true, false, true, false];

function carregarPoltronas() {
    var imgs = document.getElementsByTagName("img"); // recupera todos os elementos que tem uma determinada tag
    for (var i=0; i<imgs.length; i++) {
        if (poltronas[i]) {
            imgs[i].src = "../img/cadeiraverde.png"; // atribui src para cada imagem
        } else {
            imgs[i].src = "../img/cadeiravermelha.png";
        }
    }
 } 
 
 function selecionarPoltrona() {
    var imgs = document.getElementsByTagName("img");
     for (var i=0; i<poltronas.length; i++) {
        if (poltronas[i]) {
            imgs[i].src = "../img/cadeiraazul.png";

            var quer = confirm("Você quer esta poltrona?");
            if (quer) {
                break;
            } else {
                imgs[i].src = "../img/cadeiraverde.png";
            }
        }
    }
 }

 function selecionarCasal() {
    var imgs = document.getElementsByTagName("img");
    for (var i=0; i<poltronas.length; i++) {
       if (poltronas[i] && poltronas[i+1]) {
           imgs[i].src = "../img/cadeiraazul.png";
           imgs[i+1].src = "../img/cadeiraazul.png";

           var quer = confirm("Você quer estas poltrona?");
           if (quer) {
               break;
           } else {
               imgs[i].src = "../img/cadeiraverde.png";
               imgs[i+1].src = "../img/cadeiraverde.png";
           }
       }
   }
     
 }