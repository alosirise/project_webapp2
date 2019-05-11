$(function () {
    $("#textOk").hide();
    $("#login").click(function () {
        var email = $("#validEmail").val();
        var password = $("#validPassword").val();
        
        if (email == 'admin@nw.com' && password == '12345**') {     
          window.location.href=("dashboard.html");
        
    
        
        }else{
               alert("Email or password is wrong \r\nPlease check your id or password ! ");
        }
    });
});