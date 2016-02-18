var questionCounter = 0;
var correctCounter = 0;
var questionText;
var question1object;
var question2object;
var objectKeyForQuestion;
var answerText;

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

var inventionsArray = [
    {
        name: "Телескоп",
        inventionYear: 1608
    },
    {
        name: "Барометр",
        inventionYear: 1643
    },
    {
        name: "Фортепиано",
        inventionYear: 1709
    },
    {
        name: "Секстант",
        inventionYear: 1731
    },
    {
        name: "Громоотвод",
        inventionYear: 1752
    },
    {
        name: "Секундомер",
        inventionYear: 1776
    },
    {
        name: "Парашют",
        inventionYear: 1783
    },
    {
        name: "Шрапнель",
        inventionYear: 1784
    },
    {
        name: "Вакцинация",
        inventionYear: 1798
    },
    {
        name: "Метроном",
        inventionYear: 1812
    },
    {
        name: "Стетоскоп",
        inventionYear: 1816
    },
    {
        name: "Электромотор",
        inventionYear: 1821
    },
    {
        name: "Фотография",
        inventionYear: 1826
    },
    {
        name: "Лампа накаливания",
        inventionYear: 1835
    },
    {
        name: "Азбука Морзе",
        inventionYear: 1838
    },
    {
        name: "Анестезия",
        inventionYear: 1842
    },
    {
        name: "Гироскоп",
        inventionYear: 1852
    },
    {
        name: "Пастеризация",
        inventionYear: 1862
    },
    {
        name: "Динамит",
        inventionYear: 1866
    },
    {
        name: "Героин",
        inventionYear: 1874
    },
    {
        name: "Телефон",
        inventionYear: 1876
    },
    {
        name: "Автомобиль",
        inventionYear: 1879
    },
    {
        name: "Бюстгальтер",
        inventionYear: 1889
    },
    {
        name: "Рентгеновское излучение",
        inventionYear: 1895
    },
    {
        name: "Самолет",
        inventionYear: 1903
    },
    {
        name: "Счетчик Гейгера",
        inventionYear: 1913
    },
    {
        name: "Полиграф",
        inventionYear: 1921
    },
    {
        name: "Пенициллин",
        inventionYear: 1928
    },
    {
        name: "Радиотелескоп",
        inventionYear: 1931
    },
    {
        name: "Радар",
        inventionYear: 1935
    },
    {
        name: "Компьютер",
        inventionYear: 1938
    },
    {
        name: "Ядерный реактор",
        inventionYear: 1942
    },
    {
        name: "Акваланг",
        inventionYear: 1943
    },
    {
        name: "Атомная бомба",
        inventionYear: 1945
    },
    {
        name: "Кредитная карточка",
        inventionYear: 1950
    },
    {
        name: "Лазер",
        inventionYear: 1960
    },
    {
        name: "Электронная почта",
        inventionYear: 1965
    },
    {
        name: "Караоке",
        inventionYear: 1971
    },
    {
        name: "Мобильный телефон",
        inventionYear: 1973
    },
    {
        name: "Компакт-диск",
        inventionYear: 1980
    },
    {
        name: "Интернет",
        inventionYear: 1983
    },
    {
        name: "Углеродные нанотрубки",
        inventionYear: 1991
    },
    {
        name: "DVD",
        inventionYear: 1995
    }
];

var inventionsQuestions = {
    inventionYear : "Какое из этих изобретений появилось позже?"
};

/*
var metalsArray = [
    {
        name: "Алюминий",
        density: 2.7,  //г/см^3
        meltingPoint: 660, //K
        brinellsHardness: 25,
        heatCapacity: 218.0
    }
];
*/
//http://www.mexel.narod.ru/Metall.html




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
            $("#question-text").html("<p>Правильный ответ</p>");
            $("#question-text").append(answerText);
            correctCounterUpdate();
            $('#choose-1, #choose-2').unbind();
        });
        $("#choose-2").click(function(){
            $("#question-text").html("<p>Неправильный ответ</p>");
            $("#question-text").append(answerText);
            $('#choose-1, #choose-2').unbind();
        });
    }else{
        $("#choose-1").click(function(){
            $("#question-text").html("<p>Неправильный ответ</p>");
            $("#question-text").append(answerText);
            $('#choose-1, #choose-2').unbind();
        });
        $("#choose-2").click(function(){
            $("#question-text").html("<p>Правильный ответ</p>"); 
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