var intento=0; 
var userName="";
var uName="";

$(document).ready(function(){

    revConexion(uname);
    if(userName==""){
        $('#nombreUsuario').val("Anonimo");
    }else{
        $('#nombreUsuario').val(userNAme);
    }
})

$('#login').click(function(){
    var user = $('#usuario').val();
    var pass = $('#pass').val();

    uName=login(user,pass);

    $('#nombreUsuario').val(uName);

})


/**
 * 
 * @param {usuario} user 
 * @param {contraseña} pass 
 * Funcion para realizar login en la pagina web.
 */
function login(user,pass){
    
    if (user=="ipizarro" && pass=="123456") { 
        window.location="index.html"; 
        userName="Isaac Pizarro";
    }else if (user=="nmora" && pass=="123456") { 
        window.location.href="index.html";
        userName="Natalia Mora";
    }else if (user=="cpena" && pass=="123456") { 
        window.location.href="index.html";
        userName="consuelo Peña"; 
    }else if (user=="" && pass=="") { 
        window.location="errorpopup.html";
        userName="";
        intento++;
    } else{
        window.location="errorpopup.html";
        userName="";
        intento++;
    }
    return uName;
}

function revConexion(name){

    if(name=="ipizarro"){
        userName="Isaac Pizarro";
    }else if(name="nmora"){
        userName="Natalia Mora";
    }else if(name=="cpena"){
        userName="Consuelo Peña";
    }else{
        userName="";
    }

}

//mantener en cache datos de inicio de sesion para pasar pagina por pagina