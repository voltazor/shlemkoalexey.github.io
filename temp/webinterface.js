var linksArray = {
    link1: "http://36.media.tumblr.com/74c4e7a08ef4d797e8cd286bbf7492ae/tumblr_o3sixgNzIQ1shlzkjo1_1280.jpg",
    link2: "http://40.media.tumblr.com/6c431e10e2c5177b9121badb38b548db/tumblr_o3siqzecKm1s87941o1_500.jpg",
    link3: "http://41.media.tumblr.com/0154ff588d18c11f6bf116caf2f6caea/tumblr_o3sis5EuSI1s87941o1_500.jpg",
    link4: "http://41.media.tumblr.com/1c5db1752bbefd38ab4b468f6adda6a5/tumblr_o3siy3lZoJ1shlzkjo1_1280.jpg",
    link5: "http://36.media.tumblr.com/44076f791f7ff5df16ee3ec2b6fa403d/tumblr_o3sipijxtG1s87941o1_1280.jpg",
    link6: "http://41.media.tumblr.com/a540013d13bc862963a119900ad16916/tumblr_o3sipsHX6j1s87941o1_1280.jpg",
    link7: "http://41.media.tumblr.com/7b6464a3956db160401c94ea9665957c/tumblr_o3kkvaf3NP1s87941o1_400.jpg",
    link8: "http://40.media.tumblr.com/11ea77ca7527ae69bf0ade25d7d2b6ff/tumblr_o3mn02YqhU1s37ot7o1_1280.jpg",
    link9: "http://41.media.tumblr.com/fc708d31e57e8150a868fad895ec6100/tumblr_o37crbxIvo1s87941o1_500.jpg",
    link10: "http://41.media.tumblr.com/bdab07f76a7650cd2a85d8d667ab63f5/tumblr_o3fjf96KWq1shlzkjo1_500.jpg",
    link11: "http://36.media.tumblr.com/f204364c105ab9d30c362890ad189aaa/tumblr_o3fjf4IsUH1shlzkjo1_1280.jpg",
    link12: "http://40.media.tumblr.com/46362b697212bd3592739689c91728c7/tumblr_o3fjguFLit1shlzkjo1_1280.jpg"
};/*
var linksArray = {
    link1: "http://lorempixel.com/400/300/",
    link2: "http://lorempixel.com/300/400/",
    link3: "http://lorempixel.com/g/400/300/",
    link4: "http://lorempixel.com/g/300/400/",
    link5: "http://lorempixel.com/500/250/",
    link6: "http://lorempixel.com/g/500/250/",
    link7: "http://lorempixel.com/250/500/",
    link8: "http://lorempixel.com/g/250/500/",
    link9: "http://lorempixel.com/g/400/200/",
    link10: "http://lorempixel.com/200/400/",
    link11: "http://lorempixel.com/g/200/400/",
    link12: "http://lorempixel.com/400/200/"
};
*/
$(document).ready(function () {

    $(".gallery-section").append("<div class=\"section-shadow\"></div>");
    for (var i = 1; i <= 12; i++) {
        widerOrHigher(linksArray["link" + i], $("#image" + i));
        $(("#image" + i)).css("background", "url(" + linksArray[("link" + i)] + ") no-repeat");

        $("#carousel-main").append("<div><img src=\"" + linksArray[("link" + i)] + "\"></div>");
    }

    createCarousel($('#carousel-main'));
    $(".gallery-section").click(function () {
        $('#carousel-main').fadeIn();
        var id = $(this).attr("id");
        id = Number(id.substring(5));
        console.log(id);
        $('#carousel-main').slick("slickGoTo", id - 1, true);
        mainBlockOpacityOn();
    });


});


function widerOrHigher(link, image) {
    image.append("<div class=\"section-preloader\"><img src=\"preloader.gif\"></div>");
    var src = link;
    var img = document.createElement("img");
    img.src = link;
    img.onload = function () {
        console.log("params getted");
        if (img.width >= img.height) {
            image.addClass("wider");
            console.log("wider");
        } else {
            image.addClass("higher");
            console.log("higher");
        }

        image.find(".section-preloader").remove();
    };
}

function createCarousel(carouselBlock) {
    carouselBlock.slick({
        dots: true,
        infinite: true,
        speed: 300,
        respondTo: "slider",
        arrows: false
    });
    carouselBlock.fadeOut();
    carouselBlock.append("<button id=\"carousel-button-prev\">←</button>");
    carouselBlock.append("<button id=\"carousel-button-next\">→</button>");
    carouselBlock.append("<button id=\"carousel-button-close\">×</button>");
    $("#carousel-button-prev").on("click", function () {
        carouselBlock.slick("slickPrev");
    });
    $("#carousel-button-next").on("click", function () {
        carouselBlock.slick("slickNext");
    });
    /*по сути следующий ивент теперь не нужен*/
    $("#carousel-button-close").on("click", function () {
        carouselBlock.fadeOut();
        mainBlockOpacityOff();
    });

    $("#carousel-main").bind('click', function (e) {
        if (!$(e.target).is('#carousel-button-prev, #carousel-button-next, img, button')) {
            carouselBlock.fadeOut();
            mainBlockOpacityOff();
        }
    });


}

function mainBlockOpacityOn() {
    $("#main-section").fadeTo(500, 0.15);
}
function mainBlockOpacityOff() {
    $("#main-section").fadeTo(500, 1);
}
