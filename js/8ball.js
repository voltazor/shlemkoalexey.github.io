var answersEN=[
"It is certain",
"It is decidedly so",
"Without a doubt",
"Yes — definitely",
"You may rely on it",
"As I see it, yes",
"Most likely",
"Outlook good",
"Signs point to yes",
"Yes ",
"Reply hazy, try again",
"Ask again later",
"Better not tell you now",
"Cannot predict now",
"Concentrate and ask again",
"Don’t count on it",
"My reply is no",
"My sources say no",
"Outlook not so good",
"Very doubtful"
];
var answersRU=[
"Бесспорно",
"Предрешено",
"Никаких сомнений",
"Определённо да",
"Можешь быть уверен в этом",
"Мне кажется — «да»",
"Вероятнее всего",
"Хорошие перспективы",
"Знаки говорят — «да»",
"Да",
"Пока не ясно, попробуй снова",
"Спроси позже",
"Лучше не рассказывать",
"Сейчас нельзя предсказать",
"Сконцентрируйся и спроси опять",
"Даже не думай",
"Мой ответ — «нет»",
"По моим данным — «нет»",
"Перспективы не очень хорошие",
"Весьма сомнительно"
];
var answerText;
var answerLang;

function generateAnswer(language){
    if (language == "EN") {
        answerText = answersEN[randomInteger(0, answersEN.length-1)];
    } else {
        answerText = answersRU[randomInteger(0, answersRU.length-1)];
    }
}

function setAnswer(){
    $("#ball-text").html(answerText);    
}
$("#ball").click(function(){
    generateAnswer(answerLang);
    setAnswer();
});

$("#language-switch").click(function(){
    if ($(this).html()=="RU") {
        $(this).html("EN");
        answerLang = "EN";
    }else{
        $(this).html("RU");
        answerLang = "RU";
    }
});