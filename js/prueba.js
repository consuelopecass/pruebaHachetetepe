var intento=0; 
var userName="Isaac Pizarro";
var uName="";


$('#login').click(function(){
    var user = $('#usuario').val();
    var pass = $('#pass').val();

    uName=login(user,pass);
    alert("bienvenid@ "+uName);

})

$('#logon').on('click',function() {

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
        userName="Consuelo Peña"; 
    }else if (user=="" && pass=="") { 
        window.location="errorpopup.html";
        userName="Anonimo";
        intento++;
    } else{
        window.location="errorpopup.html";
        userName="Anonimo";
        intento++;
    }
    return userName;
}

