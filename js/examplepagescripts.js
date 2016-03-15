$(document).ready(function(){
    $(".example-list li:nth-child(1)").mouseenter(function(){
        $(".example-image").css("background-image", "url(../src/randomquotegenerator.png)");
    });
    $(".example-list li:nth-child(2)").mouseenter(function(){
        $(".example-image").css("background-image", "url(../src/textoutputting.png)");
    });
    $(".example-list li:nth-child(3)").mouseenter(function(){
        $(".example-image").css("background-image", "url(../src/landing-portfolio-example.png)");
    });
    $(".example-list li:nth-child(4)").mouseenter(function(){
        $(".example-image").css("background-image", "url(../src/mobile-app-landing-example.png)");
    });
    $(".example-list li:nth-child(5)").mouseenter(function(){
        $(".example-image").css("background-image", "url(../src/todo.png)");
    });
    $(".example-list li:nth-child(6)").mouseenter(function(){
        $(".example-image").css("background-image", "url(../src/lem.png)");
    });





    $(".example-list li").mouseleave(function(){
        $(".example-image").css("background-image", "none");
    });
});