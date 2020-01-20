var interval = 5000;
var carouselSelector = ".carousel ul";
var imageWidth = 288;
var slideTimeInMillis = 800;

// Déplace les images en marge négative puis swap la première à la fin avant de supprimer la marge gauche négative.
$(function () {
    /* setInterval répète */
    setInterval(function () {
        $(carouselSelector).animate({
            marginLeft: -imageWidth
        }, slideTimeInMillis, function () {
            $(carouselSelector).css({
                marginLeft: 0
            }).find("li:last").after($(carouselSelector).find("li:first"));
        })
    }, interval);
});
