var intento=0; 
var userName="";

$('#login').click(function(){
    var user = $('#usuario').val();
    var pass = $('#pass').val();

    var uName=login(user,pass);

    $('#nombreUsuario').val(uName);

})

/**
 * 
 * @param {usuario} user 
 * @param {contraseña} pass 
 * Funcion para realizar login en la pagina web.
 */
function login(user,pass){
    
    if (user=="nmora" && pass=="123456") { 
        window.location="index.html"; 
        userName="Natalia Mora";
    } 
    if (user=="cpena" && pass=="123456") { 
        window.location="index.html";
        userName="consuelo Peña"; 
    } 
    if (user=="ipizarro" && pass=="123456") { 
        window.location="index.html"; 
        userName="Isaac Pizarro";
        } 
    if (user=="" && pass=="") { 
        window.location="errorpopup.html"; 
        userName="";
        intento++;
    } else{
        window.location="errorpopup.html";
        userName="";
        intento++;
    }
    return userName;
}

function revConexion(){

    if(userName=="Natalia Mora"||
        userName=="Consuelo Peña"||
        userName=="Isaac Pizarro"){
        //label superior izquierda aparecera nombre
        //de uusario que esta conectado.

    }else{
        //label aparecera como anonimo
    }

}

//mantener en cache datos de inicio de sesion para pasar pagina por pagina