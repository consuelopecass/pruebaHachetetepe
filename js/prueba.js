var intento=0; 
var userName="Isaac Pizarro";
var uName="";


$('#login').click(function(){
    var user = $('#usuario').val();
    var pass = $('#pass').val();

    uName=login(user,pass);
    alert("bienvenid@ "+uName);

    //$('#nombreUsuario').val(uName);

})


/**
 * 
 * @param {usuario} user 
 * @param {contraseña} pass 
 * Funcion para realizar login en la pagina web.
 */
function login(user,pass){
    
    if (user=="ipizarro" && pass=="123456") { 
        window.location="login.html"; 
        userName="Isaac Pizarro";
    }else if (user=="nmora" && pass=="123456") { 
        window.location.href="login.html";
        userName="Natalia Mora";
    }else if (user=="cpena" && pass=="123456") { 
        window.location.href="login.html";
        userName="Consuelo Peña"; 
    }else if (user=="" && pass=="") { 
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
/**
 * 
 * Fancybox
 */

$("#btn-login").on('click',function() {

    $.fancybox.open({
        
        src  : 'login.html',
        type : 'iframe',
        opts : {
        afterShow : function( instance, current ) {
          console.info( 'done!' );
        }
      }
    });
  
  });
