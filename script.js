const campo_texto=document.querySelector(".campo-texto");
const campo_encriptado=document.querySelector(".campo-mensaje");

let matrizCodigo=[
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o", "ober"],
    ["u","ufat"],
];

function btnEncriptar(){
    const texto= encriptar(campo_texto.value);
    campo_encriptado.value=texto;
    campo_texto.value="";
    campo_encriptado.style.backgroundImage="none";
    
}
function btnDesencriptar(){
    const texto= desencriptar(campo_texto.value);
    campo_encriptado.value=texto;
    campo_texto.value="";
    campo_encriptado.style.backgroundImage="/Imagenes/Muñeco.png";
    document.getElementsByClassName("copiar")[0].style.display="block";
   
}
function btnCopiar(){
    const texto=campo_encriptado.value;
    navigator.clipboard.writeText(texto);

}
function desencriptar(fraseEncriptada){
    for(let i = 0; i <matrizCodigo.length;i++){
        if(fraseEncriptada.includes(matrizCodigo[i][1])){
            fraseEncriptada=fraseEncriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }

    }
    return fraseEncriptada;

}
function encriptar(fraseEncriptada){
    fraseEncriptada=fraseEncriptada.toLowerCase();
    for(let i = 0; i <matrizCodigo.length;i++){
        if(fraseEncriptada.includes(matrizCodigo[i][0])){
            fraseEncriptada=fraseEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }

    }
    return fraseEncriptada;
}
