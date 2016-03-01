var questionCounter = 0;
var correctCounter = 0;
var questionText;
var question1object;
var question2object;
var objectKeyForQuestion;
var answerText;

var QUESTION;
var ANSWER;

var playerAnswers = [];

function questionCounterUpdate() {
    questionCounter++;
    $("#question-counter").html(questionCounter);
}

function correctCounterUpdate() {
    correctCounter++;
    $("#correct-counter").html(correctCounter);
}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}

function setObjectsForQuestion(questionArray) {
    var array = questionArray.concat();
    var counter = randomInteger(0, array.length - 1);
    question1object = array[counter];
    array.splice(counter, 1);
    counter = randomInteger(0, array.length - 1);
    question2object = array[counter];
    var keysArray = Object.keys(question1object);
    objectKeyForQuestion = keysArray[randomInteger(1, keysArray.length - 1)];
    questionCounterUpdate();
}

function createQuestionInterface() {
    $("#question-number").html("Вопрос № "+(playerAnswers.length+1));
    $("#question-text").html(questionText);
    $("#choose-1").html(question1object.name);
    $("#choose-2").html(question2object.name);
}


function setQuestionText(questionValue, object) {
    questionText = object[questionValue];
}

function bindEvents(objectKeyForQuestion) {
    if (question1object[objectKeyForQuestion] > question2object[objectKeyForQuestion]) {
        $("#choose-1").click(function () {
            playerAnswers.push(true);
            if (playerAnswers.length<5) {
                $("#question-text").append(answerText);
                correctCounterUpdate();
                $('#choose-1, #choose-2').unbind();  
                question(QUESTION, ANSWER);                
            }else{
                $("#question-number").html("Конец.");  
                $("#question-text").html("Количество правильных ответов - " + numberOfCorrect(playerAnswers)+". Еще раз?");
                $("#generate-question, #theme-selector").prop("disabled",false);
                $("#choose-1, #choose-2").prop("disabled",true);
            };
            addColorsToAnswers(playerAnswers);
        });
        $("#choose-2").click(function () {
            playerAnswers.push(false);
            if (playerAnswers.length<5) {
                $("#question-text").append(answerText);
                $('#choose-1, #choose-2').unbind(); 
                question(QUESTION, ANSWER);                
            }else{
                $("#question-number").html("Конец.");  
                $("#question-text").html("Количество правильных ответов - " + numberOfCorrect(playerAnswers)+". Еще раз?");
                $("#generate-question, #theme-selector").prop("disabled",false);
                $("#choose-1, #choose-2").prop("disabled",true);
            };
            addColorsToAnswers(playerAnswers);            
        });
    } else {
        $("#choose-1").click(function () {
            playerAnswers.push(false);
            if (playerAnswers.length<5) {
                $("#question-text").append(answerText);
                $('#choose-1, #choose-2').unbind();   
                question(QUESTION, ANSWER);                
            }else{
                $("#question-number").html("Конец."); 
                $("#question-text").html("Количество правильных ответов - " + numberOfCorrect(playerAnswers)+". Еще раз?");
                $("#generate-question, #theme-selector").prop("disabled",false);
                $("#choose-1, #choose-2").prop("disabled",true);
            };   
            addColorsToAnswers(playerAnswers);     
        });
        $("#choose-2").click(function () {
            playerAnswers.push(true);
            if (playerAnswers.length<5) {
                $("#question-text").append(answerText);
                correctCounterUpdate();
                $('#choose-1, #choose-2').unbind();          
                question(QUESTION, ANSWER);                
            }else{
                $("#question-number").html("Конец.");                
                $("#question-text").html("Количество правильных ответов - " + numberOfCorrect(playerAnswers)+". Еще раз?");
                $("#generate-question, #theme-selector").prop("disabled",false);
                $("#choose-1, #choose-2").prop("disabled",true);
            };     
            addColorsToAnswers(playerAnswers);   
        });
    }
}

function addColorsToAnswers(array){
    for (var i = 0; i < array.length; i++) {
        if (array[i]) {
            $(".number"+(i+1)).addClass("answer-correct");
        }else{
            $(".number"+(i+1)).addClass("answer-wrong");
        };
    };
}
function setAnswerText(question) {
    switch (question) {
        case solarSystemQuestions.distanceFromSun:
            answerText = question1object.name + " располагается от солнца на расстоянии " + question1object.distanceFromSun + " а.е., а " + question2object.name + " - на " + question2object.distanceFromSun + " а.е.";
            break;
        case solarSystemQuestions.radius:
            answerText = question1object.name + " имеет радиус " + question1object.radius + " км, а " + question2object.name + " - " + question2object.radius + " км.";
            break;
        case solarSystemQuestions.dayLength:
            answerText = question1object.name + " совершает оборот вокруг своей оси за " + question1object.dayLength + " дн., а " + question2object.name + " - за " + question2object.dayLength + " дн.";
            break;
        case solarSystemQuestions.yearLength:
            answerText = question1object.name + " совершает оборот вокруг солнца за " + question1object.yearLength + " дн., а " + question2object.name + " - на " + question2object.yearLength + " дн.";
            break;
        case solarSystemQuestions.firstSpaceSpeed:
            answerText = question1object.name + " имеет первую космическую скорость " + question1object.firstSpaceSpeed + " км/с, а " + question2object.name + " - " + question2object.firstSpaceSpeed + " км/с.";
            break;
        case solarSystemQuestions.surfaceTemperature:
            answerText = question1object.name + " имеет температуру поверхности " + question1object.surfaceTemperature + " К, а " + question2object.name + " -  " + question2object.surfaceTemperature + " К.";
            break;
        case countriesQuestions.landArea:
            answerText = question1object.name + " имеет площадь " + question1object.landArea + " км<sup>2</sup>, а " + question2object.name + " - " + question2object.landArea + " км<sup>2</sup>.";
            break;
        case countriesQuestions.population:
            answerText = question1object.name + " имеет население " + question1object.population + " млн. человек, а " + question2object.name + " - " + question2object.population + " млн. человек.";
            break;
        case countriesQuestions.GDP:
            answerText = question1object.name + " имеет ВВП " + question1object.GDP + " млрд. долл., а " + question2object.name + " - " + question2object.GDP + " млрд. долл.";
            break;
        case countriesQuestions.HDI:
            answerText = question1object.name + " имеет ИЧР " + question1object.HDI + " , а " + question2object.name + " - " + question2object.HDI + ".";
            break;
        case inventionsQuestions.inventionYear:
            answerText = question1object.name + " - изобретение " + question1object.inventionYear + " года, а " + question2object.name + " - " + question2object.inventionYear + " года.";
            break;
        case corporationsQuestion.foundation:
            answerText = "Компания "+question1object.name + " основана в "+question1object.foundation+" году, а "+question2object.name + " - в "+ question2object.foundation + " году.";
            break;
        case corporationsQuestion.employees:
            answerText = "В компании "+question1object.name+" "+question1object.employees +" тыс. сотрудников, а в "+question2object.name+" - " + question2object.employees+" тыс.";
            break;
        case corporationsQuestion.tradeTurnover:
            answerText = "Компания "+question1object.name+" имеет годовой оборот "+question1object.tradeTurnover+" млрд. дол., а "+question2object.name+" - "+question2object.tradeTurnover+" млрд.дол.";
            break;
        case metalsQuestions.density:
            answerText = question1object.name+" имеет плотность "+question1object.density+" г/см<sup>3</sup>, а "+question2object.name+" - "+question2object.density+" г/см<sup>3</sup>.";
            break;
        case metalsQuestions.meltingPoint:
            answerText = question1object.name+" имеет температуру плавления "+question1object.meltingPoint+" °C, а "+question2object.name+" - "+question2object.meltingPoint+" °C.";
            break;
        case metalsQuestions.brinellsHardness:
            answerText = question1object.name+" имеет твердость "+question1object.brinellsHardness+" ед. по Бринеллю, а "+question2object.name+" - "+question2object.brinellsHardness+" ед.";
            break;
        default:
            alert("Question generation error!");
    }
}

function question (array, questions){
    setObjectsForQuestion(array);
    setQuestionText(objectKeyForQuestion, questions);
    createQuestionInterface();
    bindEvents(objectKeyForQuestion);
    setAnswerText(questionText);       
}

function numberOfCorrect(array){
    var a = 0;
    for (var i = 0; i <= array.length; i++){
        if (array[i]) {
            a++;
        };
    }
    return a;
}


$(document).ready(function () {
    $("#theme-selector").prop('value', false);
    $("#generate-question").click(function () {
        playerAnswers = [];
        $('#choose-1, #choose-2').unbind();
        $(".answers div").removeClass("answer-correct");
        $(".answers div").removeClass("answer-wrong");
        if ($("#theme-selector").val() === "Планеты") {
            QUESTION = solarSystemArray;
            ANSWER = solarSystemQuestions;       
        } else if ($("#theme-selector").val() === "Государства") {
            QUESTION = countriesArray;
            ANSWER = countriesQuestions;
        } else if ($("#theme-selector").val() === "Изобретения") {
            QUESTION = inventionsArray;
            ANSWER = inventionsQuestions;
        } else if ($("#theme-selector").val() === "Корпорации") {
            QUESTION = corporationsArray;
            ANSWER = corporationsQuestion;
        } else if ($("#theme-selector").val() === "Металлы") {
            QUESTION = metalsArray;
            ANSWER = metalsQuestions;   
        }
    question(QUESTION, ANSWER);
    $("#generate-question, #theme-selector").prop("disabled",true);
    $("#choose-1, #choose-2").prop("disabled",false);
    });
});

