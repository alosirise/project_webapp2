$(function () {

    $.get("data/products.json", function (data) {
        var x = 0;
        for (var i = 0; i < data.length; i++) {
            x = x + 1;
        }
        $("#dashproducts").append(x);

    });
        
 
    $.get("data/customers.json", function (data) {
        
        var x = 0;
        for (var i = 0; i < (data.customerJson).length; i++) {
            x = x + 1;
        }
        $("#dashcustomers").append(x);

    });

    
    $.get("data/suppliers.json", function (data) {
        
        var x = 0;
        for (var i = 0; i < data.length; i++) {
            x = x + 1;
        }
        $("#dashsuppliers").append(x);

    }); 

    $.get("data/orders.json", function (data) {
        
        var x = 0;
        for (var i = 0; i < data.length; i++) {
            x = x + 1;
        }
        $("#dashorders").append(x);

    }); 


});