$(function () {
    console.log("ok2");
    $.get("data/customers.json", function (data, status) {
        console.log(status);
        if (status == 'success') {
            var products = data.customerJson;
            var tableHead = '<tr> <th>CustomerID</th> <th>CompanyName</th> <th>ContactName</th>  <th>ContactTitle</td> <th>Address</td></tr>'
            $('#datafull').append(tableHead);

            var product = products[document.cookie];
            var tableRow = '<tr>  <td>' + product.customerID + '</td>  <td>' + product.companyName + '</td>  <td>' + product.contactName + '</td><td>' + product.contactTitle +
                '</td><td>'             
                +"Street : "+ product.address.street+"<br>"+"City : "+product.address.city +"<br>"+"Region : "+product.address.region+"<br>"+"PostalCode : "+product.address.postalCode+ "<br>"+"Country : "+product.address.country+"<br>"+"Phone number : "+product.address.phone +'</td> </tr>'

            $('#datafull').append(tableRow);
        } else { console.log("fail") }
    });



});
