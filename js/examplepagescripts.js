$(document).ready(function(){
  $(".example-list li:nth-child(1)").hover(function(){
    $(".first-example-image").toggleClass("example-visible");
  });  
  $(".example-list li:nth-child(2)").hover(function(){
    $(".second-example-image").toggleClass("example-visible");
  }); 
  $(".example-list li:nth-child(3)").hover(function(){
    $(".third-example-image").toggleClass("example-visible");
  }); 
});