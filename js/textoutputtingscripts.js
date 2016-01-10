$(document).ready(function () {
    $(".button-to-output").click(function () {

        if ($("textarea").val().length != 0) {
            $('.output-p').empty();
            printTextWithDelay($('.output-p'), $("textarea").val(), 25);
            $("textarea").val(function () {
                $(this).empty();
            });
        } else {
            alert("Textarea if empty, please write something!");
        }
    });
});


/*Function has 3 arguments:
 first - targeted html-element (jQuery)
 second - variable with text which will be printed
 third - delay between every symbol*/

function printTextWithDelay(outputTarget, outputText, textDelay) {
    var currentPosition = 0;
    var target = outputTarget;
    var interval = setInterval(
        function () {
            target.html(target.html() + outputText[currentPosition]);
            currentPosition++;
            if (currentPosition === outputText.length) {
                clearInterval(interval);
            }
        }, textDelay);
}



