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
}


$(document).ready(function () {
    
    $(".gallery-section").append("<div class=\"section-shadow\"></div>");
    for (var i = 1; i <= 12; i++) {
        widerOrHigher(linksArray["link"+i], $("#image" + i));
        $(("#image" + i)).css("background", "url(" + linksArray[("link" + i)] + ") no-repeat");
        
        $("#carousel-main").append("<div><img src=\""+linksArray[("link" + i)]+"\"></div>");
    };
    createCarousel($('#carousel-main'));
    $(".gallery-section").click(function(){
        $('#carousel-main').fadeIn();
        var id = $(this).attr("id");
        id = Number(id.substring(5));
        console.log(id);
        $('#carousel-main').slick("slickGoTo", id-1, true);
        mainBlockOpacityOn();
    });
    

});



function widerOrHigher(link, image){
    image.append("<div class=\"section-preloader\"><img src=\"preloader.gif\"></div>");
    var src = link;
    var img = document.createElement("img");
    img.src = link;
    img.onload = function () {
        console.log("params getted");
        if (img.width >= img.height) {
            image.addClass("wider"); 
            console.log("wider"); 
        }else{
            image.addClass("higher"); 
            console.log("higher");      
        };
    image.find(".section-preloader").remove();
    };
}

function createCarousel(carouselBlock){
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
    $("#carousel-button-prev").on("click", function(){
        carouselBlock.slick("slickPrev");
    });
    $("#carousel-button-next").on("click", function(){
        carouselBlock.slick("slickNext");
    });
    $("#carousel-button-close").on("click", function(){
        carouselBlock.fadeOut();
        mainBlockOpacityOff();
    });

    $("#carousel-main").bind('click', function(e) {
        if(!$(e.target).is('#carousel-button-prev, #carousel-button-next, img, button')) {
        carouselBlock.fadeOut();
        mainBlockOpacityOff();         
    }
});


}

function mainBlockOpacityOn(){
    $("#main-section").fadeTo(500, 0.3);
}
function mainBlockOpacityOff(){
    $("#main-section").fadeTo(500, 1);  
}
