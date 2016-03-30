$(document).ready(function(){


  var nowDate = new Date();
  var frameSelector = ".tele-frame"
  
  var requestAdress = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Ftrofey.net%2Findex.php%3Foption%3Dcom_tvguide%26view%3Dprograms%26format%3Draw%26video%3D1%26date%3D"+stringFromDate(nowDate)+"'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
  $.getJSON(requestAdress)
  .done(function(data){     
    for (var i = 0; i < data.query.results.body.table.tbody.tr.length; i++) {
     var programString = "<div class=\"program\">"+unicodeToChar(data.query.results.body.table.tbody.tr[i].th)+unicodeToChar(data.query.results.body.table.tbody.tr[i].td) + "</div>";
     $(frameSelector).append(clearStringFromTrash(programString));
     if(programString.indexOf("кордон")>=0 || programString.indexOf("Ни пуха")>=0){
      $(frameSelector+" div:last-child").addClass("red");
      }
    };
  console.log(stringFromDate(nowDate));
  var testString = $(".program:first-child").html().substring(0,6) + $(".program:first-child").html().substring(5).replace(/\s+/g, '')
  console.log(testString); 
});

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

function stringFromDate(date){
  var string = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
  return string;
}