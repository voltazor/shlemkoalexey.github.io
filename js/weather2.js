var API = "27e5cd8c0ad6539ba11d8643aeece8d0";
var locationRequestAdress = "http://ipinfo.io";
var weatherRequestAdress;
var dataForChartRequestAdress;
var arrayForChart = [];

$(document).ready(function () {
  getWeatherData();
});

$("#btn-refresh").click(function(){
  getWeatherData();
});




function getWeatherData(){
  $.getJSON(locationRequestAdress)
  .done(function(data){
    if(data.city.length>0){
      weatherRequestAdress = 'http://api.openweathermap.org/data/2.5/weather?q={' + data.city + "}&appid=" + API;
    }else{
      weatherRequestAdress = 'http://api.openweathermap.org/data/2.5/weather?lat=' + data.loc.split(",")[0] + "&lon=" + data.loc.split(",")[1]+ "&appid="+API;
    }
    $("#country").html(data.country);
    if (data.city.length > 0) {
      $("#city").html(capitalizeFirstLetter(data.city));
    }else{
      $("#city").html("No city data");
    };


    $.getJSON(weatherRequestAdress)
    .done(function(data){
      $("#temperature").html(temperatureFromKelvinToCelsium(data.main.temp) + " °C");
      $("#weather").html(data.weather[0].main);
      $("#wind").html(data.wind.speed + " m/s " + transformWindDestination(data.wind.deg));
      $("#pressure").html(pressurefromHpaToMmHg(data.main.pressure) + " mmHg");
      $("#humidity").html(data.main.humidity + " %");
      var sunRiseTime = new Date(data.sys.sunrise*1000);
      $("#sunrise").html(sunRiseTime.getHours()+":"+sunRiseTime.getMinutes());
      var sunSetTime = new Date(data.sys.sunset*1000);
      $("#sunset").html(sunSetTime.getHours()+":"+sunSetTime.getMinutes());
      drawChart();
    })
    .fail(function(){
      //CODE FOR FAIL WEATHER REQUEST
    });
  })
  .fail(function(){
    //CODE FOR FAIL LOCATION REQUEST
  });
}

function drawChart(){
  $.getJSON(locationRequestAdress)
  .done(function(data){
    if(data.city.length>0){
      dataForChartRequestAdress = 'http://api.openweathermap.org/data/2.5/forecast?q={' + data.city + "}&appid=" + API;
    }else{
      dataForChartRequestAdress = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + data.loc.split(",")[0] + "&lon=" + data.loc.split(",")[1]+ "&appid="+API;
    }

    $.getJSON(dataForChartRequestAdress)
    .done(function(data){
      console.log(data);
      $(".week-weather-section").empty();
      for (var i = 0; i < data.list.length; i++) {
        var date = new Date(data.list[i].dt * 1000);
        arrayForChart.push([ date , temperatureFromKelvinToCelsium(data.list[i].main.temp)]);

        $(".week-weather-section").append("<div><img src=http://openweathermap.org/img/w/"+data.list[i].weather[0].icon+".png><div>"+date.getDate()+" " + convertMonthNumberToText(date.getMonth())+ " </div><div>"+date.getHours()+":00"+"</div><div>"+capitalizeFirstLetter(data.list[i].weather[0].description)+"</div></div>");
      };
      console.log(arrayForChart);
      ImportGoogleChart();
    })
    .fail(function(){
      //CODE FOR FAIL WEATHER REQUEST
    });
  })
  .fail(function(){
    //CODE FOR FAIL LOCATION REQUEST
  });
}

function convertMonthNumberToText(month){
  var monthText;
  switch (month) {
    case 0: monthText = "Jan";
    break;
    case 1: monthText = "Feb";
    break;
    case 2: monthText = "Mar";
    break;
    case 3: monthText = "Apr";
    break;
    case 4: monthText = "May";
    break;
    case 5: monthText = "Jun";
    break;
    case 6: monthText = "Jul";
    break;
    case 7: monthText = "Aug";
    break;
    case 8: monthText = "Sep";
    break;
    case 9: monthText = "Oct";
    break;
    case 10: monthText = "Nov";
    break;
    case 11: monthText = "Dec";
    break;
    default: monthText = "Unknown";
  }
  return monthText;
}

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
/*
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
*/
function pressurefromHpaToMmHg(pressure) {
  return Math.round(pressure * 0.75);
}

function temperatureFromKelvinToCelsium(temperature) {
  return Math.round(temperature - 273);
}
/*
function temperatureFromKelvinToFahrenheit(temperature) {
  return Math.round(1.8 * (temperature - 273) + 32);
}
*/
function ImportGoogleChart(){
  google.charts.load('current', {'packages':['line', 'corechart']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var chartDiv = document.getElementById('chart-section');

    var data = new google.visualization.DataTable();
    data.addColumn('date', '');
    data.addColumn('number', "°C");


    data.addRows(arrayForChart);

    var materialOptions = {
      chart: {
        title: 'Temperature for next 5 days'
      },
      curveType: 'function',
      legend: { position: 'none' }
    };



    function drawMaterialChart() {
      var materialChart = new google.charts.Line(chartDiv);
      materialChart.draw(data, materialOptions);
    }

    drawMaterialChart();

  }
}
