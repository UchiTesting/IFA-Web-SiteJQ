var interval = 5000;
var carouselSelector = ".carousel ul";
var imageWidth = 288;
var slideTimeInMillis = 800;

// Déplace les images en marge négative puis swap la première à la fin avant de supprimer la marge gauche négative.
$(function () {
    /* setInterval répète le slide tous les (var interval) */
    setInterval(function () {
        // Lance une animation entre les images
        $(carouselSelector).animate({
            // On met une marge de la largeur var imageWidth) qui se réalise en (var slideTimeMillis)
            marginLeft: -imageWidth
        }, slideTimeInMillis, function () {
            // Fonction de callback en fin de transition.
            // Suppression de la marge gauche
            // Placement du premier élément après le dernier.
            $(carouselSelector).css({
                marginLeft: 0
            }).find("li:last").after($(carouselSelector).find("li:first"));
        })
    }, interval);
});
