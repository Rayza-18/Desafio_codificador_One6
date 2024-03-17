var textAarea = document.querySelector("#textArea");
var apaga = document.querySelector("#ladoDireito");


function criptografar(){
  var texto = textArea.value;

var resultadoCripto = texto.replace(/a/g, "ai").replace(/e/g, "enter").replace(/i/g, "imes").replace(/o/g, "ober").replace(/u/g, "ufat");
console.log(resultadoCripto);
document.getElementById('ladoDireito').innerHTML = '<textarea readonly id="textArea">' + resultadoCripto +
  '</textearea>' + '<button class="button_copiar" id="button_copiar" onclick="copiar()">Copia</button>'
}

function descriptografar(){
  var texto = textArea.value;

  var resultDescripto = texto.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");
  console.log(resultDescripto);
document.getElementById('ladoDireito').innerHTML = '<textarea readonly id="textArea">' + resultDescripto + 
  '</textarea>' + '<button class="button_copiar" id="button_copiar" onclick="copiar()">Copiar</button>'

}

function copiar() {
  var textoCop = document.getElementById('textArea');

  textoCop.select();
  document.execCommand('copy');
  alert("Texto copiado.");
}  
