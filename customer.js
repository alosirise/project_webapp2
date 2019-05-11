
$(function () {
    console.log("ok");
    $.get("data/customers.json", function(data, status) {
        console.log(status);
        if (status == 'success') {
            var n =0;
            var products = data.customerJson;
            var tableHead = '<tr> <th>customerID</th> <th>companyName</th> <th>contactName</th>  <th>contactTitle</td></tr>'
            $('#tablecus').append(tableHead);
            for (var index in products) { 
                
                var product = products[index]; 
              
                var tableRow = '<tr>  <td>' +product.customerID+'</td>  <td>' +  '<a href="customerdetail.html" onclick="setCookies('+n+')">'+product.companyName  +'</a>' +  '</td>  <td>' + product.contactName + '</td><td>' +  product.contactTitle
                '</td> </tr>'
                

                $('#tablecus').append(tableRow); 
                n++;
            }

        }else{console.log("fail")}
    });


});

function setCookies(n){
    document.cookie = n;
}

