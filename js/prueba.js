var done=0; 

/**
 * 
 * @param {usuario} user 
 * @param {contraseña} pass 
 * Funcion para realizar login en la pagina web.
 */
function login(user,pass){
    
    if (user=="nmora" && pass=="123456") { 
        window.location="index.html"; 
    } 
    if (user=="cpena" && pass=="123456") { 
        window.location="index.html"; 
    } 
    if (user=="ipizarro" && pass=="123456") { 
        window.location="index.html"; 
        } 
    if (user=="" && pass=="") { 
        window.location="errorpopup.html"; 
        done++;
    } else{
        window.location="errorpopup.html";
        done++;
    }
}

function revConexion(){

    //funcion para revisar si esta conectado y cambiar el boton a cerrar sesion o Login

}

//mantener en cache datos de inicio de sesion para pasar pagina por pagina