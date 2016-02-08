var questionCounter = 0;
var correctCounter = 0;
var questionText ="<h2>question text please ignore</h2>";
var question1object;
var question2object;
var objectKeyForQuestion;

var solarSystemArray = [
    {
        name: "Меркурий",
        distanceFromSun: 0.387, //a.e.
        radius: 2439.7, //km
        dayLength: 58.646, //days
        yearLength: 87.97, //days
        firstSpaceSpeed: 3.05, //km/s
        surfaceTemperature: 700 //K
    },
    {
        name: "Венера",
        distanceFromSun: 0.723, //a.e.
        radius: 6051.8, //km
        dayLength: 243.02, //days
        yearLength: 224.7, //days
        firstSpaceSpeed: 7.328, //km/s
        surfaceTemperature: 737 //K
    },
    {
        name: "Земля",
        distanceFromSun: 1, //a.e.
        radius: 6371, //km
        dayLength: 1, //days
        yearLength: 365, //days
        firstSpaceSpeed: 7.9, //km/s
        surfaceTemperature: 287 //K    
    },
    {
        name: "Марс",
        distanceFromSun: 1.52, //a.e.
        radius: 3396.9, //km
        dayLength: 1.0025, //days
        yearLength: 687, //days
        firstSpaceSpeed: 3.6, //km/s
        surfaceTemperature: 210 //K
    },
    {
        name: "Юпитер",
        distanceFromSun: 5.2, //a.e.
        radius: 71400, //km
        dayLength: 0.41, //days
        yearLength: 4328.9, //days
        firstSpaceSpeed: 42.073, //km/s
        surfaceTemperature: 128 //K
    },
    {
        name: "Сатурн",
        distanceFromSun: 8, //a.e.
        radius: 60300, //km
        dayLength: 0.4372, //days
        yearLength: 10759, //days
        firstSpaceSpeed: 25, //km/s
        surfaceTemperature: 134 //K
    },
    {
        name: "Уран",
        distanceFromSun: 19.19, //a.e.
        radius: 25559, //km
        dayLength: 0.718, //days
        yearLength: 30660, //days
        firstSpaceSpeed: 15.6, //km/s
        surfaceTemperature: 49 //K
    },
    {
        name: "Нептун",
        distanceFromSun: 30.01, //a.e.
        radius: 24764, //km
        dayLength: 0.671, //days
        yearLength: 60148, //days
        firstSpaceSpeed: 16.7, //km/s
        surfaceTemperature: 55 //K
    },
    {
        name: "Плутон",
        distanceFromSun: 39.482, //a.e.
        radius: 1187, //km
        dayLength: 6.387, //days
        yearLength: 90490, //days
        firstSpaceSpeed: 0.855, //km/s
        surfaceTemperature: 50 //K
    }
];
var solarSystemQuestions = [
    "Какая из этих планет расположена дальше от солнца?", //distanceFromSun
    "Какая из этих планет обладает большим радиусом?", //radius
    "На какой из этих планет день длиннее (планета медленней совершает оборот вокруг своей оси)?", //dayLength
    "На какой из этих планет год длится дольше(планета медленнее совершает оборот вокруг солнца)?", //yearLength
    "На какой из этих планет первая космическая скорость (необходимая для выхода на орбиту) больше?", //firstSpaceSpeed
    "Какая из этих планет имеет большую температуру на поверхности?"  //surfaceTemperature
];











function questionCounterUpdate(){
    questionCounter++;
    $("#question-counter").html(questionCounter);
}

function correctCounterUpdate(){
    correctCounter++;
    $("#correct-counter").html(correctCounter);
}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}

function setObjectsForQuestion(questionArray){
    var array = questionArray.concat();
    var counter = randomInteger(0, array.length - 1);
    question1object = array[counter];
    array.splice(counter,1);
    counter = randomInteger(0, array.length - 1);  
    question2object = array[counter];
    var keysArray = Object.keys(question1object);
    objectKeyForQuestion = keysArray[randomInteger(1, keysArray.length-1)];   
    questionCounterUpdate(); 
}

function createQuestionInterface(){
    $("#question-text").html(questionText);
    $("#choose-1").html(question1object.name);
    $("#choose-2").html(question2object.name);
}

function clearQuestionInterface(){
    $("#question-text").empty();
    $("#choose-1").empty();
    $("#choose-2").empty();  
}

function setQuestionText(questionValue){
    if(questionValue === "distanceFromSun"){
        questionText = solarSystemQuestions[0];
    }else if (questionValue === "radius") {
        questionText = solarSystemQuestions[1];
    }else if (questionValue === "dayLength") {
        questionText = solarSystemQuestions[2];
    }else if (questionValue === "yearLength"){
        questionText = solarSystemQuestions[3];
    }else if (questionValue === "firstSpaceSpeed") {
        questionText = solarSystemQuestions[4];
    }else if (questionValue === "surfaceTemperature"){
        questionText = solarSystemQuestions[5];
    }
}

function bindEvents(objectKeyForQuestion){
    if (question1object[objectKeyForQuestion] > question2object[objectKeyForQuestion]) {
        $("#choose-1").click(function(){
            $("#question-text").html("Правильный ответ");
            correctCounterUpdate();
            $('#choose-1, #choose-2').unbind();
        });
        $("#choose-2").click(function(){
            $("#question-text").html("Неправильный ответ");
            $('#choose-1, #choose-2').unbind();
        });
    }else{
        $("#choose-1").click(function(){
            $("#question-text").html("Неправильный ответ");
            $('#choose-1, #choose-2').unbind();
        });
        $("#choose-2").click(function(){
            $("#question-text").html("Правильный ответ"); 
            correctCounterUpdate();
            $('#choose-1, #choose-2').unbind();
        });
    }
}


$(document).ready(function(){
    $("#theme-selector").prop('value', false);
    $("#generate-question").click(function(){
        setObjectsForQuestion(solarSystemArray);
        setQuestionText(objectKeyForQuestion);
        createQuestionInterface();
        bindEvents(objectKeyForQuestion);        
    });

});