$(document).ready(function(){
  var API = "27e5cd8c0ad6539ba11d8643aeece8d0";
  var locationRequestAdress = "http://ipinfo.io";
  var weatherRequestAdress = 'http://api.openweathermap.org/data/2.5/weather?q={';

  $.getJSON(locationRequestAdress, function(data){
    $("#city").append(data.city);
    $.getJSON(weatherRequestAdress+data.city+"}&appid="+API ,function(data){
      setBackground(Math.round((data.main.temp-273)));
      $("#weather").append(capitalizeFirstLetter((data.weather[0].description)));
      $("#temperature").append(Math.round((data.main.temp-273)));
      $("#pressure").append(" "+data.main.pressure);
      $("#humidity").append(data.main.humidity);
      $("#wind-speed").append(" " + data.wind.speed);
      $("#wind-dest").append(" "+ transformWindDestination(data.wind.deg));
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
    return "No wind";
  }
}

function setBackground(temp) {
  if (temp < 0) {
    $(".background").css("background-image", "url(http://technorepublica.com/wp-content/uploads/2015/12/snow-hd-wallpaper-download-snow-images-free.jpg)");
  } else if (temp < 10) {
    $(".background").css("background-image", "url(http://www.hyperionherbs.com/wp-content/uploads/2014/11/Red-Autumn.jpg.jpg)");
  } else if (temp < 20) {
    $(".background").css("background-image", "url(http://www.usapics.net/wallpapers/2012/06/Glade-Creek-in-Early-Spring-New-River-Gorge-National-River-West-Virginia-1080x1920.jpg)");
  } else if (temp >=20) {
    $(".background").css("background-image", "url(http://quotesideas.com/wp-content/uploads/2015/03/Summer-Wallpapers-2.jpg)");
  } else {};

};
