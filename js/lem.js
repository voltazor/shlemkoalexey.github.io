$(document).ready(function(){
    $("button").click(function(){

        setVar1();
        setVar2(var1);
        setVar3(var2);
        setVar4(var3);
        $("#result").html(textForOutput+var1+var2+var3+var4+var5+var6+var7+var8+var9+var10+var11+var12+var13);

    });


});


var textForOutput = "Земля";
var counter;
var line1 = [
    " сгорает, или замерзает, или падает на солнце",
    ", ученые",
    " подвергается нашествию",
    " сталкивается с огромной кометой"
];
var line2 = [
    " и все гибнут (конец).",
    " и почти все гибнут (конец).",
    " создают",
    " открывают",
    " маленьких",
    " огромных",
    " и разрушается (конец).",
    " и не разрушается, но",
    " и остается невредимой (конец)."
];
var line3 = [
    " маленьких",
    " огромных",
    " марсиан, селенитов, внегалактических чудовищ,",
    " и все гибнут (конец).",
    " и почти все гибнут (конец)."
];
var line4 = [
    " насекомых",
    " пресмыкающихся",
    " роботов",
    " внеземных существ",
    " различных странных предметов"
];
var line5 = [];
var line6 = [];
var line7 = [];
var line8 = [];
var line9 = [];
var line10 = [];
var line11 = [];
var line12 = [];
var line13 = [];

var var1 = "";
var var2 = "";
var var3 = "";
var var4 = "";
var var5 = "";
var var6 = "";
var var7 = "";
var var8 = "";
var var9 = "";
var var10 = "";
var var11 = "";
var var12 = "";
var var13 = "";

function setVar1(){
    var1 = line1[randomInteger(0,3)];
};
function setVar2(var1){
    switch(var1){
        case line1[0]:
            counter = randomInteger(0,1);
            var2 = line2[counter];
            break;
    
        case line1[1]:
            counter = randomInteger(2,3);
            var2 = line2[counter];
            break;
        case line1[2]:
            counter = randomInteger(4,5);
            var2 = line2[counter];
            break;
        case line1[3]:
            counter = randomInteger (6,8);
            var2 = line2[counter];
            break;
        default: var2 = "";
    }
}

function setVar3(var2){
    switch(var2){
        case line2[0]:
        case line2[1]:
            var3 = "";
            break;
        case line2[2]:
        case line2[3]:
            counter = randomInteger(0,1);
            var3 = line3[counter];
            break;
        case line2[4]:
        case line2[5]:
            var3 = line3[2];
            break;
        case line2[6]:
        case line2[7]:
        case line2[8]:
            counter = randomInteger(3,4);
            var3 = line3[counter];
            break;
        default:
            var3 = "";
    }
}

function setVar4(var3){
    switch(var3){
        case line3[0]:
        case line3[1]:
        case line3[2]:
            counter = randomInteger(0,4);
            var4 = line4[counter];
        default:
            var4 = "";
    }
}













function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}