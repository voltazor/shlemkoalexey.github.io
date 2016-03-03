var linksArray = {
    link1 : "https://placeholdit.imgix.net/~text?txtsize=28&bg=0099ff&txtclr=ffffff&txt=300%C3%97300&w=300&h=300&fm=png",
    link2 : "http://sqlbook.ru/wp-content/uploads/2014/08/wpid-pravil-nye-pleysholdery_i_2.jpg",
    link3 : "http://shustov.su/images/items/html5placeholder.jpg",
    link4 : "http://cs7.pikabu.ru/images/big_size_comm/2014-06_4/1403167186818.jpeg",
    link5 : "http://blog.eney.solutions/wp-content/uploads/sites/3/2011/11/placeholder1.jpg",
    link6 : "http://www.placeholder.org/images/Placeholder-NameIs-LogoLinks.gif",
    link7 : "http://spucweb.com/wp-content/uploads/picture-placeholder-female.gif",
    link8 : "http://shandermanshop.com/wp-content/themes/WCM010013/images/megnor/placeholder.png",
    link9 : "http://lorempixel.com/g/400/200/",
    link10 : "http://lorempixel.com/200/400/",
    link11 : "http://lorempixel.com/g/200/400/",
    link12 : "http://lorempixel.com/400/200/"
}




$(document).ready(function(){
    for (var i = 1; i<=12; i++){
        $(("#image"+i)).css("background", "url(" + linksArray[("link"+i)] + ") no-repeat");  
        $(("#image"+i)).css("background-position", "center");        
        $(("#image"+i)).css("background-size", "auto 100%");
        $(("#image"+i)).addClass("widder");
    }

});