var linksArray = {
    link1: "https://placeholdit.imgix.net/~text?txtsize=28&bg=0099ff&txtclr=ffffff&txt=300%C3%97300&w=300&h=300&fm=png",
    link2: "http://sqlbook.ru/wp-content/uploads/2014/08/wpid-pravil-nye-pleysholdery_i_2.jpg",
    link3: "http://shustov.su/images/items/html5placeholder.jpg",
    link4: "http://cs7.pikabu.ru/images/big_size_comm/2014-06_4/1403167186818.jpeg",
    link5: "http://blog.eney.solutions/wp-content/uploads/sites/3/2011/11/placeholder1.jpg",
    link6: "http://www.placeholder.org/images/Placeholder-NameIs-LogoLinks.gif",
    link7: "http://spucweb.com/wp-content/uploads/picture-placeholder-female.gif",
    link8: "http://shandermanshop.com/wp-content/themes/WCM010013/images/megnor/placeholder.png",
    link9: "http://lorempixel.com/g/400/200/",
    link10: "http://lorempixel.com/200/400/",
    link11: "http://lorempixel.com/g/200/400/",
    link12: "http://lorempixel.com/400/200/"
}


$(document).ready(function () {
    //здесь мы определяем размеры изображений
    for (var i = 1; i <= 12; i++) {
        widerOrHigher(linksArray["link"+i], $("#image" + i));
    };


    //сделать функцию, которой передается ссылка и блок,
    // в котором фон - это изображение, чтоб она ставила этому блоку соответствующий класс.

    for (var i = 1; i <= 12; i++) {
        $(("#image" + i)).css("background", "url(" + linksArray[("link" + i)] + ") no-repeat");

        //$(("#image" + i)).addClass("wider");
    }
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