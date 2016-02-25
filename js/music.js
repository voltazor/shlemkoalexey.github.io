var currentSecond = 0;
var player = $("#music-player");
var timer = $("#timer");

var lyrics = [];
var timings = []

lyrics[0] = 'This was a triumph';
timings[0] = 1;

lyrics[1] = 'I\'m making a note here.';
timings[1] = 2;

lyrics[2] = "HUGE SUCCESS.";
timings[2] = 3;

lyrics[3] ='It\'s hard to overstate my satisfaction.';
timings[3] = 4;

lyrics[4] = "Aperture sciense.";
timings[4] = 5;

lyrics[5] = "We do what we must because we can."
timings[5] = 6;

lyrics[6] = "For the good of all of us,";
timings[6] = 7;

lyrics[7] = "except the ones who are dead.";
timings[7] = 8;

$(document).ready(function(){
    var getMusicTime = setInterval(function() {
        currentSecond = Number(player.prop("currentTime").toFixed());   
        timer.html(currentSecond);
        printText();     
    }, 1000);
});

function printText(){
    for (var i = 0; i <= timings.length; i++) {
            if (timings[i] == currentSecond) {
                $("body").append("<p>");
           //     $("body p:last-child").html(lyrics[i]);  
                printTextWithDelay($("body p:last-child"), lyrics[i], 50);             
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
/*
This was a triumph
I'm making a note here.
HUGE SUCCESS.
It's hard to overstate my satisfaction.
Aperture sciense.
We do what we must because we can.
For the good of all of us, except the ones who are dead.

But there's no sense crying over every mistake.
You just keep on trying till you run out of cake.
And the Science get's done.
And you make a neat gun.
For the people who are still alive.

I'm not even angry.
I'm being so sincere right now.
Even though you broke my heart.
And killed me.
And tore me to pieces.
And threw every piece into a fire.
As they burned it hurt because I was so happy for you!
Now these points of data make a beautiful line.
And we're out of beta.
We're releasing on time.
So I'm GLaD. I got burned.
Think of all the things we learned for the people who are still alive.

Go ahead and leave me.
I think I prefer to stay inside.
Maybe you'll find someone else to help you.
Maybe Black Mesa.
THAT WAS A JOKE. HA-HA! FAT CHANCE.
Anyway this cake is great, i'ts so delicious and moist.
Look at me still talking when there's Science to do.
When I look out there, it makes me GLaD I'm not you.
I've experiments to run.
There is research to be done on the people who are still alive.

And believe me I am still alive.
I'm doing Science and I'm still alive.
I feel FANTASTIC and I'm still alive.
While you're dying I'll be still alive.
And when you're dead I will be still alive.

STILL ALIVE

STILL ALIVE
*/