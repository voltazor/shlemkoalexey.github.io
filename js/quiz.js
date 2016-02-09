var questionCounter = 0;
var correctCounter = 0;
var questionText;
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
var solarSystemQuestions = {
    distanceFromSun: "Какая из этих планет расположена дальше от солнца?", 
    radius: "Какая из этих планет обладает большим радиусом?", 
    dayLength: "На какой из этих планет день длиннее (планета медленней совершает оборот вокруг своей оси)?", 
    yearLength: "На какой из этих планет год длится дольше(планета медленнее совершает оборот вокруг солнца)?", 
    firstSpaceSpeed: "На какой из этих планет первая космическая скорость (необходимая для выхода на орбиту) больше?", 
    surfaceTemperature: "Какая из этих планет имеет большую температуру на поверхности?"  
};

var countriesArray =[
    {
        name: "Украина",
        landArea: 603549,    //км^2
        population: 42.6,   //mil
        GDP: 371,          //bil $
        HDI: 0.734           //0-1, индекс человеческого развития
    },
    {
        name: "Канада",
        landArea: 9984670,    //км^2
        population: 35.6,   //mil
        GDP: 1518,          //bil $
        HDI: 0.902           //0-1, индекс человеческого развития        
    },
    {
        name: "Лихтенштейн",
        landArea : 160,    //км^2
        population: 0.0368,   //mil
        GDP: 3.545,          //bil $
        HDI: 0.889           //0-1, индекс человеческого развития        
    },
    {
        name: "Израиль",
        landArea: 20770,    //км^2
        population: 8.38,   //mil
        GDP: 305.7,          //bil $
        HDI: 0.888           //0-1, индекс человеческого развития        
    },
    {
        name: "США",
        landArea : 9519431,    //км^2
        population: 325.6,   //mil
        GDP: 16724,          //bil $
        HDI: 0.914           //0-1, индекс человеческого развития        
    },
    {
        name: "Габон",
        landArea : 267667,    //км^2
        population: 1.608,   //mil
        GDP: 22.16,          //bil $
        HDI: 0.683           //0-1, индекс человеческого развития        
    },
    {
        name: "Германия",
        landArea: 357021,    //км^2
        population: 80.7,   //mil
        GDP: 3413,          //bil $
        HDI: 0.911           //0-1, индекс человеческого развития        
    },
    {
        name: "Гватемала",
        landArea : 108889,    //км^2
        population: 14.37,   //mil
        GDP: 62.78,          //bil $
        HDI: 0.581           //0-1, индекс человеческого развития        
    },
    {
        name: "Гондурас",
        landArea : 112090,    //км^2
        population: 8.448,   //mil
        GDP: 19.2,          //bil $
        HDI:  0.632          //0-1, индекс человеческого развития        
    },
    {
        name: "Грузия",
        landArea: 69700 ,    //км^2
        population: 3.729,   //mil
        GDP: 16.535,          //bil $
        HDI: 0.745           //0-1, индекс человеческого развития        
    },
    {
        name: "Исландия",
        landArea : 103125,    //км^2
        population: 0.321,   //mil
        GDP: 12.4,          //bil $
        HDI: 0.895           //0-1, индекс человеческого развития        
    },
    {
        name: "Китай",
        landArea : 9596960,    //км^2
        population: 1368.660,   //mil
        GDP: 12383,          //bil $
        HDI: 0.719           //0-1, индекс человеческого развития        
    },
    {
        name: "Латвия",
        landArea : 64589,    //км^2
        population: 1.973,   //mil
        GDP: 32.320,          //bil $
        HDI: 0.819           //0-1, индекс человеческого развития        
    },
    {
        name: "Либерия",
        landArea : 111369,    //км^2
        population: 4.294,   //mil
        GDP: 1.6,          //bil $
        HDI:  0.388          //0-1, индекс человеческого развития        
    },
    {
        name: "Новая Зеландия",
        landArea : 268680,    //км^2
        population: 4.596,   //mil
        GDP: 150.6,          //bil $
        HDI: 0.910           //0-1, индекс человеческого развития        
    },
    {
        name: "Норвегия",
        landArea : 385186,    //км^2
        population: 5.063,   //mil
        GDP: 335.3,          //bil $
        HDI: 0.944           //0-1, индекс человеческого развития        
    },
    {
        name: "Польша",
        landArea : 312679,    //км^2
        population: 38.483,   //mil
        GDP: 481.235,          //bil $
        HDI: 0.821           //0-1, индекс человеческого развития        
    },
    {
        name: "Турция",
        landArea : 783562,    //км^2
        population: 77.695,   //mil
        GDP: 806,          //bil $
        HDI: 0.722           //0-1, индекс человеческого развития        
    },
    {
        name: "Франция",
        landArea : 674685,    //км^2
        population: 66.2,   //mil
        GDP: 2739,          //bil $
        HDI: 0.884           //0-1, индекс человеческого развития        
    },
    {
        name: "Эстония",
        landArea : 45227,    //км^2
        population: 1.311,   //mil
        GDP: 25.255,          //bil $
        HDI: 0.846           //0-1, индекс человеческого развития        
    },
    {
        name: "Япония",
        landArea : 37944,    //км^2
        population: 126.958,   //mil
        GDP: 5390,          //bil $
        HDI: 0.890           //0-1, индекс человеческого развития        
    },
    {
        name: "Великобритания",
        landArea : 243809,    //км^2
        population: 63.395,   //mil
        GDP: 2247,          //bil $
        HDI: 0.892           //0-1, индекс человеческого развития        
    },
    {
        name: "Нидерланды",
        landArea : 41526,    //км^2
        population: 16.805,   //mil
        GDP: 862.9,          //bil $
        HDI: 0.921           //0-1, индекс человеческого развития        
    },
    {
        name: "Нигер",
        landArea : 1267000,    //км^2
        population: 23.47,   //mil
        GDP: 18.55,          //bil $
        HDI:  0.304          //0-1, индекс человеческого развития        
    }
];
var countriesQuestions = {
        landArea: "Какая из этих стран обладает большей площадью территории?",    
        population: "В какой из этих стран население больше?",   
        GDP: "Какая из этих стран обладает большим ВВП?",          
        HDI: "Какая из этих стран имеет больший индекс человеческого развития (показатель уровня жизни, грамотности, образованности и долголетия населения)?"           
};








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


function setQuestionText(questionValue, object){
        questionText = object[questionValue];
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
        if ($("#theme-selector").val()==="Планеты") {
            setObjectsForQuestion(solarSystemArray);
            setQuestionText(objectKeyForQuestion, solarSystemQuestions);
            createQuestionInterface();
            bindEvents(objectKeyForQuestion);     
        }else if ($("#theme-selector").val()==="Государства") {
            setObjectsForQuestion(countriesArray);
            setQuestionText(objectKeyForQuestion, countriesQuestions);
            createQuestionInterface();
            bindEvents(objectKeyForQuestion);     
        };


    });

});