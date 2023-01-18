function encriptar()
{
    var frase =document.getElementById("textoencriptado").value.toLowerCase();
  
     // i tome mayusculas o minusculas
     // g tome en cuanto toda la linea 
     // m tome en cuenta todas las lineas

    var textoencriptado = frase.replace(/e/img, "enter");
    var textoencriptado = textoencriptado.replace(/i/img, "imes");
    var textoencriptado = textoencriptado.replace(/a/img, "ai");
    var textoencriptado = textoencriptado.replace(/o/img, "ober");
    var textoencriptado = textoencriptado.replace(/u/img, "ufat");

    document.getElementById("textodesencriptado").innerHTML = textoencriptado;
    document.getElementById("copiar").style.display ="show";
    document.getElementById("copiar").style.display ="inherit";
    
}
function desencriptar()
{
    var frase =document.getElementById("textoencriptado").value.toLowerCase();
  
     // i tome mayusculas o minusculas
     // g tome en cuanto toda la linea 
     // m tome en cuenta todas las lineas

    var textoencriptado = frase.replace(/enter/img, "e");
    var textoencriptado = textoencriptado.replace(/imes/img, "i");
    var textoencriptado = textoencriptado.replace(/ai/img, "a");
    var textoencriptado = textoencriptado.replace(/ober/img, "o");
    var textoencriptado = textoencriptado.replace(/ufat/img, "u");

    document.getElementById("textodesencriptado").innerHTML = textoencriptado;
    document.getElementById("copiar").style.display ="show";
    document.getElementById("copiar").style.display ="inherit";
    
}
function copiar(){
    var contenido = document.getElementById("textodesencriptado");   
     contenido.select();  
     document.execCommand("copy");
    
          
}

