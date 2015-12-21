/*My library for interesting functions which can be used later*/



// genetates random integer from min to max varuables
function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}




/*prints string by-symbol, has options for more flex usage
  
  has 3 arguments:
  outputTarget - targeted html-element (jQuery)
  outputText - variable with text which will be printed
  textDelay - delay between every symbol*/
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