var opacityDelay = 300;

$(document).ready(function(){
  $(".example-list li:nth-child(1)").hover(function(){
    $(".first-example-text").toggleClass("example-visible");
    $(".first-example-text").toggleClass("example-visible-opacity", opacityDelay);
  });  
  $(".example-list li:nth-child(2)").hover(function(){
    $(".second-example-text").toggleClass("example-visible");
    $(".second-example-text").toggleClass("example-visible-opacity", opacityDelay);
  }); 
  $(".example-list li:nth-child(3)").hover(function(){
    $(".third-example-text").toggleClass("example-visible");
    $(".third-example-text").toggleClass("example-visible-opacity", opacityDelay);
  }); 
  $(".example-list li:nth-child(4)").hover(function(){
    $(".fourth-example-text").toggleClass("example-visible");
    $(".fourth-example-text").toggleClass("example-visible-opacity", opacityDelay);
  }); 
  $(".example-list li:nth-child(5)").hover(function(){
    $(".fifth-example-text").toggleClass("example-visible");
    $(".fifth-example-text").toggleClass("example-visible-opacity", opacityDelay);
  });
});