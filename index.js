$(function () {
    $("#textOk").hide();
    $("#login").click(function () {
        var email = $("#validEmail").val();
        var password = $("#validPassword").val();
        
        if (email == 'admin@nw.com' && password == '12345**') {     
            alert("ถูกแล้ว");
        }
    });
});