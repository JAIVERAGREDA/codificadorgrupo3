function encriptar(){
    var text = document.getElementById("text-input").value.toLowerCase();//convierte de minus a mayus y vicevesar
    
    //i es para que afecte tanto mayus como minus
    //g es para toda la linea u oración
    //m es para que afecte a multiples lineas o párrafo
    var txtCifrade = text.replace(/e/igm,"enter");
    var txtCifrade = txtCifrade.replace(/o/igm,"ober");
    var txtCifrade = txtCifrade.replace(/i/igm,"imes");
    var txtCifrade = txtCifrade.replace(/a/igm,"ai");
    var txtCifrade = txtCifrade.replace(/u/igm,"ufat");

    document.getElementById("imgright").style.display = "none";
    document.getElementById("text-input").style.display = "none";
    document.getElementById("texto").innerHTML = txtCifrade;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "Inherit";
} 

function desencriptar(){
    var text = document.getElementById("text-input").value.toLowerCase();//convierte de minus a mayus y vicevesar
    
    //i es para que afecte tanto mayus como minus
    //g es para toda la linea u oración
    //m es para que afecte a multiples lineas o párrafo
    var txtCifrade = text.replace(/enter/igm,"e");
    var txtCifrade = txtCifrade.replace(/ober/igm,"o");
    var txtCifrade = txtCifrade.replace(/imes/igm,"i");
    var txtCifrade = txtCifrade.replace(/ai/igm,"a");
    var txtCifrade = txtCifrade.replace(/ufat/igm,"u");

    document.getElementById("imgright").style.display = "none";
    document.getElementById("text-input").style.display = "none";
    document.getElementById("texto").innerHTML = txtCifrade;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "Inherit";
}

function copiar(){
    var contenido = document.querySelector("#texto");
    contenido.select();
    document.execCommand("cut");
    alert("se copio");
}

 