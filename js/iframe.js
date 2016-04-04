$(document).ready(function(){
  outputReciever();
  var nowDate = new Date();  
  var requestAdress = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Ftrofey.net%2Findex.php%3Foption%3Dcom_tvguide%26view%3Dprograms%26format%3Draw%26video%3D1%26date%3D"+stringFromDate(nowDate)+"'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
  $.getJSON(requestAdress)
  .done(function(data){     
    for (var i = 0; i < data.query.results.body.table.tbody.tr.length; i++) {
     var programString = "<div class=\"program\">"+unicodeToChar(data.query.results.body.table.tbody.tr[i].th)+unicodeToChar(data.query.results.body.table.tbody.tr[i].td) + "</div>";
     $(".tele-frame").append(clearStringFromTrash(programString));
     if(programString.indexOf("кордон")>=0 || programString.indexOf("Ни пуха")>=0){
      $(".tele-frame"+" div:last-child").addClass("red");
    }
  };
  console.log(stringFromDate(nowDate));
  for(var i = 0; i < $(".red").length; i++){
    //var nessesaryString = $(".red:nth("+i+")").html().substring(0,6) + $(".red:nth("+i+")").html().substring(5).replace(/\s+/g, '');
    var nessesaryString = $(".red:nth("+i+")").html().substring(0,5);
    nessesaryString = makeStringShorter(nessesaryString);
    $(".sms-frame").append(nessesaryString + "///");
  }
  console.log($(".sms-frame").html().length);
  $(".sms-frame").html($(".sms-frame").html().slice(0, $(".sms-frame").html().length-3));  
});  
});
$("#send-sms-btn").click(function(){
  var smsMessage = $(".sms-frame").html();
  var login = "farewell47";  //логин  
  var password = "123456"; //пароль
  var phoneNumber = $("#phone-select").val(); //номер телефона
  console.log(smsMessage);
  smsMessage = encodeURIComponent(smsMessage);
  console.log(smsMessage);
  var apiAdress = "https://smsc.ru/sys/send.php?login="+login+"&psw="+password+"&phones="+phoneNumber+"&mes="+smsMessage;
  $.getJSON(apiAdress)
  .done(function(data){
   console.log("done");
 })
  .fail(function(){
    console.log("fail");
  });
  $(this).html("Отправлено");
  $(this).addClass("disabled");
  $(this).unbind();  
});


$("#phone-select").click(function(){
  outputReciever();
});

function unicodeToChar(text) {
 return text.replace(/\\u[\dA-F]{4}/gi, 
  function (match) {
   return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
 });
}

function clearStringFromTrash(string){
 string = string.replace("<\\/td>", "");
 string = string.replace("<\\/th>", "");
 string = string.replace("<\\/tr>", "");
 string = string.replace("\\n", "");
 string = string.replace("\\t", "");
 string = string.replace("\\r", "");
 string = string.replace("\\n", "");
 string = string.replace("\\n", "");
 string = string.replace("\\n", "");
 string = string.replace("\\n", "");
 string = string.replace("<\\/table>", "");
 string = string.replace(" \"\}", "");
 return string;
}

function makeStringShorter(string){
  string = string.replace("Дальнийкордон", "Кордон");
  string = string.replace("Нипуха,нипера!", "Нипуха");  
  return string;
}

function stringFromDate(date){
  var string = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
  return string;
}

function outputReciever(){
  if ($('#phone-select').val()==="380938717845") {
    $("#reciever").html("Дедушка");    
  }else if ($('#phone-select').val()==="380934531121") {
    $("#reciever").html("Лёша");    
  }else if ($('#phone-select').val()==="380979627111") {
    $("#reciever").html("Юра");    
  };
}