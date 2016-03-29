$(document).ready(function(){

    var requestAdress = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Ftrofey.net%2Findex.php%3Foption%3Dcom_tvguide%26view%3Dprograms%26format%3Draw%26video%3D1%26date%3D16-03-29'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    var nowDate = new Date();
    console.log(nowDate.getFullYear()+"-"+(nowDate.getMonth()+1)+"-"+nowDate.getDate());
    $.getJSON(requestAdress)
    .done(function(data){
        //console.log(data.query.results.body.content);
        
        for (var i = 0; i < data.query.results.body.table.tbody.tr.length; i++) {
           $("body").append(unicodeToChar(data.query.results.body.table.tbody.tr[i].th));
           $("body").append(unicodeToChar(data.query.results.body.table.tbody.tr[i].td));
           $("body").append("<br>");
       };

   })

});






function unicodeToChar(text) {
 return text.replace(/\\u[\dA-F]{4}/gi, 
  function (match) {
     return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
 });
}
