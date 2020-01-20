console.log("Starting AJAX Queries...");

function retrieveJSON(numeroChevalier) {
    console.log("Calling for JSON...");
    console.log("Numero chevalier: " + numeroChevalier)
    console.log()

    $.getJSON("json/chevaliers.json", function (data) {
		 // Chez moi le site était déployé dans htdocs/siteJQ
		 let baseHome="/siteJQ/";
        console.log("Numero chevalier: " + numeroChevalier)
        console.log(data[numeroChevalier]);
        console.log(data[numeroChevalier].id);
        console.log(data[numeroChevalier].name);
        console.log(data[numeroChevalier].photo);
        console.log(data[numeroChevalier].sign);
        console.log(data[numeroChevalier].desc);
		 
		 $('#characterPhoto').attr('src', baseHome+'img/'+data[numeroChevalier].photo);
		 
		 $("#characterName").text(data[numeroChevalier].name);
		 $("#characterSign").text(", chevalier d'or du "+data[numeroChevalier].sign);
		 $("#characterDescription").text(data[numeroChevalier].desc);
		 //$("#characterName").text("TEST");
    });
}
