$(function () {

    $.get("data/customers.json", function (data) {
         console.log("ok3")
        var products = data.customerJson;
        var index = products[document.cookie];
        var id = index.customerID
        $("#id").val(id);

        var name = index.companyName
        $("#name").val(name);

        var contactname = index.contactName
        $("#contactname").val(contactname);

        var contacttitle = index.contactTitle
        $("#contacttitle").val(contacttitle);

        var street = index.address.street
        $("#street").val(street);




        var city = index.address.city
        $("#city").val(city);

        var region = index.address.region
        $("#region").val(region);

        var postalCode = index.address.postalCode
        $("#postalcode").val(postalCode);

        var country = index.address.country
        $("#country").val(country);

        var phone = index.address.phone
        $("#phone").val(phone);
 
    });
   });