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

var countriesArray = [
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
        landArea: 160,    //км^2
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
        landArea: 9519431,    //км^2
        population: 325.6,   //mil
        GDP: 16724,          //bil $
        HDI: 0.914           //0-1, индекс человеческого развития        
    },
    {
        name: "Габон",
        landArea: 267667,    //км^2
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
        landArea: 108889,    //км^2
        population: 14.37,   //mil
        GDP: 62.78,          //bil $
        HDI: 0.581           //0-1, индекс человеческого развития        
    },
    {
        name: "Гондурас",
        landArea: 112090,    //км^2
        population: 8.448,   //mil
        GDP: 19.2,          //bil $
        HDI: 0.632          //0-1, индекс человеческого развития
    },
    {
        name: "Грузия",
        landArea: 69700,    //км^2
        population: 3.729,   //mil
        GDP: 16.535,          //bil $
        HDI: 0.745           //0-1, индекс человеческого развития        
    },
    {
        name: "Исландия",
        landArea: 103125,    //км^2
        population: 0.321,   //mil
        GDP: 12.4,          //bil $
        HDI: 0.895           //0-1, индекс человеческого развития        
    },
    {
        name: "Китай",
        landArea: 9596960,    //км^2
        population: 1368.660,   //mil
        GDP: 12383,          //bil $
        HDI: 0.719           //0-1, индекс человеческого развития        
    },
    {
        name: "Латвия",
        landArea: 64589,    //км^2
        population: 1.973,   //mil
        GDP: 32.320,          //bil $
        HDI: 0.819           //0-1, индекс человеческого развития        
    },
    {
        name: "Либерия",
        landArea: 111369,    //км^2
        population: 4.294,   //mil
        GDP: 1.6,          //bil $
        HDI: 0.388          //0-1, индекс человеческого развития
    },
    {
        name: "Новая Зеландия",
        landArea: 268680,    //км^2
        population: 4.596,   //mil
        GDP: 150.6,          //bil $
        HDI: 0.910           //0-1, индекс человеческого развития        
    },
    {
        name: "Норвегия",
        landArea: 385186,    //км^2
        population: 5.063,   //mil
        GDP: 335.3,          //bil $
        HDI: 0.944           //0-1, индекс человеческого развития        
    },
    {
        name: "Польша",
        landArea: 312679,    //км^2
        population: 38.483,   //mil
        GDP: 481.235,          //bil $
        HDI: 0.821           //0-1, индекс человеческого развития        
    },
    {
        name: "Турция",
        landArea: 783562,    //км^2
        population: 77.695,   //mil
        GDP: 806,          //bil $
        HDI: 0.722           //0-1, индекс человеческого развития        
    },
    {
        name: "Франция",
        landArea: 674685,    //км^2
        population: 66.2,   //mil
        GDP: 2739,          //bil $
        HDI: 0.884           //0-1, индекс человеческого развития        
    },
    {
        name: "Эстония",
        landArea: 45227,    //км^2
        population: 1.311,   //mil
        GDP: 25.255,          //bil $
        HDI: 0.846           //0-1, индекс человеческого развития        
    },
    {
        name: "Япония",
        landArea: 37944,    //км^2
        population: 126.958,   //mil
        GDP: 5390,          //bil $
        HDI: 0.890           //0-1, индекс человеческого развития        
    },
    {
        name: "Великобритания",
        landArea: 243809,    //км^2
        population: 63.395,   //mil
        GDP: 2247,          //bil $
        HDI: 0.892           //0-1, индекс человеческого развития        
    },
    {
        name: "Нидерланды",
        landArea: 41526,    //км^2
        population: 16.805,   //mil
        GDP: 862.9,          //bil $
        HDI: 0.921           //0-1, индекс человеческого развития        
    },
    {
        name: "Нигер",
        landArea: 1267000,    //км^2
        population: 23.47,   //mil
        GDP: 18.55,          //bil $
        HDI: 0.304          //0-1, индекс человеческого развития
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
    inventionYear: "Какое из этих изобретений появилось позже?"
};

var corporationsArray = [
    {
        name: "IKEA",
        foundation: 1943,       //г.
        employees: 147,         //тыс.ч.
        tradeTurnover: 29.29    //млрд. дол.
    },
    {
        name: "Airbus",
        foundation: 1970,              //г.
        employees: 55,               //тыс.ч.
        tradeTurnover: 39.4           //млрд. дол.
    },
    {
        name: "American Express",
        foundation: 1850,              //г.
        employees: 53.5,               //тыс.ч.
        tradeTurnover: 33           //млрд. дол.
    },
    {
        name: "Apple, Inc",
        foundation: 1976,              //г.
        employees: 80,               //тыс.ч.
        tradeTurnover: 170.91           //млрд. дол.
    },
    {
        name: "Audi ",
        foundation: 1910,              //г.
        employees: 53.347,               //тыс.ч.
        tradeTurnover: 48.8           //млрд. дол.
    },
    {
        name: "Boeing",
        foundation: 1916,              //г.
        employees: 152,               //тыс.ч.
        tradeTurnover: 54.8          //млрд. дол.
    },
    {
        name: "Ford",
        foundation: 1903,              //г.
        employees: 164,               //тыс.ч.
        tradeTurnover: 128.9          //млрд. дол.
    },
    {
        name: "General Motors",
        foundation: 1908,              //г.
        employees: 216,               //тыс.ч.
        tradeTurnover: 135.6         //млрд. дол.
    },
    {
        name: "Google Inc.",
        foundation: 1998,              //г.
        employees: 55.4,               //тыс.ч.
        tradeTurnover: 66          //млрд. дол.
    },
    {
        name: "Heineken International",
        foundation: 1864,              //г.
        employees: 55.3,               //тыс.ч.
        tradeTurnover: 14.7          //млрд. дол.
    },
    {
        name: "IBM",
        foundation: 1911,              //г.
        employees: 355,               //тыс.ч.
        tradeTurnover: 12.4          //млрд. дол.
    },
    {
        name: "Intel",
        foundation: 1968,              //г.
        employees: 94.1,               //тыс.ч.
        tradeTurnover: 38.3          //млрд. дол.
    },
    {
        name: "Johnson & Johnson",
        foundation: 1886,              //г.
        employees: 118.7,               //тыс.ч.
        tradeTurnover: 61.58           //млрд. дол.
    },
    {
        name: "LG",
        foundation: 1947,              //г.
        employees: 186,               //тыс.ч.
        tradeTurnover: 78.89           //млрд. дол.
    },
    {
        name: "Lockheed Martin",
        foundation: 1912,              //г.
        employees: 130,               //тыс.ч.
        tradeTurnover: 39.6           //млрд. дол.
    },
    {
        name: "L’Oréal",
        foundation: 1909,              //г.
        employees: 64.6,               //тыс.ч.
        tradeTurnover: 17.47           //млрд. дол.
    },
    {
        name: "Microsoft",
        foundation: 1975,              //г.
        employees: 89.8,               //тыс.ч.
        tradeTurnover: 24.09           //млрд. дол.
    },
    {
        name: "Nissan",
        foundation: 1933,              //г.
        employees: 159.8,               //тыс.ч.
        tradeTurnover: 94.62           //млрд. дол.
    },
    {
        name: "Petronas",
        foundation: 1974,              //г.
        employees: 33.9,               //тыс.ч.
        tradeTurnover: 51           //млрд. дол.
    },
    {
        name: "Philips",
        foundation: 1891,              //г.
        employees: 114.5,               //тыс.ч.
        tradeTurnover: 2.25           //млрд. дол.
    },
    {
        name: "Samsung",
        foundation: 1938,              //г.
        employees: 344,               //тыс.ч.
        tradeTurnover: 220.1           //млрд. дол.
    },
    {
        name: "Siemens",
        foundation: 1847,              //г.
        employees: 360,               //тыс.ч.
        tradeTurnover: 73.51           //млрд. дол.
    },
    {
        name: "Sony",
        foundation: 1946,              //г.
        employees: 140,               //тыс.ч.
        tradeTurnover: 75.41          //млрд. дол.
    },
    {
        name: "The Walt Disney Company",
        foundation: 1923,              //г.
        employees: 150,               //тыс.ч.
        tradeTurnover: 37.84           //млрд. дол.
    },
    {
        name: "Toyota",
        foundation: 1937,              //г.
        employees: 320.5,               //тыс.ч.
        tradeTurnover: 204.1           //млрд. дол.
    }
];

var corporationsQuestion = {
    foundation: "Какая из этих корпораций основана позже?",
    employees: "В какой из этих корпорацией больше сотрудников?",
    tradeTurnover: "Какая из этих корпораций имеет больший торговый оборот?"
};


 var metalsArray = [
    {
       name: "Алюминий",
       density: 2.7,  //г/см^3
       meltingPoint: 660, //С
       brinellsHardness: 25,
    },
    {
       name: "Вольфрам",
       density: 19.25,  //г/см^3
       meltingPoint: 3400, //с
       brinellsHardness: 262,        
    },
    {
       name: "Железо",
       density: 7.87,  //г/см^3
       meltingPoint: 1540, //с
       brinellsHardness: 50,        
    },
    {
       name: "Золото",
       density: 19.32,  //г/см^3
       meltingPoint: 1063, //с
       brinellsHardness: 18,        
    },
    {
       name: "Иридий",
       density: 22.4,  //г/см^3
       meltingPoint: 2410, //с
       brinellsHardness: 170,        
    },
    {
       name: "Кадмий",
       density: 8.65,  //г/см^3
       meltingPoint: 320.9, //с
       brinellsHardness: 21,        
    },
    {
       name: "Кобальт",
       density: 8.85,  //г/см^3
       meltingPoint: 1500, //с
       brinellsHardness: 102,        
    },
    {
       name: "Медь",
       density: 8.92,  //г/см^3
       meltingPoint: 1083, //с
       brinellsHardness: 35,        
    },
    {
       name: "Молибден",
       density: 10.2,  //г/см^3
       meltingPoint: 2620, //с
       brinellsHardness: 153,        
    },
    {
       name: "Никель",
       density: 8.96,  //г/см^3
       meltingPoint: 1453, //с
       brinellsHardness: 68,        
    },
    {
       name: "Олово",
       density: 7.29,  //г/см^3
       meltingPoint: 231.9, //с
       brinellsHardness: 5.2,        
    },
    {
       name: "Палладий",
       density: 12.02,  //г/см^3
       meltingPoint: 1552, //с
       brinellsHardness: 46,        
    },
    {
       name: "Платина",
       density: 21.45,  //г/см^3
       meltingPoint: 1773, //с
       brinellsHardness: 40,        
    },
    {
       name: "Родий",
       density: 12.48,  //г/см^3
       meltingPoint: 1970, //с
       brinellsHardness: 102,        
    },
    {
       name: "Свинец",
       density: 11.34,  //г/см^3
       meltingPoint: 327, //с
       brinellsHardness: 3.9,        
    },
    {
       name: "Титан",
       density: 4.52,  //г/см^3
       meltingPoint: 1670, //с
       brinellsHardness: 73,        
    },
    {
       name: "Хром",
       density: 7.19,  //г/см^3
       meltingPoint: 1900, //с
       brinellsHardness: 114,        
    },
    {
       name: "Цинк",
       density: 7.14,  //г/см^3
       meltingPoint: 419.5, //с
       brinellsHardness: 42,        
    }
];
//http://www.mexel.narod.ru/Metall.html
 var metalsQuestions = {
    density: "Какой из этих металлов обладает большей плотностью?",//г/см^3
    meltingPoint: "Какой из этих металлов более тугоплавкий?",//с
    brinellsHardness: "Какой из этих металлов более твердый?" //единиц
 };
 













