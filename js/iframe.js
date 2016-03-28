$(document).ready(function(){
    // var requestAdress = "http://trofey.net/index.php?option=com_tvguide&view=programs&format=raw&video=1";

    // $.getJSON(requestAdress)
    // .done(function(data){
    //     console.log(data);
    // })
    document.domain = "trofey.net";
});


$("button").click(function(){
    getContentFromIframe("iframe");
});


function getContentFromIframe(iFrameName)
{
 
    var myIFrame = document.getElementById(iFrameName);
    var content = myIFrame.contentWindow.document.body.innerHTML;
 
    alert('content: ' + content);    
 
    content = 'The inside of my frame has now changed';
    myIFrame.contentWindow.document.body.innerHTML = content;
 
}
 