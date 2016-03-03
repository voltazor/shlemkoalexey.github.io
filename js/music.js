var currentSecond = 0;
var player = $("#music-player");
var play = $("#btn-play");
var debugTime = 0;

var lyrics = [];
var timings = [];
var outputtingSpeed = [];

lyrics[0] = 'This was a triumph';
timings[0] = 1;
outputtingSpeed[0] = 25;

lyrics[1] = 'I\'m making a note here: \"HUGE SUCCESS.\"';
timings[1] = 4;
outputtingSpeed[1] = 75;

lyrics[2] = "It\'s hard to overstate my satisfaction.";
timings[2] = 9;
outputtingSpeed[2] = 120;

lyrics[3] = 'Aperture science.';
timings[3] = 16;
outputtingSpeed[3] = 65;

lyrics[4] = "We do what we must because we can.";
timings[4] = 20;
outputtingSpeed[4] = 85;

lyrics[5] = "For the good of all of us, except the ones who are dead.";
timings[5] = 25;
outputtingSpeed[5] = 90;

lyrics[6] = "But there's no sense crying over every mistake.";
timings[6] = 31;
outputtingSpeed[6] = 60;

lyrics[7] = "You just keep on trying till you run out of cake.";
timings[7] = 35;
outputtingSpeed[7] = 70;

lyrics[8] = "And the Science get's done and you make a neat gun.";
timings[8] = 39;
outputtingSpeed[8] = 65;

lyrics[9] = "For the people who are still alive.";
timings[9] = 43;
outputtingSpeed[9] = 70;

lyrics[10] = "I'm not even angry.";
timings[10] = 52;
outputtingSpeed[10] = 65;

lyrics[11] = "I'm being so sincere right now.";
timings[11] = 56;
outputtingSpeed[11] = 85;

lyrics[12] = "Even though you broke my heart and killed me.";
timings[12] = 61;
outputtingSpeed[12] = 100;

lyrics[13] = "And tore me to pieces.";
timings[13] = 68;
outputtingSpeed[13] = 65;

lyrics[14] = "And threw every piece into a fire.";
timings[14] = 72;
outputtingSpeed[14] = 85;

lyrics[15] = "As they burned it hurt because I was so happy for you!";
timings[15] = 77;
outputtingSpeed[15] = 90;

lyrics[16] = "Now these points of data make a beautiful line.";
timings[16] = 83;
outputtingSpeed[16] = 60;

lyrics[17] = "And we're out of beta. We're releasing on time.";
timings[17] = 87;
outputtingSpeed[17] = 65;

lyrics[18] = "So I'm GLaD. I got burned. Think of all the things we learned.";
timings[18] = 91;
outputtingSpeed[18] = 50;

lyrics[19] = "For the people who are still alive.";
timings[19] = 95;
outputtingSpeed[19] = 60;

lyrics[20] = "Go ahead and leave me.";
timings[20] = 104;
outputtingSpeed[20] = 60;

lyrics[21] = "I think I prefer to stay inside.";
timings[21] = 108;
outputtingSpeed[21] = 90;

lyrics[22] = "Maybe you'll find someone else to help you.";
timings[22] = 113;
outputtingSpeed[22] = 100;

lyrics[23] = "Maybe Black Mesa.";
timings[23] = 120;
outputtingSpeed[23] = 80;

lyrics[24] = "THAT WAS A JOKE. HA-HA! FAT CHANCE.";
timings[24] = 124;
outputtingSpeed[24] = 90;

lyrics[25] = "Anyway this cake is great, it's so delicious and moist.";
timings[25] = 129;
outputtingSpeed[25] = 100;

lyrics[26] = "Look at me still talking when there's Science to do.";
timings[26] = 135;
outputtingSpeed[26] = 60;

lyrics[27] = "When I look out there, it makes me GLaD I'm not you.";
timings[27] = 139;
outputtingSpeed[27] = 60;

lyrics[28] = "I've experiments to run. There is research to be done";
timings[28] = 143;
outputtingSpeed[28] = 50;

lyrics[29] = "On the people who are still alive.";
timings[29] = 147;
outputtingSpeed[29] = 75;

lyrics[30] = "Believe me I am still alive.";
timings[30] = 151;
outputtingSpeed[30] = 60;

lyrics[31] = "I'm doing Science and I'm still alive.";
timings[31] = 155;
outputtingSpeed[31] = 50;

lyrics[32] = "I feel FANTASTIC and I'm still alive.";
timings[32] = 159;
outputtingSpeed[32] = 50;

lyrics[33] = "While you're dying I'll be still alive.";
timings[33] = 163;
outputtingSpeed[33] = 50;

lyrics[34] = "And when you're dead I will be still alive.";
timings[34] = 167;
outputtingSpeed[34] = 50;

lyrics[35] = "STILL ALIVE";
timings[35] = 170;
outputtingSpeed[35] = 40;

lyrics[36] = "STILL ALIVE";
timings[36] = 172;
outputtingSpeed[36] = 30;


$(document).ready(function () {

    $("body .container p").addClass("smaller-text");
    $("body .container").animate({scrollTop: $('body .container').prop("scrollHeight")}, 200);
    player.prop("currentTime", debugTime); //delete it!
    setInterval(function () {
        currentSecond = Number(player.prop("currentTime").toFixed());
        $("body .container").animate({scrollTop: $('body .container').prop("scrollHeight")}, 200);
        printText();
    }, 1000);


    $("#btn-play").click(function () {
        $("body .container p").html("<br>");
        player.trigger('play');
        play.fadeOut(500);
        $("#enable-sound").fadeOut(500);
        $("body .container p").fadeIn(500);
    });

});

function printText() {
    for (var i = 0; i <= timings.length; i++) {
        if (timings[i] == currentSecond) {
            $("body .container p").addClass("smaller-text");
            $("body .container").append("<p>");
            printTextWithDelay($("body .container p:last-child"), lyrics[i], outputtingSpeed[i]);
        }

        if (currentSecond == 176) {
            play.html("AGAIN");
            play.fadeIn();
            $("body .container p").fadeOut(1000);

        }
    }
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
