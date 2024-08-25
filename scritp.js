const textarea = document.querySelector('.textarea');
const mensaje = document.querySelector('.mensaje');

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function botonEncriptar(){
    const textoEncriptado = encriptar(textarea.value)
    mensaje.value = textoEncriptado
    textarea.value = ''; 
    mensaje.style.backgroundImage = 'none';
}


function encriptar(stringEncriptada){
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringEncriptada = stringEncriptada.toLowerCase()
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
    }
    return stringEncriptada

}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(textarea.value)
    mensaje.value = textoEncriptado
    textarea.value = ''; 
}


function desencriptar(stringDencriptada){
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringDencriptada = stringDencriptada.toLowerCase()
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDencriptada.includes(matrizCodigo[i][1])){
            stringDencriptada = stringDencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }
    }
    return stringDencriptada

}

function botonCopiar(){
    let contenido = mensaje.value;
    navigator.clipboard.writeText(contenido).then(function() { 
        console.log('Texto copiado al portapapeles: ' + contenido);
    }).catch(function(err) {
        console.error('Error al copiar al portapapeles: ', err);
    });
}