var questionCounter = 0;
var correctCounter = 0;














function questionCounterUpdate(){
    questionCounter++;
    $("#question-counter").html(questionCounter);
}

function correctCounterUpdate(){
    correctCounter++;
    $("#correct-counter").html(questionCounter);
}


$(document).ready(function(){
    $("#theme-selector").prop('value', false);
});