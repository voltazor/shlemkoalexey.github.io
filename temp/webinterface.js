/*var linksArray = {
 link1: "http://41.media.tumblr.com/c4d33d07bf30a95861d9b55e75ae1928/tumblr_o43jzjJfwz1shlzkjo1_1280.jpg",
 link2: "http://40.media.tumblr.com/d12314f5647ff0249ffa521ddbeb3785/tumblr_o43jywfegw1shlzkjo1_1280.jpg",
 link3: "http://36.media.tumblr.com/dbe879414ada0cde33f02111a1443467/tumblr_o43k19AWvD1shlzkjo1_500.jpg",
 link4: "http://41.media.tumblr.com/a258a328731d45ea12f622619871d5cf/tumblr_o43jwuBbQp1s87941o1_1280.jpg",
 link5: "http://41.media.tumblr.com/1648f52ac9233e2b0cca04bf679da68e/tumblr_o43jwj6LAV1s87941o1_1280.jpg",
 link6: "http://40.media.tumblr.com/baef3b59f1f7d48a6b7db56592ef29df/tumblr_o43jv5Y0jj1s87941o1_1280.jpg",
 link7: "http://40.media.tumblr.com/643bd47f1e5a77448d07da003c54f5a4/tumblr_o43juq1LM71s87941o1_1280.jpg",
 link8: "http://40.media.tumblr.com/2b08562215fd828000e2fcf7dc1baa0f/tumblr_o43juiVKiR1s87941o1_1280.jpg",
 link9: "http://49.media.tumblr.com/311f91c39390d07d030bb5996e245188/tumblr_nbptnrC0mk1tzf701o1_400.gif",
 link10: "http://49.media.tumblr.com/29c58e3df32fddf2ee9f56e5a2d5a703/tumblr_naren9uT0S1tr7fouo1_400.gif",
 link11: "http://45.media.tumblr.com/7dc796aec9b7fec488888c75eba9d171/tumblr_o34uhdPC0S1uj55peo1_540.gif",
 link12: "http://49.media.tumblr.com/44828ab8ad5c03e236518365caf632df/tumblr_o35c734Urh1v84pfoo1_400.gif"
};*/
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

$(document).ready(function () {

    $(".gallery-section").append("<div class=\"section-shadow section-shadow-hover\"></div>");
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
    //carouselBlock.fadeOut();
    carouselBlock.append("<button id=\"carousel-button-prev\">←</button>");
    carouselBlock.append("<button id=\"carousel-button-next\">→</button>");
    carouselBlock.append("<button id=\"carousel-button-close\">×</button>");
    carouselBlock.append("<div class=\"blocker1\"></div>");
    carouselBlock.append("<div class=\"blocker2\"></div>");
    $("#carousel-button-prev").on("click", function () {
        carouselBlock.slick("slickPrev");
    });
    $("#carousel-button-next").on("click", function () {
        carouselBlock.slick("slickNext");
    });
    /*по сути следующий ивент теперь не нужен*/
    /*$("#carousel-button-close").on("click", function () {
        carouselBlock.fadeOut();
        mainBlockOpacityOff();
    });*/

    $("#carousel-main").bind('click', function (e) {
        if (!$(e.target).is('#carousel-button-prev, #carousel-button-next, img, .slick-dots, li, .slick-dots li button')) {
            carouselBlock.fadeOut();
            mainBlockOpacityOff();
        }
    });


}

function mainBlockOpacityOn() {
    $("#main-section").fadeTo(500, 0.15);
    //$("body").css("overflow", "hidden");
    $(".section-shadow").removeClass("section-shadow-hover");
}
function mainBlockOpacityOff() {
    $("#main-section").fadeTo(500, 1);
    //$("body").css("overflow", "scroll");
    $(".section-shadow").addClass("section-shadow-hover");
}

