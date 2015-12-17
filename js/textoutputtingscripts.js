var outputText = "The Matrix is a 1999 American–Australian neo-noir science fiction action film written and directed by The Wachowskis, starring Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving, and Joe Pantoliano. It depicts a dystopian future in which reality as perceived by most humans is actually a simulated reality called \"the Matrix\", created by sentient machines to subdue the human population, while their bodies' heat and electrical activity are used as an energy source. Computer programmer \"Neo\" learns this truth and is drawn into a rebellion against the machines, which involves other people who have been freed from the \"dream world\".";



$(document).ready(function(){
  printTextWithDelay($('p'), outputText, 15);  
});



/*Function has 3 arguments:
  first - targeted html-element (jQuery)
  second - variable with text which will be printed
  third - delay between every symbol*/

function printTextWithDelay(outputTarget, outputText, textDelay) {
  var currentPosition = 0;
  var target = outputTarget;
  var interval = setInterval(
    function() {
      target.html(target.html() + outputText[currentPosition]);
      currentPosition++;
      if (currentPosition === outputText.length) {
        clearInterval(interval);
      }
    }, textDelay);
};



