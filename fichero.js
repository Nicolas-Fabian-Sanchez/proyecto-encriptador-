/* tener en cuenta que 
a se conviete en ai
e en enter
i en imes
o en ober
u en ufat 
*/

function encriptar(){
      var texto = document.getElementById("textoDesencriptado").value.toLowerCase();/*aca le damos a la variable texto el valor de lo que hay dentro del textarea*/
      // utilizamos el metodo replace para recorer los caracteres del texto , la letra que se desea cambiar de pone entre / / :
      // la "i" se usa para que afecte tanto a mayusculas como a minusculas
      // la "g" se usa para que afecte a toda la linea u oracion
      // la "m" se usa para que afecte a multiples lineas o parrofos

      var txtsifrado = texto.replace(/e/igm,"enter");
      var txtsifrado = txtsifrado.replace(/i/igm,"imes");
      var txtsifrado = txtsifrado.replace(/o/igm,"ober");
      var txtsifrado = txtsifrado.replace(/a/igm,"ai");
      var txtsifrado = txtsifrado.replace(/u/igm,"ufat");

      document.getElementById("imgEncrip").style.display = "none" ;// aca le digo que al elemento imagen no lo muestre,hago lo mismo con el texto
      document.getElementById("Tencriptador").style.display = "none";
      document.getElementById("encriptadorTexto").innerHTML = txtsifrado; // con esto muestro en el encriptador el texto encriptado
      document.getElementById("copiar").style.display = "show";
      document.getElementById("copiar").style.display = "inherit";

}

function desencriptar(){
      var texto = document.getElementById("textoDesencriptado").value.toLowerCase();/*aca le damos a la variable texto el valor de lo que hay dentro del textarea*/
      // utilizamos el metodo replace para recorer los caracteres del texto , la letra que se desea cambiar de pone entre / / :
      // la "i" se usa para que afecte tanto a mayusculas como a minusculas
      // la "g" se usa para que afecte a toda la linea u oracion
      // la "m" se usa para que afecte a multiples lineas o parrofos

      var txtsifrado = texto.replace(/enter/igm,"e");
      var txtsifrado = txtsifrado.replace(/imes/igm,"i");
      var txtsifrado = txtsifrado.replace(/ober/igm,"o");
      var txtsifrado = txtsifrado.replace(/ai/igm,"a");
      var txtsifrado = txtsifrado.replace(/ufat/igm,"u");

      document.getElementById("imgEncrip").style.display = "none" ;// aca le digo que al elemento imagen no lo muestre,hago lo mismo con el texto
      document.getElementById("Tencriptador").style.display = "none";
      document.getElementById("encriptadorTexto").innerHTML = txtsifrado; // con esto muestro en el encriptador el texto encriptado
      document.getElementById("copiar").style.display = "show";
      document.getElementById("copiar").style.display = "inherit";

}
function copiar(){
      var copiado = document.querySelector("#encriptadorTexto");//le decimos que agarre lo que esta a dentro de texto ya encriptado 
      copiado.select();// para que lo seleccione 
      document.execCommand("copy");
      alert("El mensaje se copy")
}
