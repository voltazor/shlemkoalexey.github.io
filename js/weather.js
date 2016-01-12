$(document).ready(function () {
    var API = "27e5cd8c0ad6539ba11d8643aeece8d0";
    var locationRequestAdress = "http://ipinfo.io";
    var weatherRequestAdress;
    $.getJSON(locationRequestAdress, function (data) {
         
        if(data.city.length>0){
            $("#city").append(data.city);
            weatherRequestAdress = 'http://api.openweathermap.org/data/2.5/weather?q={' + data.city + "}&appid=" + API;
        }else{
            $("#city").append("No city data");
            $("#lat").append(" " + Number(data.loc.split(",")[0]).toFixed(2));
            $("#lon").append(" " + Number(data.loc.split(",")[1]).toFixed(2));
            weatherRequestAdress = 'http://api.openweathermap.org/data/2.5/weather?lat=' + data.loc.split(",")[0] + "&lon=" + data.loc.split(",")[1]+ "&appid="+API;
        }
        

        $.getJSON(weatherRequestAdress , function (data) {
            setBackground(temperatureFromKelvinToCelsium(data.main.temp));

            $("#weather").append(capitalizeFirstLetter((data.weather[0].description)));
            $("#temperature").append(temperatureFromKelvinToCelsium(data.main.temp));
            $("#pressure").append(" " + pressurefromHpaToMmHg(data.main.pressure));
            $("#humidity").append(data.main.humidity);
            $("#wind-speed").append(" " + data.wind.speed);
            $("#wind-dest").append(" " + transformWindDestination(data.wind.deg));
            $("#icon").append("<img src=http://openweathermap.org/img/w/" + data.weather[0].icon + ".png>");
            $(".preloader").css("display", "none");
        });
    });

    $("#temperature-c-switch").click(function () {
        $.getJSON(locationRequestAdress, function (data) {
            
            $.getJSON(weatherRequestAdress, function (data) {
                $("#temperature").html(temperatureFromKelvinToCelsium(data.main.temp));
                $("#degrees").html("°C");
            });
        });
    });
    $("#temperature-f-switch").click(function () {
        $.getJSON(locationRequestAdress, function (data) {
            $.getJSON(weatherRequestAdress, function (data) {
                $("#temperature").html(temperatureFromKelvinToFahrenheit(data.main.temp));
                $("#degrees").html("°F");
            });
        });
    });
});


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function transformWindDestination(wind) {
    if (wind > 338 || wind <= 23) {
        return "N";
    } else if (wind > 23 && wind <= 68) {
        return "NE";
    } else if (wind > 68 && wind <= 113) {
        return "E";
    } else if (wind > 113 && wind <= 158) {
        return "SE";
    } else if (wind > 158 && wind <= 203) {
        return "S";
    } else if (wind > 203 && wind <= 248) {
        return "SW";
    } else if (wind > 248 && wind <= 293) {
        return "W";
    } else if (wind > 293 && wind <= 338) {
        return "NW";
    } else {
        return "Unknown";
    }
}

function setBackground(temp) {
    if (temp <= 0) {
        $(".background").css("background-image", "url(http://www.goodwp.com/images/201105/goodwp.com_18147.jpg)");
    } else if (temp < 10) {
        $(".background").css("background-image", "url(http://www.hyperionherbs.com/wp-content/uploads/2014/11/Red-Autumn.jpg.jpg)");
    } else if (temp < 20) {
        $(".background").css("background-image", "url(http://www.usapics.net/wallpapers/2012/06/Glade-Creek-in-Early-Spring-New-River-Gorge-National-River-West-Virginia-1080x1920.jpg)");
    } else if (temp >= 20) {
        $(".background").css("background-image", "url(http://quotesideas.com/wp-content/uploads/2015/03/Summer-Wallpapers-2.jpg)");
    } else {
    }

}

function pressurefromHpaToMmHg(pressure) {
    return Math.round(pressure * 0.75);
}

function temperatureFromKelvinToCelsium(temperature) {
    return Math.round(temperature - 273);
}
function temperatureFromKelvinToFahrenheit(temperature) {
    return Math.round(1.8 * (temperature - 273) + 32);
}
