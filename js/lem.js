$(document).ready(function () {
    $("button").click(function () {
        $("#result").empty();
        for (var i = 1; i <= 5; i++) {
            setVar1();
            setVar2(var1);
            setVar3(var2);
            setVar4(var3);
            setVar5(var4);
            setVar6(var5);
            setVar7(var6);
            setVar8(var7);
            setVar9(var8);
            setVar10(var9);
            setVar11(var10);
            setVar12(var11);
            $("#result").append("<p>Сценарий " + i + ": " + textForOutput + var1 + var2 + var3 + var4 + var5 + var6 + var7 + var8 + var9 + var10 + var11 + var12 + "</p>");
            console.log("------------------------------------");
        }


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
    " почти все гибнут (конец)."
];
var line4 = [
    " насекомых",
    " пресмыкающихся",
    " роботов",
    " внеземных существ",
    " различных странных предметов"
];
var line5 = [
    ", которые желают наших женщин",
    ", которые ведут себя дружелюбно (конец).",
    ", которые ведут себя дружелюбно, но их никто не понимает,",
    ", которые не понимают нас",
    ", которые отлично понимают нас",
    ", которые воспринимают нас только как пищу"
];
var line6 = [
    ", похищают их и исчезают (конец).",
    " и являются",
    " и сьедают нас (конец)."
];
var line7 = [
    " радиоактивными и",
    " нерадиоактивными и"
];
var line8 = [
    " могут быть уничтожены",
    " не могут быть уничтожены"
];
var line9 = [
    " толпой парней с факелами (конец).",
    " сухопутной армией, морским флотом, авиацией, морской пехотой и (или) войсками береговой охраны (конец).",
    " атомной бомбой (конец).",
    " толпой парней с факелами",
    " сухопутной армией, морским флотом, авиацией, морской пехотой и (или) войсками береговой охраны",
    " атомной бомбой"
];
var line10 = [
    ", но ученые изобретают новое оружие",
    ", но"
];
var line11 = [
    ", которое отказывает",
    ", которое их убивает (конец).",
    ", которое превращает их в мерзкие глыбы (конец).",
    " один хитрый парень убеждает их, что люди \"ОК\"",
    " священник рассказывает им о боге",
    " влюбляются в красивую девушку"
];
var line12 = [
    ", но они умирают от черной оспы (конец).",
    " и поэтому они убивают нас (конец).",
    " и поэтому они устанавливают систему доброжелательной диктатуры (конец).",
    " и поэтому они съедают нас (конец).",
    " и они умирают (конец).",
    " и они улетают (конец).",
    " и они превращаются в мерзкие глыбы (конец).",
    ", женятся и живут долго и счастливо (конец)."
];


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


function setVar1() {
    var1 = line1[randomInteger(0, 3)];
    console.log(var1);
};
function setVar2(var1) {
    switch (var1) {
        case line1[0]:
            counter = randomInteger(0, 1);
            var2 = line2[counter];
            break;

        case line1[1]:
            counter = randomInteger(2, 3);
            var2 = line2[counter];
            break;
        case line1[2]:
            counter = randomInteger(4, 5);
            var2 = line2[counter];
            break;
        case line1[3]:
            counter = randomInteger(6, 8);
            var2 = line2[counter];
            break;
        default:
            var2 = "";
    }
    console.log(var2);
}

function setVar3(var2) {
    switch (var2) {
        case line2[0]:
        case line2[1]:
            var3 = "";
            break;
        case line2[2]:
        case line2[3]:
            counter = randomInteger(0, 1);
            var3 = line3[counter];
            break;
        case line2[4]:
        case line2[5]:
            var3 = line3[2];
            break;
        case line2[7]:
            counter = randomInteger(3, 4);
            var3 = line3[counter];
            break;
        default:
            var3 = "";
    }
    console.log(var3);
}

function setVar4(var3) {
    switch (var3) {
        case line3[0]:
        case line3[1]:
        case line3[2]:
            counter = randomInteger(0, 4);
            var4 = line4[counter];
            break;
        default:
            var4 = "";
    }
    console.log(var4);
}

function setVar5(var4) {
    switch (var4) {
        case line4[0]:
        case line4[1]:
        case line4[2]:
        case line4[3]:
        case line4[4]:
            counter = randomInteger(0, 5);
            var5 = line5[counter];
            break;
        default:
            var5 = "";
    }
    console.log(var5);
}

function setVar6(var5) {
    switch (var5) {
        case line5[0]:
            counter = randomInteger(0, 1);
            var6 = line6[counter];
            break;
        case line5[2]:
        case line5[3]:
        case line5[4]:
            var6 = line6[1];
            break;
        case line5[5]:
            counter = randomInteger(1, 2);
            var6 = line6[counter];
            break;
        default:
            var6 = "";
    }
    console.log(var6);
}

function setVar7(var6) {
    switch (var6) {
        case line6[1]:
            counter = randomInteger(0, 1);
            var7 = line7[counter];
            break;
        default:
            var7 = "";
    }
    console.log(var7);
}

function setVar8(var7) {
    switch (var7) {
        case line7[0]:
        case line7[1]:
            counter = randomInteger(0, 1);
            var8 = line8[counter];
            break;
        default:
            var8 = "";
    }
    console.log(var8);
}

function setVar9(var8) {
    switch (var8) {
        case line8[0]:
            counter = randomInteger(0, 2);
            var9 = line9[counter];
            break;
        case line8[1]:
            counter = randomInteger(3, 5);
            var9 = line9[counter];
            break;
        default:
            var9 = "";
    }
    console.log(var9);
}

function setVar10(var9) {
    switch (var9) {
        case line9[3]:
        case line9[4]:
        case line9[5]:
            counter = randomInteger(0, 1);
            var10 = line10[counter];
            break;
        default:
            var10 = "";
    }
    console.log(var10);
}

function setVar11(var10) {
    switch (var10) {
        case line10[0]:
            counter = randomInteger(0, 2);
            var11 = line11[counter];
            break;
        case line10[1]:
            counter = randomInteger(3, 5);
            var11 = line11[counter];
            break;
        default:
            var11 = "";
    }
    console.log(var11);
}

function setVar12(var11) {
    switch (var11) {
        case line11[0]:
            counter = randomInteger(0, 3);
            var12 = line12[counter];
            break;
        case line11[3]:
        case line11[4]:
            counter = randomInteger(4, 6);
            var12 = line12[counter];
            break;
        case line11[5]:
            counter = randomInteger(4, 7);
            var12 = line12[counter];
            break;
        default:
            var12 = "";
    }
    console.log(var12);
}


function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}