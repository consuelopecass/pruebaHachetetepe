/**
 * 
 * @param {usuario} user 
 * @param {contraseña} pass 
 * Funcion para realizar login en la pagina web.
 */
function login(user,pass){

    var done=0; 
    
    if (user=="nmora" && pass=="123456") { 
    window.location="TU_PAGINA_WEB.HTML"; 
    } 
    if (user=="cpena" && pass=="123456") { 
    window.location="TU_PAGINA_WEB.HTML"; 
    } 
    if (user=="ipizarro" && pass=="123456") { 
        window.location="TU_PAGINA_WEB.HTML"; 
        } 
    if (user=="" && pass=="") { 
    window.location="errorpopup.html"; 
    } 
 



}