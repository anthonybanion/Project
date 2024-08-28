    //Se crea 2 constantes que seleccionen los textarea del documento HTML
const txtMensaje = document.querySelector('#txtMensajeEncript');
const txtResultado = document.querySelector('#txtResultado');

    //Se crea una constante con una matriz que contenga el sistema de encriptación
const  encriptarCadena = [
    ["e", "enter"], //índice 0
    ["i", "imes"], //índice 1
    ["a", "ai"], //índice 2
    ["o", "ober"], //índice 3
    ["u", "ufat"], //índice 4
];

/*  LA FUNCIÓN DE VALIDACIÓN DE CARACTERES Y DE OCULTAR LOS ELEMENTOS SOLICITADOS
    POR EL MOMENTO NO ESTA DISPONIBLE. SE PROSEGUIRA CON LOS CAMBIOS A FUTURO PARA QUE FUNCIONEN
start();

function start(){
    document.getElementsByClassName('condiciones')[0].style.display = 'none';
    document.getElementById('copy').style.display = 'none';
    return;
}

function validarCondition(){
    document.querySelector('#txtMensajeEncript');
    const txtUser = document.getElementById('txtMensajeEncript').value;
    if (
        /[a-z]/.test(txtUser) != true || 
        /[!-+]/.test(txtUser) != false ||
        /[0-9]/.test(txtUser) != false || 
        /[~¨´*#&^{¬|°}`'.:-_]/.test(txtUser) != false 
    ){
        document.querySelector('.condiciones').style.display = 'list-item';
    } else {
        document.getElementById('copy').removeAttribute=('none');
        start();
        document.getElementById('copy').style.display = 'inline';  
        return false;
    }    
} 
*/ 

    //Se define una función para el botón Encriptar.
    //Dentro de ella se declara una constante que almacene el valor del textarea txtMensaje
function btnEncriptar(){
    const txt = encrypt(txtMensaje.value);
    txtResultado.value = txt;
    txtMensaje.value = ""; //Esta línea limpia el campo de texto
    txtResultado.style.backgroundImage = "none"; //Esta línea oculta la imagen de fondo del textarea txtResultado
}

    //Ésta función utiliza el array de la constante encriptarCadena para realizar la encriptación
function encrypt(fraseEncriptada){
    fraseEncriptada = fraseEncriptada.toLowerCase() /*Para solucionar el ingreso de mayúsculas, convertimos 
                                                        toda mayúscula en una minúscula */
    for(let i = 0; i < encriptarCadena.length; i++){
        if(fraseEncriptada.includes(encriptarCadena[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                encriptarCadena[i][0],
                encriptarCadena[i][1],
            )
        }
    }
    return fraseEncriptada;
}

    //Se define una función para el botón Desencriptar.
    //Dentro de ella se declara una constante que almacene el valor del textarea txtResultado
function btnDesencriptar(){
    const txt = desencrypt(txtResultado.value);
    txtResultado.value = txt;
    txtMensaje.value = "";
    txtResultado.style.backgroundImage = "none";
}

    //Ésta función utiliza el array de la constante encriptarCadena para realizar la desencriptación
    //Básicamente es la misma función de encriptación pero con los valores del 'for' a la inversa.
function desencrypt(fraseEncriptada){
    fraseEncriptada = fraseEncriptada.toLowerCase()
    for(let i = 0; i < encriptarCadena.length; i++){
        if(fraseEncriptada.includes(encriptarCadena[i][1])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                encriptarCadena[i][1],
                encriptarCadena[i][0],
            )
        }
    }
    return fraseEncriptada;
}

    //Se define una función para el botón copiar
    /*A su vez, el botón Copiar pega el contenido del portapapeles 
    en el textarea txtMensaje para mayor comodidad del usuario*/
var btnCopiar = document.querySelector(".Copiar");
var txtCopy = document.querySelector(".txtOutput");
btnCopiar.addEventListener("click",function btnCopiar() {
        txtCopy.focus();
        document.execCommand("selectAll");
        document.execCommand("copy");
        var txtResultado = txtCopy.value; //Se declara una variable local y se le asigna el texto copiado
        txtMensaje.value = txtResultado; /*Se le asigna a la constante txtMensaje declarada en el principio del código, el texto que fue almacenado en la variable local txtResultado. De ésta manera es como se logra mostrar el texto en el textarea txtMensaje */
});
