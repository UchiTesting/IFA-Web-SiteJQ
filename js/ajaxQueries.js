/* Fonction permettant de sélectionner 1 élement du fichier */
function retrieveJSON(numeroChevalier) {

    $.getJSON("json/chevaliers.json", function (data) {
        // Si le site n'est pas déployé à la racine du serveur.
        let baseHome = "/siteJQ/";
        let DEBUG = false;

        if (DEBUG) {
            console.log("Numero chevalier: " + numeroChevalier)
            console.log(data[numeroChevalier]);
            console.log(data[numeroChevalier].id);
            console.log(data[numeroChevalier].name);
            console.log(data[numeroChevalier].photo);
            console.log(data[numeroChevalier].sign);
            console.log(data[numeroChevalier].desc);
        }

        // On a une adaptation de l'article indéfini selon le signe.
        // On a une valeur par défaut et la gestion de cas particuliers.
        let articleIndefini = "du ";
        if (data[numeroChevalier].sign == "Vierge" || data[numeroChevalier].sign == "Balance")
            articleIndefini = "de la "; // On aime tous cette syntaxe du if à une ligne sans accolades. Miam ! :)

        // Les lignes suivantes mettent à jour les DOM avec les nouvelles valeurs.

        $('#characterPhoto').attr('src', baseHome + 'img/' + data[numeroChevalier].photo);

        $("#characterName").text(data[numeroChevalier].name);
        $("#characterSign").text(", chevalier d'or " + articleIndefini +
            data[numeroChevalier].sign);
        $("#characterDescription").text(data[numeroChevalier].desc);
    });
}
