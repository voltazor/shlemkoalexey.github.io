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

    for (var i = 1; i <= 12; i++) {
        widerOrHigher(linksArray["link"+i], $("#image" + i));
        $(("#image" + i)).css("background", "url(" + linksArray[("link" + i)] + ") no-repeat");
    };
});



function widerOrHigher(link, image){
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
        
    };
}