var questionCounter = 0;
var correctCounter = 0;
var questionText;
var question1object;
var question2object;
var objectKeyForQuestion;
var answerText;



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
            $("#question-text").html("<p class='color-green'>Правильный ответ</p>");
            $("#question-text").append(answerText);
            correctCounterUpdate();
            $('#choose-1, #choose-2').unbind();
        });
        $("#choose-2").click(function(){
            $("#question-text").html("<p class='color-red'>Неправильный ответ</p>");
            $("#question-text").append(answerText);
            $('#choose-1, #choose-2').unbind();
        });
    }else{
        $("#choose-1").click(function(){
            $("#question-text").html("<p class='color-red'>Неправильный ответ</p>");
            $("#question-text").append(answerText);
            $('#choose-1, #choose-2').unbind();
        });
        $("#choose-2").click(function(){
            $("#question-text").html("<p class='color-green'>Правильный ответ</p>"); 
            $("#question-text").append(answerText);
            correctCounterUpdate();
            $('#choose-1, #choose-2').unbind();
        });
    }
}

function setAnswerText(question){
    switch(question){
        case solarSystemQuestions.distanceFromSun: 
            answerText = question1object.name + " располагается от солнца на расстоянии " + question1object.distanceFromSun+" а.е., а "+question2object.name+" - на "+question2object.distanceFromSun+ " а.е.";
            break;
        case solarSystemQuestions.radius:
            answerText = question1object.name + " имеет радиус " + question1object.radius+" км, а "+question2object.name+" - "+question2object.radius+ " км.";
            break;
        case solarSystemQuestions.dayLength:
            answerText = question1object.name + " совершает оборот вокруг своей оси за " + question1object.dayLength+" дн., а "+question2object.name+" - за "+question2object.dayLength+ " дн.";
            break;
        case solarSystemQuestions.yearLength:
            answerText = question1object.name + " совершает оборот вокруг солнца за " + question1object.yearLength+" дн., а "+question2object.name+" - на "+question2object.yearLength+ " дн.";
            break;
        case solarSystemQuestions.firstSpaceSpeed:
            answerText = question1object.name + " имеет первую космическую скорость " + question1object.firstSpaceSpeed+" км/с, а "+question2object.name+" - "+question2object.firstSpaceSpeed+ " км/с.";
            break;
        case solarSystemQuestions.surfaceTemperature:
            answerText = question1object.name + " имеет температуру поверхности " + question1object.surfaceTemperature+" К, а "+question2object.name+" -  "+question2object.surfaceTemperature+ " К.";
            break;
        case countriesQuestions.landArea:
            answerText = question1object.name + " имеет площадь "+question1object.landArea+" км<sup>2</sup>, а "+question2object.name+ " - "+question2object.landArea+" км<sup>2</sup>.";
            break;
        case countriesQuestions.population:
            answerText = question1object.name + " имеет население "+question1object.population+" млн. человек, а "+question2object.name+ " - "+question2object.population+" млн. человек.";
            break;
        case countriesQuestions.GDP:
            answerText = question1object.name + " имеет ВВП "+question1object.GDP+" млрд. долл., а "+question2object.name+ " - "+question2object.GDP+" млрд. долл.";
            break;
        case countriesQuestions.HDI:
            answerText = question1object.name + " имеет ИЧР "+question1object.HDI+" , а "+question2object.name+ " - "+question2object.HDI+".";
            break;
        case inventionsQuestions.inventionYear:
            answerText = question1object.name + " - изобретение "+question1object.inventionYear + " года, а "+question2object.name+" - "+question2object.inventionYear+" года."
            break;
        default:
            alert("Question generation error!");
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
            setAnswerText(questionText);
            console.log(answerText);     
        }else if ($("#theme-selector").val()==="Государства") {
            setObjectsForQuestion(countriesArray);
            setQuestionText(objectKeyForQuestion, countriesQuestions);
            createQuestionInterface();
            bindEvents(objectKeyForQuestion); 
            setAnswerText(questionText);
            console.log(answerText);     
        }else if ($("#theme-selector").val()==="Изобретения XVII - XX веков") {
            setObjectsForQuestion(inventionsArray);
            setQuestionText(objectKeyForQuestion, inventionsQuestions);
            createQuestionInterface();
            bindEvents(objectKeyForQuestion);
            setAnswerText(questionText);
            console.log(answerText);
        };


    });

});