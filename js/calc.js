var prevValue;
var currentValue = 0;
var action;

$(document).ready(function(){
    //numbers

    $("#btnC").click(function(){
        currentValue = 0;
        getCurrentValue();
    });
    $("#btn0").click(function(){
        currentValue = currentValue*10;
        getCurrentValue();
    });
    $("#btn1").click(function(){
        currentValue = currentValue*10+1;
        getCurrentValue();
    });
    $("#btn2").click(function(){
        currentValue = currentValue*10+2;
        getCurrentValue();
    });
    $("#btn3").click(function(){
        currentValue = currentValue*10+3;
        getCurrentValue();
    });
    $("#btn4").click(function(){
        currentValue = currentValue*10+4;
        getCurrentValue();
    });
    $("#btn5").click(function(){
        currentValue = currentValue*10+5;
        getCurrentValue();
    });
    $("#btn6").click(function(){
        currentValue = currentValue*10+6;
        getCurrentValue();
    });
    $("#btn7").click(function(){
        currentValue = currentValue*10+7;
        getCurrentValue();
    });
    $("#btn8").click(function(){
        currentValue = currentValue*10+8;
        getCurrentValue();
    });
    $("#btn9").click(function(){
        currentValue = currentValue*10+9;
        getCurrentValue();
    });

    //actions
    $("#btnplus").click(function(){
        action = "plus";
        prevValue = currentValue;
        currentValue = 0;
    });
    $("#btnmin").click(function(){
        action = "minus";
        prevValue = currentValue;
        currentValue = 0;
    });
    $("#btndiv").click(function(){
        action = "div";
        prevValue = currentValue;
        currentValue = 0;
    });
    $("#btnmul").click(function(){
        action = "mul";
        prevValue = currentValue;
        currentValue = 0;
    });


    //result
    $("#btneq").click(function(){
        switch(action){
            case("plus"):
                currentValue=currentValue+prevValue;
                prevValue=0;
                getCurrentValue();
                break;
            case("minus"):
                currentValue=prevValue-currentValue;
                prevValue=0;
                getCurrentValue();
                break;
            case("div"):
                currentValue=prevValue/currentValue;
                prevValue=0;
                getCurrentValue();
                break;
            case("mul"):
                currentValue=prevValue*currentValue;
                prevValue=0;
                getCurrentValue();
                break;
        }
    });
});


function getCurrentValue(){
    $("#calc-output").html(currentValue);
}