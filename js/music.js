var currentSecond = 0;
var player = $("#music-player");
var debugTime = 45;

var lyrics = [];
var timings = [];
var outputtingSpeed = [];

lyrics[0] = 'This was a triumph';
timings[0] = 2;
outputtingSpeed[0] = 25;

lyrics[1] = 'I\'m making a note here: \"HUGE SUCCESS.\"';
timings[1] = 4;
outputtingSpeed[1] = 25;

lyrics[2] = "It\'s hard to overstate my satisfaction.";
timings[2] = 6;
outputtingSpeed[2] = 25;

lyrics[3] ='Aperture sciense.';
timings[3] = 8;
outputtingSpeed[3] = 25;

lyrics[4] = "We do what we must because we can.";
timings[4] = 10;
outputtingSpeed[4] = 25;

lyrics[5] = "For the good of all of us, except the ones who are dead."
timings[5] = 12;
outputtingSpeed[5] = 25;

lyrics[6] = "But there's no sense crying over every mistake.";
timings[6] = 14;
outputtingSpeed[6] = 25;

lyrics[7] = "You just keep on trying till you run out of cake.";
timings[7] = 16;
outputtingSpeed[7] = 25;

lyrics[8] = "And the Science get's done and you make a neat gun.";
timings[8] = 18;
outputtingSpeed[8] = 25;

lyrics[9] = "For the people who are still alive.";
timings[9] = 20;
outputtingSpeed[9] = 25;

lyrics[10] = "I'm not even angry.";
timings[10] = 22;
outputtingSpeed[10] = 25;

lyrics[11] = "I'm being so sincere right now.";
timings[11] = 24;
outputtingSpeed[11] = 25;

lyrics[12] = "Even though you broke my heart and killed me.";
timings[12] = 26;
outputtingSpeed[12] = 25;

lyrics[13] = "And tore me to pieces.";
timings[13] = 28;
outputtingSpeed[13] = 25;

lyrics[14] = "And threw every piece into a fire.";
timings[14] = 30;
outputtingSpeed[14] = 25;

lyrics[15] = "As they burned it hurt because I was so happy for you!";
timings[15] = 32;
outputtingSpeed[15] = 25;

lyrics[16] = "Now these points of data make a beautiful line.";
timings[16] = 34;
outputtingSpeed[16] = 25;

lyrics[17] = "And we're out of beta. We're releasing on time.";
timings[17] = 36;
outputtingSpeed[17] = 25;

lyrics[18] = "So I'm GLaD. I got burned. Think of all the things we learned.";
timings[18] = 38;
outputtingSpeed[18] = 25;

lyrics[19] = "For the people who are still alive.";
timings[19] = 40;
outputtingSpeed[19] = 25;

lyrics[20] = "Go ahead and leave me.";
timings[20] = 41;
outputtingSpeed[20] = 25;

lyrics[21] = "I think I prefer to stay inside.";
timings[21] = 42;
outputtingSpeed[21] = 25;

lyrics[22] = "Maybe you'll find someone else to help you.";
timings[22] = 44;
outputtingSpeed[22] = 25;

lyrics[23] = "Maybe Black Mesa.";
timings[23] = 46;
outputtingSpeed[23] = 25;

lyrics[24] = "THAT WAS A JOKE. HA-HA! FAT CHANCE.";
timings[24] = 48;
outputtingSpeed[24] = 25;

lyrics[25] = "Anyway this cake is great, i'ts so delicious and moist.";
timings[25] = 50;
outputtingSpeed[25] = 25;

lyrics[26] = "Look at me still talking when there's Science to do.";
timings[26] = 52;
outputtingSpeed[26] = 25;

lyrics[27] = "When I look out there, it makes me GLaD I'm not you.";
timings[27] = 54;
outputtingSpeed[27] = 25;

lyrics[28] = "I've experiments to run. There is research to be done";
timings[28] = 56;
outputtingSpeed[28] = 25;

lyrics[29] = "On the people who are still alive.";
timings[29] = 58;
outputtingSpeed[29] = 25;

lyrics[30] = "And believe me I am still alive.";
timings[30] = 60;
outputtingSpeed[30] = 25;

lyrics[31] = "I'm doing Science and I'm still alive.";
timings[31] = 62;
outputtingSpeed[31] = 25;

lyrics[32] = "I feel FANTASTIC and I'm still alive.";
timings[32] = 64;
outputtingSpeed[32] = 25;

lyrics[33] = "While you're dying I'll be still alive.";
timings[33] = 66;
outputtingSpeed[33] = 25;

lyrics[34] = "And when you're dead I will be still alive.";
timings[34] = 68;
outputtingSpeed[34] = 25;

lyrics[35] = "STILL ALIVE";
timings[35] = 70;
outputtingSpeed[35] = 25;

lyrics[36] = "STILL ALIVE";
timings[36] = 72;
outputtingSpeed[36] = 25;


$(document).ready(function(){
    $("body .container p").addClass("smaller-text");
    $("body .container").animate({scrollTop: $('body .container').prop("scrollHeight")}, 200);
    $("#music-player").prop("currentTime",debugTime); //delete it!
    var getMusicTime = setInterval(function() {
        currentSecond = Number(player.prop("currentTime").toFixed());   
        $("#btn-timer").html(currentSecond);
        printText();   
    }, 1000);


    $("#btn-play").click(function(){
        $("#music-player").trigger('play');
    });
    $("#btn-stop").click(function(){
        $("#music-player").trigger('pause');

    });
});

function printText(){
    for (var i = 0; i <= timings.length; i++) {
            if (timings[i] == currentSecond) {                
                $("body .container").append("<p>#</p>");                
                $("body .container p").addClass("smaller-text");
                $("body .container").append("<p>");
                printTextWithDelay($("body .container p:last-child"), lyrics[i], outputtingSpeed[i]);             
                $("body .container").animate({scrollTop: $('body .container').prop("scrollHeight")}, 200);                
            };
        }; 
}


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
